import React from "react";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"
import {useStateValue} from "./StateProvider"

function Checkout () {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">     
            <a href="https://www.youtube.com/watch?v=CfBParpPI9M" className="ad">
            <img src="img/ad1.png" alt="닐라"/>
            </a>

            <div>
                <b className="checkout_title">장바구니 입니다</b>

                {basket.map(item=>(
                    <CheckoutProduct image={item.image} price={item.price} name={item.name}/>
                ))}

            </div>

            <div className="checkout_total">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;