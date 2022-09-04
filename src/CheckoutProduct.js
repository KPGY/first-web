import React from 'react';
import './CheckoutProduct.css'
import { Button } from '@mui/material';

function CheckoutProduct( {image, logo, price, name} ) {

    return (
        <div className='skin'>
            <img className='skin_image' src={image} alt="스킨"/>

            <div className='skin_info'>
                <b className='skin_name'>
                    {name}
                </b>
                <b className='skin_price'>
                    <small><img src='img/rp.png' className='rp'/></small>
                    <strong>{price}</strong>
                </b>
            </div>
        </div>
    )
}

export default CheckoutProduct;