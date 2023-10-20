import React, {useContext} from "react";
import { ShopContext } from '../../../context/shopcontext';


export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { cartitems, addItem, removeItem, updateitemNum} = useContext(ShopContext);


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
                <button onClick={()=> removeItem(id)}> - </button>
                    <input value={cartitems[id]} onChange={(e) => updateitemNum(Number(e.target.value), id)}/>
                <button onClick={()=> addItem(id)}> + </button>
            </div>
       </div>
    </div>
    );
}