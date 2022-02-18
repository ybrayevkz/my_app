import {toast, ToastContainer} from "react-toastify";
import 'materialize-css'
import 'react-toastify/dist/ReactToastify.css';
import {useCallback} from "react";


export const useMessage = () => {
    return useCallback(text => {
        if(text != "Пользователь создан"){
            toast.error(text)
        }
        else{
            toast.success("Пользователь создан")
        }
    }, [])
}