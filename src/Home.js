import { Container } from "@mui/system";
import React from "react";
import "./Home.css";
import Product from './Product';

function Home() {
    return (
    <div className="home">
        <img src="img/home6.jpg" className="background"></img>
        <strong className="category">신규 상품</strong>
         <img src="img/ad.png" className="ad"></img>
         <div className="skin">
                <Product image="img/skin1.png" logo="img/rp.png" price="1350" name="별의 숙적 모르가나"/>
                <Product image="img/skin2.png" logo="img/rp.png" price="1350" name="별 수호자 소나"/>
                <Product image="img/skin4.png" logo="img/rp.png" price="1350" name="별 수호자 카이사"/>
                <Product image='img/skin5.png' logo="img/rp.png" price="1350" name="별 수호자 닐라"/>
         </div>
    </div>
    )
}


export default Home;