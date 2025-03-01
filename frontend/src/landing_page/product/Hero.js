import React from 'react';

function Hero() {
    return (
        <div className='container mx-auto mt-20 md:mt-10  pb-5'>
            <div className='text-center mt-5'>
                <h3 className='text-2xl md:text-4xl text-blue-600 font-bold mb-4'>Technology</h3>
                <h5 className='text-lg font-medium md:font-bold md:text-xl text-gray-600 '>Sleek, modern, and intuitive trading platforms</h5>
                <p className='text-gray-600 text-lg font-bold  mb-2'>
                    Check out our <a href='#' className='text-blue-500 hover:underline'>investment offerings →</a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
