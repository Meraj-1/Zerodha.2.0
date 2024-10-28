import React from 'react';

function Brokerage() {
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='text-center mb-8'>
                <h2 className='text-2xl font-bold'>Open a Zerodha account</h2>
                <p className='mt-2 text-gray-700'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            </div>
            <div className='flex flex-wrap justify-center'>
                <div className='w-full md:w-1/2 mt-5'>
                    <div className='text-center'>
                        <a className='text-blue-500 hover:underline' href='#'>Brokerage calculator</a>
                    </div>
                    <ul className='text-gray-600 mt-5'>
                        <li className='mb-2'>
                            <p className='text-sm'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</p>
                        </li>
                        <li className='mb-2'>
                            <p className='text-sm'>Digital contract notes will be sent via e-mail.</p>
                        </li>
                        <li className='mb-2'>
                            <p className='text-sm'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p>
                        </li>
                        <li className='mb-2'>
                            <p className='text-sm'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</p>
                        </li>
                        <li className='mb-2'>
                            <p className='text-sm'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</p>
                        </li>
                        <li className='mb-2'>
                            <p className='text-sm'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                        </li>
                    </ul>
                </div>
                <div className='w-full md:w-1/2 mt-5 text-center'>
                    <a className='text-blue-500 hover:underline' href='#'>List of charges</a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;