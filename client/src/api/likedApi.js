import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth"
import request from "../utils/request";

const baseUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/favProducts`;
const productsUrl = `${import.meta.env.VITE_APP_SERVER_URL}/data/products`;

export const useSave = () => {
    const { request, _id } = useAuth();

    const savePost = async (productId) => {
        await request.post(baseUrl, {productId, _id});
    }

    return {
        savePost,
    }
}

export const useLiked = () => {
    const [favourites, setFavourites] = useState([]);
    const [favouriteProducts, setfavouriteProducts] = useState([]);
    const { _id } = useAuth();

    useEffect(() => {
        const fetchProducts = async () => {
              const products = await request.get(baseUrl);
              setfavouriteProducts(products);
          };
      
          fetchProducts();
    }, []);

    useEffect(() => {
        const fetchUserFavouriteProducts = async () => {
          const favouriteUserProductsIds = favouriteProducts.filter(
            product => product._ownerId === _id
          );

          const productPromises = favouriteUserProductsIds.map(product =>
            fetch(`${productsUrl}/${product.productId}`).then(response => response.json())
          );

            const userFavouriteProducts = await Promise.all(productPromises);
            setFavourites(userFavouriteProducts);
        };
    
        if (favouriteProducts.length > 0) {
          fetchUserFavouriteProducts();
        }
      }, [favouriteProducts, _id]);

    return { favourites };
}
