import React from 'react';
import './AIML.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import AIMLLeftImg from'../../assets/AIMLLeftImg.svg';
const AIML = () => {
  return (
    <div className='AIML-container'>
      <div className="AIML-header">

        <div className="AIML-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="AIML-contact">
          <ul>
            <div className="AIML-address">
              <div className="icon-AIML">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="AIML-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="AIML-email">
              <div className="icon-AIML">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="AIML-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="AIML-ph">
              <div className="icon-AIML">
                <span className='i-AIML'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
              </div>
              <div className="AIML-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>

          </ul>
        </div>
      </div>




      <div className="database-nav-container">
        <RouteNav />
      </div>





      <div className="AIML-header-1">
        <div class="AIML-hero-section-1" >
          <div class="AIML-overlay-1">
            <div class="AIML-content-1">
              <h1>AI & ML Careers</h1>
              <p>Home / Careers / AI & ML Careers</p>
            </div>
          </div>
        </div>
      </div>



      <div className="AIML-contain">

        <div className="AIML-img">
          <img src={AIMLLeftImg} alt="databaseapp" />
        </div>

        <div className="AIML-contents">
          <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
          <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
          <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>AI & ML</b></a></p>
        </div>
      </div>





      <div className="AIML-development">
                <h1>AI & ML Careers</h1>
                <div className="AIML-development-contents">
                    <p>AI & ML Engineer</p>
                    
                    
                </div>

            </div>











    </div>
  )
}

export default AIML