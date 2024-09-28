import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`class="font-[poppins] bg-gradient-to-t from-[#7cbbe8] to-[#e2e5ea] h-screen" fixed top-0 w-full shadow-md ${isOpen ? 'h-auto' : 'h-16'} transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link className="flex items-center" to="/">
          <img src='https://zerodha.com/static/images/logo.svg' alt="Logo" className="h-5 mt-3" />
        </Link>
        <button
          className="md:hidden flex items-center p-2 text-gray-700"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
        <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <ul className="flex flex-col gap-[4vw] md:flex-row md:space-x-4">
            <li>
              <Link className="nav-link text-gray-700 hover:text-blue-500" to="/signup">SignUp</Link>
            </li>
            <li>
              <Link className="nav-link text-gray-700 hover:text-blue-500" to="/Pricing">Pricing</Link>
            </li>
            <li>
              <Link className="nav-link text-gray-700 hover:text-blue-500" to="/About">About</Link>
            </li>
            <li>
              <Link className="nav-link text-gray-700 hover:text-blue-500" to="/Product">Product</Link>
            </li>
            <li>
              <Link className="nav-link text-gray-700 hover:text-blue-500" to="/Support">Support</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`bg-gradient-to-t from-[#fbc2ed] to-[#a6c1ee] fixed top-0 w-full shadow-lg transition-all duration-300 ${isOpen ? 'h-auto' : 'h-16'}`}>
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         <Link className="flex items-center" to="/">
//           <img src='https://zerodha.com/static/images/logo.svg' alt="Logo" className="h-8" />
//         </Link>
//         <button
//           className="md:hidden flex items-center p-2 text-gray-700 focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle Navigation Menu"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             )}
//           </svg>
//         </button>
//         <div className={`flex-col md:flex md:flex-row md:items-center md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
//           <ul className="flex flex-col md:flex-row md:space-x-4">
//             {['SignUp', 'Pricing', 'About', 'Product', 'Support'].map((item) => (
//               <li key={item}>
//                 <Link className="nav-link text-gray-700 hover:text-blue-600 transition duration-200" to={`/${item.replace(/\s+/g, '')}`}>
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
