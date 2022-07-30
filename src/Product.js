import { Button } from "@mui/material";
import React from "react";
import './Product.css'

function Product( {image, logo, price, name} ) {
    return (
        <div className="Product">
            <img src={image} alt="이미지깨짐"></img>
            <strong className="name">{name}</strong>
            <div className="info">
            <img src={logo} alt="rp" className="rp"></img>
            <strong>{price}</strong>
            </div>
            <Button variant="contained">장바구니 담기</Button>
        </div>
    )
}

export default Product;