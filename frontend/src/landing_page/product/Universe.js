import React from 'react';
import Hero from './Hero';
import RightImage from './RightImage';

function Universe() {
    return (
        <>
            <Hero />
             <RightImage
                imageURL="https://zerodha.com/static/images/products-kite.png"
                productName="Kite"
                 productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                learnmore=" Learnmore → "
            />
            <RightImage
                imageURL="https://zerodha.com/static/images/products-console.png"
                productName="Console"
                productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnmore=" Learnmore → "
            />
             <RightImage
                imageURL="https://zerodha.com/static/images/products-coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                learnmore=" Learnmore → "
            />
            <RightImage
                imageURL="https://zerodha.com/static/images/products-kiteconnect.png"
                productName="Kite Connect API"
                productDescription="The  Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs.If you are a startup, build your investment app and showcase it to our clientbase."
                learnmore=" Learnmore → "
            />
             <RightImage
                  imageURL="https://zerodha.com/static/images/varsity-products.png"
                  productName="Varsity mobile"
                  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                learnmore=" Learnmore → "
            />
            <h6 className='text-muted text-center mb-4'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h6>
        </>
    );
}

export default Universe;