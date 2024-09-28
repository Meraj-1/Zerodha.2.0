import React from 'react';

function Hero() {
    return (
        <div className='container mx-auto mt-20 border-b pb-5'>
            <div className='text-center mt-5'>
                <h3 className='text-2xl font-semibold'>Technology</h3>
                <h5 className='text-lg font-medium mt-2'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='text-gray-700 mb-2'>
                    Check out our <a href='#' className='text-blue-500 hover:underline'>investment offerings →</a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
