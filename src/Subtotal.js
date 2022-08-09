import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css"
import {getBasketTotal} from "./Reducer";

function Subtotal () {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="Subtotal">
            <b>총합계</b>
            <CurrencyFormat
            renderText={(value)=> (
                <>
                    <p>총액( {basket?.length} skin): <strong> {value} rp </strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>전체선택
                    </small>
                </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            />

            <button>결제하기</button>
        </div>
    )
}

export default Subtotal;