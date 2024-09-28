import React from 'react';

function RightImage({ imageURL, productName, productDescription, learnmore }) {
    return (
        <div className='container mx-auto mt-10'>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full md:w-1/3 p-4'>
                    <h3 className='text-xl font-semibold'>{productName}</h3>
                    <p className='text-gray-700 mt-2'>{productDescription}</p>
                    <a href={learnmore} className='text-blue-500 hover:underline mt-2 inline-block'>Learn more →</a>
                </div>
                <div className='w-full md:w-2/3 p-4 flex justify-center'>
                    <img src={imageURL} alt={productName} className='w-full h-auto max-w-md' />
                </div>
            </div>
        </div>
    );
}

export default RightImage;
