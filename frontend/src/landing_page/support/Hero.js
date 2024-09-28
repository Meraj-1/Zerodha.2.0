import React from 'react';

function Hero() {
  return (
    <div className='bg-gray-500 p-8 mt-5'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-5 md:mb-0'>
            <h4 className='text-white text-2xl mt-5'>Support Portal</h4>
            <h5 className='text-white text-lg mt-4'>
              Search for an answer or browse help topics to
              <br /> create a ticket
            </h5>
          </div>
          <div className='mt-5'>
            <a
              id="supp-her"
              className='text-white text-lg'
              href='#'
            >
              Track tickets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;