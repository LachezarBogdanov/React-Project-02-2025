import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/users`;

export const useLogin = () => {
    const login = async (email, password) => {

        try {
            const result = await request.post(`${baseUrl}/login`, {email, password});

            return result;
        } catch (error) {
            throw new Error(error);
        }
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

        try {
            const result = await request.post(`${baseUrl}/register`, {email, password});

            return result;
        } catch (error) {
            throw new Error(error);
        }
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

        try {
            request.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler)
        } catch (error) {
            userLogoutHandler();
            throw new Error(error);
        }

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }

}