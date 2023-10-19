import React, { useContext } from 'react';
import { Products } from '../../../products';
import { ShopContext } from '../../../context/shopcontext';
import { CartItem } from './cart-item';
import './cart.css';
export const Cart = () => {
    const { cartitems } = useContext(ShopContext);

    return (
    <div className='cart'>
        <div>
         <h1>Your Carted Items</h1>
        </div>
        <div className='cartitems'>
        {Products.map((product) => {
            if (cartitems[product.id] !== 0){
                return <CartItem data={product} />;
            }

        })}


        </div>
    </div>

    );
};