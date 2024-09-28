// import React from 'react';

// function Pricing() {
//     return (
//         <div className='container mx-auto px-4 py-10'>
//             <div className='flex flex-wrap justify-center'>
//                 <div className='w-full md:w-1/3 text-center mb-6'>
//                     <h2 className='text-2xl font-semibold'>Unbeatable pricing</h2>
//                     <p className='text-gray-700 mt-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
//                 </div>
//                 <div className='w-full md:w-1/4 flex flex-col items-center mb-6'>
//                     <div className='border rounded-lg p-6 w-full text-center'>
//                         <h1 className='text-4xl font-bold mb-4'>₹0</h1>
//                         <p className='text-gray-700'>Free equity delivery and<br />direct mutual fund</p>
//                     </div>
//                 </div>
//                 <div className='w-full md:w-1/4 flex flex-col items-center mb-6'>
//                     <div className='border rounded-lg p-6 w-full text-center'>
//                         <h1 className='text-4xl font-bold mb-4'>₹20</h1>
//                         <p className='text-gray-700'>Intraday and F&O</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Pricing;
import React from 'react';

function Pricing() {
    return (
        <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Unbeatable Pricing</h2>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
            </p>
          </div>
          <div className="flex items-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mr-4">₹0</h1>
            <p className="text-gray-700 text-sm md:text-base inline-block">
              Free equity delivery and<br />direct mutual fund
            </p>
          </div>
          <div className="flex items-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mr-4">₹20</h1>
            <p className="text-gray-700 text-sm md:text-base inline-block">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    );
}

export default Pricing;
