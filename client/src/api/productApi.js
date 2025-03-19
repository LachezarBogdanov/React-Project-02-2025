import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import request from "../utils/request";


const baseUrl = 'http://localhost:3030/data/products';

export const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setProducts)
    }, []);

    return { products };
}

export const useProduct = (productId) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${productId}`)
            .then(setProduct)
    }, [productId])

    return { product };
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