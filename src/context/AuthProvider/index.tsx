import React, { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./utils";


export const AuthContext = createContext<IContext>({} as IContext)

// AuthProvider = Fica por fora da aplicação, e vai controlar o estado de quem fez login e quem fez loggout
export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if (user) {
            setUser(user)
        }
    },[]);

    async function authenticate(email: string, password: string) {
        
        const response = await LoginRequest(email, password)

        const payload = { token: response.token, email }


        setUser(payload);
        setUserLocalStorage(payload)      

    }

    function logout() {
        setUser(null)
        setUserLocalStorage(null)
    }

    

    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    )

}