import React from 'react';

function CreateTicket() {
    return (
        <div className='container mx-auto p-5'>
            <div className='mt-4'>
                <h4 className='text-lg md:font-bold md:text-xl text-gray-700 font-semibold'>To create a ticket, select a relevant topic</h4>
            </div>
            <div className='grid grid-cols-1 mb-10 md:grid-cols-3 gap-6 mt-5'>
                <div>
                    <h5 className='mb-3 text-lg font-bold text-blue-800 underline mt-3'>Account Opening</h5>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Trading FAQs</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Kite</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Margin</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Product and Order Type</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Corporate Action</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Kite Feature</a><br />
                </div>

                <div>
                    <h5 className='mb-3 text-lg font-bold text-blue-800 underline mt-3'>Your Zerodha Account</h5>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Login Credentials</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Your Profile</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Account Modification</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>CMR & DP ID</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Nomination</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Transfer and Conversion</a><br />
                </div>

                <div>
                    <h5 className='mb-3 text-lg font-bold text-blue-800 underline mt-3'>Trading and Markets</h5>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Getting Started</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Online</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Offline</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Charges</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Company, Partnership and HUF</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Non Resident Indian (NRI)</a><br />
                </div>
            </div>
            <div className='grid grid-cols-1 mb-10 md:grid-cols-3 gap-6 mt-5'>
                <div>
                    <h4 className='mb-3 text-lg font-bold text-blue-800 underline mt-3'>Fund</h4>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Fund Withdrawal</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Adding Funds</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Adding Bank Accounts</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>eMandate</a><br />
                </div>

                <div>
                    <h4 className='mt-5 mb-3'>Console</h4>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>IPO</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Portfolio</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Funds Statement</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Profile</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Reports</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Referral Program</a><br />
                </div>

                <div>
                    <h4 className='mb-3 text-lg font-bold text-blue-800 underline mt-3'>Coin</h4>
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Understanding Mutual Funds and Coin</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Coin App</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Coin Web</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>Transactions and Reports</a><br />
                    <a href='#' className='text-blue-600 font-bold hover:underline'>National Pension Scheme (NPS)</a><br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
