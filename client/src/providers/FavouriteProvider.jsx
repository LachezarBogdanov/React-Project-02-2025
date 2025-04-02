import { useEffect, useState } from "react";
import { FavouriteContext } from "../contexts/FavouriteContext";
import useAuth from "../hooks/useAuth";


export default function FavouriteProvider({
    children,
}) {
    const { _id } = useAuth();

    const [favouriteItems, setFavouriteItems] = useState([]);

    useEffect(() => {
        if(_id) {
            const savedFavourites = sessionStorage.getItem(`favourites_${_id}`)
            
            setFavouriteItems(savedFavourites ? JSON.parse(savedFavourites) : []);
        } else {    
            setFavouriteItems([]);
        }
    }, [_id]);

    const addToFavourite = (product) => {
        setFavouriteItems((prevFavouriteItems) => {
            const updatedFavourites = [...prevFavouriteItems, product];
            sessionStorage.setItem(`favourites_${_id}`, JSON.stringify(updatedFavourites));
            return updatedFavourites;
        })
    };

    const removeFavourite = (index) => {
        setFavouriteItems((prevFavourites) => {
            const updatedFavourites = prevFavourites.filter((_, i) => i !== index);
            sessionStorage.setItem(`favourites_${_id}`, JSON.stringify(updatedFavourites));
            return updatedFavourites;
        })
    }

    return (
        <FavouriteContext.Provider value={{ favouriteItems, addToFavourite, removeFavourite }}>
            {children}
        </FavouriteContext.Provider>
    )

}