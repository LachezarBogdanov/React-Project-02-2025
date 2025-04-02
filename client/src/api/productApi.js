import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";


const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/products`;

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        request.get(baseUrl)
            .then((data) => {
                setProducts(data);
                setIsPending(false);
            })
    }, []);

    return { products, isPending };
}

export const useProduct = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${productId}`)
            .then(setProduct)
    }, [productId])

    return { product };
}

export const useLatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 4,
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then((data) => {
                setLatestProducts(data);
                setPending(false);
            });
    }, []);

    return {latestProducts, pending}
}

export const useCreateProduct = () => {
    const { request } = useAuth();

    const create = (productData) => {
        request.post(baseUrl, productData);
    }

    return {
        create,
    }
}

export const useEditProduct = () => {
    const { request } = useAuth();

    const edit = (productId, productData) => {
        request.put(`${baseUrl}/${productId}`, { ...productData, _id: productId });
    };

    return {
        edit,
    }
}

export const useDeleteProduct = () => {
    const { request } = useAuth();

    const deleteGame = async (productId) => {
        await request.delete(`${baseUrl}/${productId}`)
    };

    return {
        deleteGame,
    }
}

export const useSortedProducts = (typeOfProducts) => {
    const [products, setProducts] = useState([]);
    const [pending, setPending] = useState(true);
    
    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `type="${typeOfProducts}"`
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
        .then(products => {
            setProducts(products);
            setPending(false);
        });
    }, [typeOfProducts]);


    return {
        products,
        pending
    }
}