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

    const getTotalcartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems){
        if(cartitems[item] > 0){
            let itemInfo = Products.find((product) => product.id === Number(item));
            totalAmount += cartitems[item] * itemInfo.price
        }
        }
        return totalAmount;
    };

    const addItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };
    const removeItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateitemNum = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }



    const contextValue = {
        cartitems, 
        addItem, 
        removeItem, 
        updateitemNum,
        getTotalcartAmount,
    };


    return(
     <ShopContext.Provider value={contextValue}>
        {props.children}
     </ShopContext.Provider>
    );
};