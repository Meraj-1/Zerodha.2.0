import React from 'react';

function Team() {
  return (
    <div className="container mx-auto p-5">
    <div className="flex flex-wrap items-center justify-center gap-8">
      {/* Image Section */}
      <div className="w-full md:w-1/3 flex flex-col items-center text-center">
        <img
          className="w-64 md:w-80 rounded-full"
          src="https://zerodha.com/static/images/nithin-kamath.jpg"
          alt="Nithin Kamath"
        />
        <div className="mt-4">
          <h4 className="text-3xl font-serif text-gray-700 font-bold">Nithin Kamath</h4>
          <h6 className="text-2xl font-serif text-gray-700 font-bold">Founder, CEO</h6>
        </div>
      </div>
  
      {/* Text Section */}
      <div className="w-full md:w-2/3">
        <div className="space-y-4 font-semibold text-gray-700">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced 
            during his decade-long stint as a trader. Today, Zerodha has changed the landscape 
            of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the 
            Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on 
            <a className="text-blue-500 ml-1" href="https://nithinkamath.me/">Homepage</a>, 
            <a className="text-blue-500 mx-1" href="https://tradingqna.com/u/nithin/summary">TradingQnA</a>, 
            or <a className="text-blue-500" href="https://x.com/Nithin0dha">Twitter</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Team;
