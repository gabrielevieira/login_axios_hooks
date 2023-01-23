import { getUserLocalStorage } from "../context/AuthProvider/utils";
import axios from 'axios'


export const Api = axios.create({
    baseURL: "https://reqres.in/api/",
})

//Vai inteceptar antes da requisição pegar o token
Api.interceptors.request.use(
    (config: any) => {
        const user = getUserLocalStorage()

        config.headers.Authorization = user?.token;

        return config
    },
    (error: any) => {

        return Promise.reject(error)
    }

);
