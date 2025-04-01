import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/comments`;

export const useComments = (productId) => {
    const { accessToken } = useAuth();
    const [comments, setComments] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `productId="${productId}"`,
        });

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        }

        request.get(`${baseUrl}?${searchParams.toString()}`, null, options)
            .then(result => {
                setComments(result);
                setPending(false);
            })
    }, [productId, accessToken]);

    return {
        comments,
        pending
    }
}

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (productId, email, comment) => {
        const commentData = {
            productId,
            email,
            comment,
        };

        return request.post(baseUrl, commentData);
    }

    return {
        create,
    }
}

export const useDeleteComment = () => {
    const { request } = useAuth();

    const deleteComment = async (commentId) => {
        return await request.delete(`${baseUrl}/${commentId}`);
    }

    return {
        deleteComment,
    }
}