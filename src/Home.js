import React from "react";
import "./Home.css";
import Product from './Product';

function Home() {
    return (
    <div className="home">
        <strong className="category1">꿀벌 시리즈</strong>
         <a href="https://www.youtube.com/watch?v=ZFOsE4khR-Y" className="ad">
            <img src="img/ad.png"/></a>
         <div className="Bee">
                <Product image="img/temm.png" logo="img/rp.png" price={250} name="부지런한 꿀벌"/>
                <Product image="img/gul.png" logo="img/rp.png" price={350} name="슬펐꿀벌"/>
                <Product image="img/smile.png" logo="img/rp.png" price={350} name="행복했꿀벌"/>
                <Product image='img/Teemo.png' logo="img/rp.png" price={1350} name="꿀잼 티모"/>
         </div>
         <strong className="category2">별수호자 시리즈</strong>
         <div className="starGuardian">
                <Product image="img/skin1.png" logo="img/rp.png" price={1350} name="별의 숙적 모르가나"/>
                <Product image="img/skin2.png" logo="img/rp.png" price={1350} name="별 수호자 소나"/>
                <Product image="img/skin5.png" logo="img/rp.png" price={1350} name="별 수호자 닐라"/>
                <Product image="img/skin4.png" logo="img/rp.png" price={1350} name="별 수호자 카이사"/>
         </div>
    </div>
    )
}


export default Home;