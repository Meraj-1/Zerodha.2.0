import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='bg-white p-4 border-b-2'>
      <div className='w-[92%] flex items-center justify-between'>
        <Link to="/">
          <img
            className="h-5 w-auto cursor-pointer ml-5"
            src="https://zerodha.com/static/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <div className='md:hidden'>
          <button className='text-black' onClick={togglemenu}>
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewBox='0 0 24 24'
              className='h-6 w-auto'
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>

            </svg>
          </button>
        </div>
        <ul className='hidden md:flex  space-x-10'>
          <li><Link className="hover:text-blue-500" to="/signup">Sign Up</Link></li>
          <li><Link className="hover:text-blue-500" to="/Pricing">Pricing</Link></li>
          <li><Link className="hover:text-blue-500" to="/About">About</Link></li>
          <li><Link className="hover:text-blue-500" to="/Product">Product</Link></li>
          <li><Link className="hover:text-blue-500" to="/Support">Support</Link></li>
          <li><a href='http://localhost:3001/'><img src='https://kite.zerodha.com/static/images/kite-logo.svg' className='h-8 w-auto' /></a></li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className='flex-col md:hidden transition-all duration-300 ease-in-out'>
          <li className="border-b-2 mt-3 py-4"><Link className="hover:text-blue-900" to="/signup">Sign Up</Link></li>
          <li className="border-b-2 py-4"><Link className="hover:text-blue-900" to="/Pricing">Pricing</Link></li>
          <li className="border-b-2 py-4"><Link className="hover:text-blue-900" to="/About">About</Link></li>
          <li className="border-b-2 py-4"><Link className="hover:text-blue-900" to="/Product">Product</Link></li>
          <li className="border-b-2 py-4"><Link className="hover:text-blue-900" to="/Support">Support</Link></li>
          {/* <li> <a href='http://localhost:3001/'><img src='https://kite.zerodha.com/static/images/kite-logo.svg' className='h-8 w-auto py-4'/> </a></li> */}
          <li>
            <a href='http://localhost:3001/'>
              <div className=' border-b-2 py-4'>
                <img src='https://kite.zerodha.com/static/images/kite-logo.svg' className='h-8 w-auto' />
              </div>
            </a>
          </li>

        </ul>

      ) : null}
    </nav>
  )
}

export default Navbar;