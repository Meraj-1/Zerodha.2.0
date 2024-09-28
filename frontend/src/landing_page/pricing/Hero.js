import React from 'react';

function Hero() {
    return (
        <div className='container mx-auto text-center mt-20'>
            <div className='mt-4'>
                <h3 className='text-2xl font-semibold'>Pricing</h3>
            </div>
            <p className='mt-2 text-gray-700'>Free equity investments and flat ₹20 intraday and F&O trades</p>
            <section className='border-b mb-8'>
                <div className='flex flex-wrap justify-center p-4'>
                    <div className='w-full md:w-1/3 mt-5'>
                        <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='Free equity delivery' className='w-36 mx-auto' />
                        <h4 className='text-lg font-semibold mt-2'>Free equity delivery</h4>
                        <p className='text-gray-600 mt-1'>All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='w-full md:w-1/3 mt-5'>
                        <img src='https://zerodha.com/static/images/other-trades.svg' alt='Free direct MF' className='w-36 mx-auto' />
                        <h4 className='text-lg font-semibold mt-2'>Free direct MF</h4>
                        <p className='text-gray-600 mt-1'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='w-full md:w-1/3 mt-5'>
                        <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='Free direct MF' className='w-36 mx-auto' />
                        <h4 className='text-lg font-semibold mt-2'>Free direct MF</h4>
                        <p className='text-gray-600 mt-1'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;

