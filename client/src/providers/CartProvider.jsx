import { useState } from "react";
import { CartContext } from "../contexts/CartContext";


export default function CartProvider({
    children,
}) {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const addToCart = (product, quantity) => {
        setCartItems((prevCart) => {
            const updatedCart = [...prevCart, {...product, quantity}];
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        })
    };

    const updateQuantity = (index, newQuantity) => {
        if(newQuantity < 1) {
            return;
        }

        setCartItems((prevCart) => {
            const updatedCart = prevCart.map((product, i) => {
                if (i === index) {
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        })
    };

    const removeProduct = (index) => {
        setCartItems((prevCart) => {
            const updatedCart = prevCart.filter((_, i) => i !== index);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        })
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, calculateTotal, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}