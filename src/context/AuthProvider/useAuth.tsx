import {useContext}  from 'react'
import { AuthContext } from '.'


//Qualquer componente que quiser usar o context é só utilizar o useAuth

export const useAuth = () =>{
    const context = useContext(AuthContext)

    return context;
}