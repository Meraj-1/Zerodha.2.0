// import React from 'react';

// function Stats() {
//   return (
//     <div className='container mx-auto px-4 py-10'>
//       <div className='flex flex-wrap justify-center'>
//         <div className='w-full md:w-1/2 mb-8'>
//           <h1 className='text-3xl font-bold mb-5'>Trust with confidence</h1>
//           <h4 className='text-xl font-semibold'>Customer-first always</h4>
//           <p className='text-gray-700 mb-4'>
//             That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
//           </p>
//           <h4 className='text-xl font-semibold'>No spam or gimmicks</h4>
//           <p className='text-gray-700 mb-4'>
//             No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
//           </p>
//           <h4 className='text-xl font-semibold'>The Zerodha universe</h4>
//           <p className='text-gray-700 mb-4'>
//             Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
//             Do better with money.
//           </p>
//           <h4 className='text-xl font-semibold'>Do better with money</h4>
//           <p className='text-gray-700 mb-4'>
//             With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
//           </p>
//         </div>
//         <div className='w-full md:w-1/2 flex flex-col items-center mb-8'>
//           <img
//             id='img-home-main'
//             src='https://zerodha.com/static/images/ecosystem.png'
//             alt='Hekii'
//             className='w-full h-auto mb-4'
//           />
//           <div className='mt-3 text-center'>
//             <a href='' id='link-stats' className='text-blue-500 hover:underline mx-5'>Explore Our Product →</a>
//             <a href='' id='link-stats' className='text-blue-500 hover:underline'>Try Kite Demo →</a>
//           </div>
//           <div className='mt-5'>
//             <img
//               id='img-home-tag'
//               src='https://zerodha.com/static/images/press-logos.png'
//               alt='Companies'
//               className='w-full h-auto'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;
import React from 'react';

function Stats() {
  return (
    <div className='container mx-auto px-15 py-9'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold m-5'>Trust with confidence</h1>
          <h4 className='text-xl font-semibold m-4'>Customer-first always</h4>
          <p className='text-gray-700 sm:mb-4 m-4'>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className='text-xl font-semibold m-4'>No spam or gimmicks</h4>
          <p className='text-gray-700 m-4'>
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
          </p>
          <h4 className='text-xl font-semibold m-4'>The Zerodha universe</h4>
          <p className='text-gray-700 m-4'>
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. 
            Do better with money.
          </p>
          <h4 className='text-xl font-semibold m-4'>Do better with money</h4>
          <p className='text-gray-700  m-4'>
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
          </p>
        </div>
        <div className='md:w-1/2 flex flex-col items-center mb-8'>
          <img
            id='img-home-main'
            src='https://zerodha.com/static/images/ecosystem.png'
            alt='Ecosystem'
            className='h-auto mb-4 rounded-lg shadow-md'
          />
          <div className='mt-3 text-center'>
            <a href='' className='text-blue-500 hover:underline mx-2 md:mx-5'>Explore Our Product →</a>
            <a href='' className='text-blue-500 hover:underline mx-2 md:mx-5'>Try Kite Demo →</a>
          </div>
          <div className='m-5'>
            <img
              id='img-home-tag'
              src='https://zerodha.com/static/images/press-logos.png'
              alt='Companies'
              className='w-full h-auto rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
