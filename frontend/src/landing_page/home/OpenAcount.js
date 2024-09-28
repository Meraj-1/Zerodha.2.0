// import React from 'react';
// import { Link } from 'react-router-dom';

// function OpenAccount() {
//     return (
//         <div id='open-account' className='container mx-auto mb-8 mt-20 px-4'>
//             <div className='text-center mb-10'>
//                 <h2 className='mt-2 mb-2 text-2xl font-bold'>Open a Zerodha account</h2>
//                 <p className="text-lg text-gray-700 mb-4">Modern platforms and apps, ₹0 investments, & flat ₹20 intraday and F&O trades.</p>
//                 <Link to="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" id='SIGN-UP'>SignUp Now</Link>
//             </div>
//         </div>
//     );
// }

// export default OpenAccount;
import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return (
        <div id='open-account' className='container mx-auto mb-8 mt-20 px-4'>
            <div className='text-center mb-10'>
                <h2 className='mt-2 mb-2 text-2xl md:text-3xl font-bold'>Open a Zerodha Account</h2>
                <p className="text-lg md:text-xl text-gray-700 mb-4">
                    Modern platforms and apps, ₹0 investments, & flat ₹20 intraday and F&O trades.
                </p>
                <Link to="/signup" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" id='SIGN-UP'>
                    Sign Up Now
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;
