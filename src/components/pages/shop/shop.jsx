import React from 'react';
import { Products } from '../../../products';
import { Product } from './product';
import './shop.css';

export const Shop = () => {
    return( 
    <div>shop
        <div>
            <center><h1>Jermazon</h1></center>
        </div>
        <div className='products'> {Products.map((product)=> (
        <Product data={product}/>
        ))}

        </div>
    </div>

    );
};