import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RouteNav.css'

const RouteNav = () => {


  const [showTechDropdown, setShowTechDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const toggleDropdown = (setDropdown, dropdownState) => {
    setDropdown(!dropdownState);
  };


  return (

    <div className="route-navbar-container">
      <nav className="route-navbar">
        <ul className={`route-nav-links ${isMobile ? "active" : ""}`}>
          <li className="route-link"><Link to='/'>Home</Link></li>
          <li
            onMouseEnter={() => setShowTechDropdown(true)}
            onMouseLeave={() => setShowTechDropdown(false)}
          >
            Tech Services{" "}
            <span onClick={() => toggleDropdown(setShowTechDropdown, showTechDropdown)}>
              {showTechDropdown ? "-" : "+"}
            </span>
            {showTechDropdown && (
              <ul className="route-dropdown" >
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
              <ul className="route-dropdown">
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/ourteam">Our Team</Link></li>
                <li><Link to='/howwework'>How We Work</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/work-culture">Work Culture</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contactsin">Contact</Link></li>
        </ul>
          
            <div className="route-nav-icons">
              <span><i class="fa-solid fa-magnifying-glass fa-xs" /></span>
              <span>|</span>
              <span><i class="fa-brands fa-facebook-f fa-xs" style={{color: "#ffffff",}} /></span>
              <span><i class="fa-brands fa-twitter fa-xs"  style={{color: "#ffffff",}} /></span>
              <span><i class="fa-brands fa-pinterest-p fa-xs" style={{color: "#ffffff",}} /></span>
              <span><i class="fa-brands fa-instagram fa-xs"  style={{color: "#ffffff",}}/></span>
            </div>

        <button
          className="route-mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? "✖️" : "☰"}
        </button>


      </nav>
    </div>

  )
}

export default RouteNav;






// <div className="route-logo">
//   <img src={require("../assets/logo.png")} alt="logo" />
// </div>