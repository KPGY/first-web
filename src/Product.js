import { Button } from "@mui/material";
import React from "react";
import './Product.css'
import {useStateValue} from "./StateProvider";

function Product( {image, logo, price, name} ) {

const [{ basket }, dispatch] = useStateValue();

const addToBasket = () => {

    
    dispatch({
        type:"ADD_TO_BASKET",
        item: {
            image:image,
            logo:logo,
            price:price,
            name:name,
        }
    });
};


    return (
        <div className="Product">
            <img src={image} alt="이미지깨짐"></img>
            <strong className="name">{name}</strong>
            <div className="info">
            <img src={logo} alt="rp" className="rp"></img>
            <strong>{price}</strong>
            </div>
            <Button variant="contained" onClick={addToBasket}>장바구니 담기</Button>
        </div>
    )
}

export default Product;