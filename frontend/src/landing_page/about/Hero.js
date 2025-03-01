import React from 'react';

function Hero() {
  return (
    <div className='container mx-auto md:mt-20 mt-10 px-4'>
      <div className='text-gray-500 border-b mb-8'>
        <div className='text-center mb-4 border-b-4 border-blue-800 pb-4'>
          <h4 id='head-about' className='text-xl md:text-2xl text-gray-700 font-bold'>We pioneered the discount broking model in India.</h4>
          <h4 id='head-about' className='text-xl md:text-2xl text-gray-700 font-bold'>Now, we are breaking ground with our technology.</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
  <div className="space-y-4 font-semibold  text-gray-700">
    <p>
      We kick-started operations on the 15th of August, 2010 with the goal of breaking all 
      barriers that traders and investors face in India in terms of cost, support, and 
      technology. We named the company Zerodha, a combination of Zero and "Rodha", the 
      Sanskrit word for barrier.
    </p>
    <p>
      Today, our disruptive pricing models and in-house technology have made us the biggest 
      stock broker in India.
    </p>
    <p>
      Over 1+ Crore clients place millions of orders every day through our powerful ecosystem 
      of investment platforms, contributing over 15% of all Indian retail trading volumes.
    </p>
  </div>

  <div className="space-y-4 font-semibold text-gray-700">
    <p>
      In addition, we run a number of popular open online educational and community 
      initiatives to empower retail traders and investors.
    </p>
    <p>
      Rainmatter, our fintech fund and incubator, has invested in several fintech startups 
      with the goal of growing the Indian capital markets.
    </p>
    <p>
      And yet, we are always up to something new every day. Catch up on the latest updates 
      on our blog or see what the media is saying about us.
    </p>
  </div>
</div>


      </div>
    </div>
  );
}

export default Hero;
