import React from 'react';

function NotFound() {
    return (
        <div className='container mx-auto px-5 py-10 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20 lg:gap-32' style={{ marginTop: "15%", marginBottom: "5%" }}>
            <div className='flex flex-col items-center justify-center text-center md:w-1/2'>
                <h1 className='text-4xl font-bold mb-5'>404 NOT FOUND</h1>
                <p className='text-xl mb-4'>Kiaan couldn't find that page</p>
                <p className='text-base mb-6'>
                    We couldn't find the page you were looking for. 
                    <a href='/' className='text-blue-500 hover:underline'> Visit Zerodha's home page</a>
                </p>
            </div>
            <div className='hidden md:block md:w-1/2'>
                <img 
                    id='img-notfound' 
                    className='w-full rounded-lg' 
                    src='https://static.vecteezy.com/system/resources/previews/006/549/647/non_2x/404-landing-page-free-vector.jpg' 
                    alt='404 Not Found'
                />
            </div>
        </div>
    );
}

export default NotFound;
