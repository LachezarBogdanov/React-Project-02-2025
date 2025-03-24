import { createContext } from "react";


export const FavouriteContext = createContext({
    description: "",
    flavour: "",
    img: "",
    name: "",
    price: "",
    quantity: Number,
    size: "",
    type: "",
    _createdOn: Number,
    _id: "",
    _ownerId: "",
    favouriteItems: {},
    addToFavourite() {},
    removeFavourite() {},
});