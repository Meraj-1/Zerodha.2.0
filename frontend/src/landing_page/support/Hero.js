import React from 'react';

function Hero() {
  return (
    <div className="bg-blue-700 p-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Left Section */}
        <div>
          <h4 className="text-white text-3xl md:text-4xl font-bold">Support Portal</h4>
          <h5 className="text-white text-lg md:text-xl font-medium mt-3">
            Search for an answer or browse help topics to <br className="hidden md:block" />
            create a ticket.
          </h5>
        </div>

        {/* Right Section */}
        <div className="mt-4 md:mt-0">
          <a 
            id="supp-her"
            className="text-white text-lg md:text-xl font-bold hover:underline"
            href="#"
          >
            Track tickets →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
