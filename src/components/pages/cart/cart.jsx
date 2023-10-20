import React, { useContext } from 'react';
import { Products } from '../../../products';
import { ShopContext } from '../../../context/shopcontext';
import { CartItem } from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom'



export const Cart = () => {
    const { cartitems, getTotalcartAmount } = useContext(ShopContext);
    const totalAmount = getTotalcartAmount()

    const navigate = useNavigate()


    return (
    <div className='cart'>
        <div>
         <h1 className='cartitem'>Your Carted Items</h1>
        </div>
        <div className='cartitems'>
        {Products.map((product) => {
            if (cartitems[product.id] !== 0){
                return <CartItem data={product} />;
            }

        })}


        </div>
         
        <div className='checkout'>

            <p className='subt'>SuBtotal: ${totalAmount}</p>
            <button className='cshop' onClick={() => navigate("/")}>Continue Shopping</button>
         
        </div>

    </div>

    );
};