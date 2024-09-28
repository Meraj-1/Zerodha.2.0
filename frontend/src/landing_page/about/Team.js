import React from 'react';

function Team() {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/3 mt-5 flex flex-col items-center'>
          <img
            className='w-80 rounded-full'
            id='img-own'
            src='https://zerodha.com/static/images/nithin-kamath.jpg'
            alt='Nithin Kamath'
          />
          <div className='mt-4 text-center'>
            <h4 className='text-xl font-semibold'>Nithin Kamath</h4>
            <h6 className='text-lg text-gray-600'>Founder, CEO</h6>
          </div>
        </div>
        <div className='w-full md:w-2/3 mt-5'>
          <div className='mt-5'>
            <p className='text-gray-700 mb-4'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p className='text-gray-700 mb-4'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p className='text-gray-700 mb-4'>Playing basketball is his zen.</p>
            <p className='text-gray-700'>
              Connect on <a className='text-blue-500 ' href='https://nithinkamath.me/'>Homepage</a>, <a className='text-blue-500 ' href='https://tradingqna.com/u/nithin/summary'>TradingQnA</a>, or <a className='text-blue-500' href='https://x.com/Nithin0dha'>Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
