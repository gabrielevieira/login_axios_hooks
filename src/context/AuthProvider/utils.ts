
import { Api } from "../../services/api"
import { IUser } from "./types";

//Funcao para armazenar o user no localStorage da aplicação
//localStorage.setItem = armazena os dados do user
// localStorage.getItem = pega os dados do user 
export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem('u', JSON.stringify(user));

}

export function getUserLocalStorage() {
    const json = localStorage.getItem('u')

    if (!json) {
        return null
    }

    const user = JSON.parse('u')

    return user ?? null;
}


//funcao que acessa api e armazena os dados atraves do post
export async function LoginRequest(email: string, password: string) {

    try {
        const request = await Api.post('/login', { email, password })
            

        return request.data;

    } catch (error) {
        return null

    }



}