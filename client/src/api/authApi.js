import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";


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

    useEffect(() => {
        if(!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
        .then(() => {
            userLogoutHandler();
        })
        .catch(err => {
            userLogoutHandler();
        });
    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }

}