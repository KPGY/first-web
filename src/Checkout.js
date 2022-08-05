import React from "react";
import "./Checkout.css"
import Subtotal from "./Subtotal"

function Checkout () {
    return (
        <div className="checkout">     
            <a href="https://www.youtube.com/watch?v=CfBParpPI9M" className="ad">
            <img src="img/ad1.png" alt="닐라"/>
            </a>
            <b className="checkout_title">장바구니 입니다</b>

            <div className="checkout_total">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout;