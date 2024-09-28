// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import Home from './landing_page/home/HomePage'
// import Navbar from './landing_page/Navbar';
// // import Footer from '../src/landing_page/footer';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <Navbar/>
//   <h1 className='bg-yellow-400 flex ite'> Hello </h1>
//     {/* <Home/>

//     <Footer/>   */}
//   </>
// );

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import  Home  from './landing_page/home'; // Adjust the import as needed

// function App() {
//   return (
//       <Router>
//           <nav>
//               <Link to="/">Home</Link>
//               <Link to="/about">About</Link>
//           </nav>
//           <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//           </Routes>
//       </Router>
//   );
// }

// export default App;


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/SignUp/SingnUp";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/product/Universe";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
     <Routes> 
       <Route path="/" element={<HomePage />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/product" element={<ProductPage />} />
       <Route path="/pricing" element={<PricingPage />} />
       <Route path="/support" element={<SupportPage />} />
       <Route path="*" element={<NotFound />} />
    </Routes> 
    <Footer />
  </BrowserRouter>
);
