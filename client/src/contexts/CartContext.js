import { createContext } from "react";


export const CartContext = createContext({
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
cartItems: {},
addToCart () {},
updateQuantity () {},
calculateTotal () {},
removeProduct() {},
clearCart() {},
});