import React from "react";

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;

    return (
    <div className="cartItem">
       <img src={productImage} />  
       <div className="description">
        <p>
            {''}
            <b> {productName} </b>
        </p>
            <p>${price}</p>
            <div class= 'counthandler'> 
                <button> - </button>
                    <input></input>
                <button> + </button>
            </div>
       </div>
    </div>
    );
}