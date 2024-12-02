

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';




import Card from './Card';
import Content from './Content';
import Customer from './Customer';
import HeroSection from './HeroSection';

import Scrollbar from './Scrollbar';
import Services from './Services';
import Speakcontent from './Speak';
import Image from './Image';

import Accordian from './Drop'




const Navbar = () => {

  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);


  const toggleDropdown = (setDropdown, dropdownState) => {
    setDropdown(!dropdownState);
  };

  return (
    <>
      <div className={`navbar-container ${showSidebar ? "blur" : ""}`}>
        <nav className="navbar">
          <div className="logo">
            <img src={require("../assets/logo.png")} alt="logo" />
          </div>

          <ul className={`nav-links ${isMobile ? "active" : ""}`}>
            <li className="link"><Link to='/'>Home</Link></li>
            <li
              onMouseEnter={() => setShowTechDropdown(true)}
              onMouseLeave={() => setShowTechDropdown(false)}
            >
              Tech Services{" "}
              <span onClick={() => toggleDropdown(setShowTechDropdown, showTechDropdown)}>
                {showTechDropdown ? "-" : "+"}
              </span>
              {showTechDropdown && (
                <ul className="dropdown" >
                  <li><Link to='/enterprise-software'>Enterprise Software</Link></li>
                  <li><Link to='/web-application'>Web Application</Link></li>
                  <li><Link to="/desktop-application">Desktop Application</Link></li>
                  <li><Link to="/mobile-application">Mobile Application</Link></li>
                  <li><Link to="/artificial-intelligence">Artifical Intelligence</Link></li>
                  <li><Link to="/machine-learning">Machine Learning</Link></li>
                  <li><Link to="/quality-assurance">Quality Assurance</Link></li>
                  <li><Link to="/bussiness-process-outsourcing">Business Process Outsourcing</Link></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setShowCompanyDropdown(true)}
              onMouseLeave={() => setShowCompanyDropdown(false)}
            >
              Company{" "}
              <span onClick={() => toggleDropdown(setShowCompanyDropdown, showCompanyDropdown)}>
                {showCompanyDropdown ? "-" : "+"}
              </span>
              {showCompanyDropdown && (
                <ul className="dropdown">
                  <li><Link to="/aboutus">About Us</Link></li>
                  <li><Link to="/ourteam">Our Team</Link></li>
                  <li><Link to="/howwework">How We Work</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/work-culture">Work Culture</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contactsin">Contact</Link></li>
          </ul>


          <div className="icons">
            <span className="search-icon">🔍</span>
            <span className="dots-icon" onClick={() => setShowSidebar(!showSidebar)}>⋮⋮⋮</span>
          </div>


          <button
            className="mobile-menu-icon"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? "✖️" : "☰"}
          </button>
        </nav>


        {showSidebar && (
          <div className="sidebar">
            <button className="close-btn" onClick={() => setShowSidebar(false)}>
              ✖️
            </button>
            <div className="sidebar-content">
              <div className="sidebar-logo">
                <img src={require("../assets/logo.png")} alt="logo" />
              </div>
              <p><strong>Address:</strong> 123 Tech Street, Silicon Valley</p>
              <p><strong>Email:</strong> contact@intechhub.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-8901</p>
            </div>
          </div>
        )}
      </div>
      <HeroSection />
      <Scrollbar />
      <Card />
      <Services />
      <Content />
      <Speakcontent />
      <Customer />
      <Image/>
      {/* <Accordian/> */}
    </>
  );
};

export default Navbar;




// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar-container">
//       <nav className="navbar">
//         <div className="logo">
//           <img src={require("../assets/logo.png")} alt="logo" />
//         </div>

//         <ul className="nav-links">
//           <li className="link">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="dropdown-container">
//             <span>Tech Services</span>
//             <ul className="dropdown">
//               <li>
//                 <Link to="/enterprise-software">Enterprise Software</Link>
//               </li>
//               <li>
//                 <Link to="/web-application">Web Application</Link>
//               </li>
//               <li>
//                 <Link to="/desktop-application">Desktop Application</Link>
//               </li>
//               <li>
//                 <Link to="/mobile-application">Mobile Application</Link>
//               </li>
//               <li>
//                 <Link to="/artificial-intelligence">Artificial Intelligence</Link>
//               </li>
//               <li>
//                 <Link to="/machine-learning">Machine Learning</Link>
//               </li>
//               <li>
//                 <Link to="/quality-assurance">Quality Assurance</Link>
//               </li>
//               <li>
//                 <Link to="/bussiness-process-outsourcing">
//                   Business Process Outsourcing
//                 </Link>
//               </li>
//             </ul>
//           </li>
//           <li className="dropdown-container">
//             <span>Company</span>
//             <ul className="dropdown">
//               <li>
//                 <Link to="/aboutus">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/ourteam">Our Team</Link>
//               </li>
//               <li>
//                 <Link to="/howwework">How We Work</Link>
//               </li>
//             </ul>
//           </li>
//           <li>
//             <Link to="/work-culture">Work Culture</Link>
//           </li>
//           <li>
//             <Link to="/careers">Careers</Link>
//           </li>
//           <li>
//             <Link to="/contactsin">Contact</Link>
//           </li>
//         </ul>

//         <div className="icons">
//           <span className="search-icon">🔍</span>
//           <span className="dots-icon">⋮⋮⋮</span>
//         </div>

//         <button className="mobile-menu-icon">☰</button>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
