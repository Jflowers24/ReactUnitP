import React, { createContext, useState } from "react";
import { Products } from "../products";

export const ShopContext = createContext(null);

const getDefaultcart = () => {
    let cart = {}
    for (let i =1; i < Products.length; i++){
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider  = (props) => {
    const [cartitems, setCartItems] = useState(getDefaultcart());

    const addItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    const removeItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const contextValue = {cartitems, addItem, removeItem};
    return(
     <ShopContext.Provider value={contextValue}>
        {props.children}
     </ShopContext.Provider>
    );
};