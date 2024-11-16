// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {

//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const togglemenu = () => {
   

//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <nav className='bg-white p-4 border-b-2 '>
//       <div className='w-[92%] flex items-center justify-between'>
//         <Link to="/">
//           <img
//             className="h-5 w-auto cursor-pointer ml-5"
//             src="https://zerodha.com/static/images/logo.svg"
//             alt="Logo"
//           />
//         </Link>
//         <div className='md:hidden'>
//           <button className='text-black' onClick={togglemenu}>
//             <svg
//               fill='none'
//               stroke='currentColor'
//               stroke-linecap='round'
//               stroke-linejoin='round'
//               stroke-width='2'
//               viewBox='0 0 24 24'
//               className='h-6 w-auto'
//             >
//               <path d="M4 6h16M4 12h16M4 18h16"></path>

//             </svg>
//           </button>
//         </div>
//         <ul className='hidden md:flex  space-x-10'>
//           <li><Link className="hover:text-blue-500" to="/signup"><li>Sign Up </li></Link></li>
//           <li><Link className="hover:text-blue-500" to="/Pricing"><li> Pricing </li></Link></li>
//           <li><Link className="hover:text-blue-500" to="/About"><li> About </li></Link></li>
//           <li><Link className="hover:text-blue-500" to="/Product"><li> Product </li></Link></li>
//           <li><Link className="hover:text-blue-500" to="/Support"> <li> Support </li></Link></li>
//           <li><a href='https://dashboardclone.vercel.app/'><img src='https://kite.zerodha.com/static/images/kite-logo.svg' className='h-8 w-auto' /></a></li>
//         </ul>
//       </div>
//       {isMenuOpen ? (
//         <ul className='flex-col md:hidden transition-all duration-300 ease-in-out mb-2'>
//           <Link className="hover:text-blue-900" to="/signup"> <li className="border-b-2 py-4">Sign Up</li></Link>
//           <Link className="hover:text-blue-900" to="/Pricing"> <li className="border-b-2 py-4">Pricing</li></Link>
//           <Link className="hover:text-blue-900" to="/About"> <li className="border-b-2 py-4">About</li></Link>
//           <Link className="hover:text-blue-900" to="/Product"> <li className="border-b-2 py-4">Product</li></Link>
//          <Link className="hover:text-blue-900" to="/Support"> <li className="border-b-2 py-4">Support</li></Link>
          
//             <a href='https://dashboardclone.vercel.app/'>
//               <div className=' border-b-2 py-4'>
//                 <img src='https://kite.zerodha.com/static/images/kite-logo.svg' className='h-8 w-auto' />
//               </div>
//             </a>


//         </ul>

//       ) : null}
//     </nav>
//   )
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState(null); // Tracks the clicked link

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setClickedLink(link);

    // Remove the effect after a short duration
    setTimeout(() => {
      setClickedLink(null);
    }, 300); // Adjust duration for the fade effect
  };

  return (
    <nav className="bg-white py-4  border-b-2">
      <div className="w-[92%] flex items-center justify-between">
        <Link to="/">
          <img
            className="h-5 w-auto cursor-pointer ml-5"
            src="https://zerodha.com/static/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <div className="md:hidden">
          <button className="text-black" onClick={togglemenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="h-6 w-auto"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-10">
          <li>
            <Link className="hover:text-blue-500" to="/signup">
              <li>Sign Up</li>
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/Pricing">
              <li>Pricing</li>
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/About">
              <li>About</li>
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/Product">
              <li>Product</li>
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500" to="/Support">
              <li>Support</li>
            </Link>
          </li>
          <li>
            <a href="https://dashboardclone.vercel.app/">
              <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                className="h-8 w-auto"
              />
            </a>
          </li>
        </ul>
      </div>
      {isMenuOpen ? (
        <ul className= "flex flex-col md:hidden transition-all duration-600 ease-in-out mb-2">
          
          <Link 
            className="hover:text-blue-900 border-b-2"
            to="/signup"
            onClick={() => handleLinkClick('signup')}
          >
            <li
              className={`py-4 flex justify-center items-center ${
                clickedLink === 'signup' ? 'bg-blue-400 text-white' : ''
              } transition-all duration-500`}
            >
              Sign Up
            </li>
          </Link>
          <Link
            className="hover:text-blue-900"
            to="/Pricing"
            onClick={() => handleLinkClick('pricing')}
          >
            <li
              className={` flex justify-center items-center border-b-2 py-4 ${
                clickedLink === 'pricing' ? 'bg-blue-400 text-white' : ''
              } transition-all duration-500`}
            >
              Pricing
            </li>
          </Link>
          <Link
            className="hover:text-blue-900"
            to="/About"
            onClick={() => handleLinkClick('about')}
          >
            <li
              className={` flex justify-center items-center border-b-2 py-4 ${
                clickedLink === 'about' ? 'bg-blue-400 text-white' : ''
              } transition-all duration-500`}
            >
              About
            </li>
          </Link>
          <Link
            className="hover:text-blue-900"
            to="/Product"
            onClick={() => handleLinkClick('product')}
          >
            <li
              className={` flex justify-center items-center border-b-2 py-4 ${
                clickedLink === 'product' ? 'bg-blue-400 text-white' : ''
              } transition-all duration-500`}
            >
              Product
            </li>
          </Link>
          <Link
            className="hover:text-blue-900"
            to="/Support"
            onClick={() => handleLinkClick('support')}
          >
            <li
              className={` flex justify-center items-center border-b-2 py-4 ${
                clickedLink === 'support' ? 'bg-blue-400 text-white' : ''
              } transition-all duration-500`}
            >
              Support
            </li>
          </Link>
          <a href="https://dashboardclone.vercel.app/">
            <div className=" flex justify-center items-center border-b-2 py-4">
              <img
                src="https://kite.zerodha.com/static/images/kite-logo.svg"
                className="h-8 w-auto"
              />
            </div>
          </a>
        </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
