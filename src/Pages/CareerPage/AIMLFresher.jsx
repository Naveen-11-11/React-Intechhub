import React from 'react';
import './AIMLFresher.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import AIMLLeftImg from'../../assets/AIMLLeftImg.svg';
const AIML = () => {
  return (
    <div className='AIML-fresher-container'>
      <div className="AIML-fresher-header">

        <div className="AIML-fresher-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="AIML-fresher-contact">
          <ul>
            <div className="AIML-fresher-address">
              <div className="icon-AIML-fresher">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="AIML-fresher-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="AIML-fresher-email">
              <div className="icon-AIML-fresher">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="AIML-fresher-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="AIML-fresher-ph">
              <div className="icon-AIML-fresher">
                <span className='i-AIML-fresher'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
              </div>
              <div className="AIML-fresher-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>

          </ul>
        </div>
      </div>




      <div className="AIML-fresher-nav-container">
        <RouteNav />
      </div>





      <div className="AIML-fresher-header-1">
        <div class="AIML-fresher-hero-section-1" >
          <div class="AIML-fresher-overlay-1">
            <div class="AIML-fresher-content-1">
              <h1>AI & ML Careers</h1>
              <p>Home / Careers / AI & ML Careers</p>
            </div>
          </div>
        </div>
      </div>



      <div className="AIML-fresher-contain">

        <div className="AIML-fresher-img">
          <img src={AIMLLeftImg} alt="fresherapp" />
        </div>

        <div className="AIML-fresher-contents">
          <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
          <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
          <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>AI & ML</b></a></p>
        </div>
      </div>





      <div className="AIML-fresher-development">
                <h1>AI & ML Careers</h1>
                <div className="AIML-development-contents">
                    <p>AI & ML Engineer</p>
                    
                    
                </div>

            </div>











    </div>
  )
}

export default AIML