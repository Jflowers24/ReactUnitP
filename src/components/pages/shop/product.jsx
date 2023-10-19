import React, { useContext } from "react";
import { ShopContext }  from '../../../context/shopcontext';
import { Products } from "../../../products";
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addItem, cartitems } = useContext(ShopContext)

    const cartitemamount = cartitems[id]
    return( 
    <div className="product">
        <img src={productImage} />
        <div className="description">
            <p>
                <b>
                    {productName}
                    </b>
                </p>
                <p>
                    ${price}
                </p>
                <button className="addtocart" onClick={() => addItem(id)}>
                    Add To Cart{cartitemamount > 0 && <>({cartitemamount})</>}
                </button>
        </div>
    </div>
    )
}