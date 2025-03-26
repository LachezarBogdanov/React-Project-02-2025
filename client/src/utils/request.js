import { toast } from 'react-hot-toast';

const request = async (method, url, data, options = {}) => {
    if(method !== 'GET') {
        options.method = method;
    }

    if(data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data),
        }
    }

    try {
        const response = await fetch(url, options);
        const responseContentType = response.headers.get('Content-Type');

        if (!response.ok) {
            let errorMessage;
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || JSON.stringify(errorData);
            } catch {
                errorMessage = await response.text();
            }
            throw new Error(`${errorMessage}`);
        }

        if (!responseContentType) {
            return;
        }

        return await response.json();

    } catch (error) {
        toast.error(error.message, {
            duration: 3000,
        })
        throw error;
    }
};


export default {
    get: request.bind(null, 'GET'),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE'),
    baseRequest: request,
}