import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";
import useAuth from "../hooks/useAuth";


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, {email, password});

        return result;
    }

    return {
        login,
    }
}

export const useRegister = () => {
    const register = async (email, password, rePassword) => {

        if(password !== rePassword) {
            console.log('Password missmatch!');
            
            return;
        }

        const result = await request.post(`${baseUrl}/register`, {email, password});

        return result;
    }

    return {
        register,
    }
}

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);
    const { request } = useAuth();

    useEffect(() => {
        if(!accessToken) {
            return;
        }

        request.get(`${baseUrl}/logout`)
            .then(userLogoutHandler);
        
    }, [accessToken, request, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }

}