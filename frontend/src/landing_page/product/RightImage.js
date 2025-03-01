import React from 'react';

function RightImage({ imageURL, productName, productDescription, learnmore }) {
    return (
        <div className="container mx-auto xl:w-full px-5 sm:px-20 md:px-10 mt-10">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:w-1/3 p-4 text-center md:text-left">
                    <h3 className="md:text-4xl text-3xl text-gray-600 font-bold">{productName}</h3>
                    <p className="text-gray-700 font-bold  mt-3">{productDescription}</p>
                    <a href="#" className="text-blue-800 mt-3 inline-block font-semibold hover:underline">
                        Learn more →
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-2/3 p-4 flex justify-center">
                    <img src={imageURL} alt={productName} className="w-full h-auto max-w-lg" />
                </div>
            </div>
        </div>
    );
}

export default RightImage;

