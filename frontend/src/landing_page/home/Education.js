import React from 'react';

function Education() {
  return (
    <div className="flex flex-col md:flex-row"> {/* Main container */}
      <div className="flex-shrink-0 w-full md:w-1/2"> {/* Image container */}
        <img
          className="bg-auto ml-10 mt:x"
          src="https://zerodha.com/static/images/index-education.svg"
          alt="Free and open market education"
        />
      </div>
      <div className="flex-grow px-4 py-8 md:p-8 mt-10"> {/* Content container */}
        <h3 className="text-2xl font-medium mb-4">Free and open market education</h3>
        <p className="text-gray-700 mb-4">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
          <a href="" className="text-blue-800 hover:underline mx-2 md:mx-5">
        Varsity →
        </a>
        </p>
    
        <div className="mt-4"> {/* TradingQ&A section */}
          <p className="text-gray-700 mb-2">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
            <a href="" className="text-blue-800 hover:underline mx-2 md:mx-5">
            TradingQ&A →
          </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;