const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const router = Router()
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/register
router.post(
    '/register',
    [
        check('firstname', 'Минимальная длина имени пользователя - 2 символа').isLength({min: 2}),
        check('lastname', 'Минимальная длина фамилии пользователя - 2 символа').isLength({min: 2}),
        check('email', 'Неправильная почта').isEmail(),
        check('password', 'Минимальная длина пароля - 8 символов').isLength({min: 8})
    ],
    async(req, res) => {
    try{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(), message: "Неправильные данные при регистрации"})
        }

        const {firstname, lastname, email, password} = req.body

        const candidate = await User.findOne({ email })

        if(candidate){
            return res.status(400).json({message: "Такой пользователь уже существует"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({firstname, lastname, email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: "Пользователь создан"})
    } catch (e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректную почту').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async(req, res) => {
    try{

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array(), message: "Неправильные данные при входе в систему"})
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user){
            return res.status(400).json({message: "Пользователь не найден"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({message: "Неверный пароль, попробуйте снова"})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            { expiresIn: '1h'}
        )

        res.json({token, userId: user.id})


    } catch (e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router