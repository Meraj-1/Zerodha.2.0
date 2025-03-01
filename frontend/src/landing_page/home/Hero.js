import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div id='openacount' className='container mx-auto px-4 py-8'>
      <div className='flex flex-col items-center text-center'>
        <img
          src='https://zerodha.com/static/images/landing.png'
          alt='Hero.png'
          className='w-2/1 h-auto mb-4 rounded-lg'
        />
        <h1 className='heading text-2xl md:text-3xl lg:text-5xl mt-6 font-bold'>
          Invest in everything
        </h1>
        <p className="para-about text-sm md:text-base  lg:text-lg mt-4 font-serif ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <Link to="/signup" className="Btn-SignUp mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 font-bold">
          SignUp Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;

