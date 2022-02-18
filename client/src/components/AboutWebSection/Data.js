import homepage_programmer_image from "../../images/HomePage/homepage_programmer.svg";
import homepage_account_image from "../../images/HomePage/homepage_account.svg";
import homepage_certication_image from "../../images/HomePage/homepage_certification.svg";
import about_web_page_img1 from "../../images/AboutWebPage/about_web_tech_obj1.svg"



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Что такое web-технологии?',
    headline: 'Под "web-технологиями" подразумевается ряд инструментов на подобии HTML, CSS и т.д.',
    description: '__Тех кто занимаются "web-технологиями" называют web-разработчиками. Они делятся между собой в зависимости какие ' +
        'части они разрабатывают. Бывают моменты когда те кто разабатывают клиентскую часть не всегда могут разрабатывать серверную' +
        ' часть. И поэтому в мировом рынке их поделили на 2 типы. Те кто занимаются клиентской частью называют-"Front-End developers (' +
        'фронт-энд разработчики)", а тех кто занимаются серверной частью называют-"Back-End developers (бэк-энд разработчики)". ' +
        '',
    buttonLabel: 'Подробнее по web-разработке...',
    imgStart: false,
    img: about_web_page_img1,
    alt: 'Car',
    dark: true,
    direct: '/aboutweb',
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Что вас ждет по окончанию каждого курса?',
    headline: 'Вы будете сертифицированы по данному курсу',
    description: 'Когда вы закончите обучения и задания данного курса вас ждет экзаменация по данному курсу на сертификат.',
    buttonLabel: 'Подробнее о сертификации...',
    imgStart: true,
    img: homepage_certication_image,
    alt: 'homepage_certification_image',
    direct: '/certification',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Присоединяйся к нам',
    headline: 'Создание аккаунта обойдется тебе всего лишь 2 минуты',
    description: 'Аккаунт нужен для того что бы хранить все ваши результаты и достижения при прохождении наших курсов.' +
        ' А так же для получения сертификата нам понадобится ваши данные.',
    buttonLabel: 'Создать аккаунт!',
    imgStart: false,
    img: homepage_account_image,
    alt: 'homepage_accont_image',
    dark: false,
    direct: '/auth',
    primary: false,
    darkText: true
}