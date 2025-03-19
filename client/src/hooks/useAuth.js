import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import request from "../utils/request";


export default function useAuth() {
    const {  accessToken, _id, email  } = useContext(UserContext);

    const requestWrapper = (method, url, data, options = {}) => {
        const authOptions = {
            ...options,
            headers: {
                'X-Authorization': accessToken,
                ...options.headers,
            }
        };

        return request.baseRequest(method, url, data, accessToken ? authOptions : options);
    };

    return {
        accessToken,
        _id,
        email,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            delete: requestWrapper.bind(null, 'DELETE'),
        }
    }
}