import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './Mobile.css';
import MobileLeft from  '../assets/MobileLeft.svg'
import RouteNav from '../Components /RouteNav';


const Mobile = () => {
  return (
    <div className="mobile-container">

      <div className="mobile-header">

        <div className="mobile-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="mobile-contact">
          <ul>
            <div className="mobile-address">
              <div className="icon-mobile">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="mobile-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="mobile-email">
              <div className="icon-mobile">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="mobile-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="mobile-ph">
              <div className="icon-mobile">
                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
              </div>
              <div className="mobile-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>
          
          </ul>
        </div>
      </div>

      <div className="mobile-nav-container">
        <RouteNav/>
      </div>


      <div className="mobile-header-1">
        <div class="mobile-hero-section-1">
          <div class="mobile-overlay-1">
            <div class="mobile-content-1">
              <h1>Mobile Application</h1>
              <p>Home / Tech Services / Mobile Application</p>
            </div>
          </div>
        </div>
      </div>




      <div className="mobile-content-lists">
        <div className="mobile-left-content">


          <img src={MobileLeft} alt="" id="mobile-leftimg"/>
          <div className="content-mobile">
            <h1>Mobile Application</h1>

            <p id="mobile-para">Our team integrates essential mobile technologies and architecture with 
            a unique user experience to create a fast and smooth app that reaches the customer goals and 
             the hearts of the users. Turn your idea into a mobile app!</p>
            <div className="correct-lists">
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Customized IOS Platform</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Customized Android Platform</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Progressive Web Apps development</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Deliver app with best architectures</p>
          </div>
          </div>




          <div className="mobile-work-withus">

            <h1>Why Work With Us</h1>

            <div className="mobile-workus">

              <div className="mobile-left-workus">

                <p>MONOLITHIC TO MICRO-SERVICES</p>
                  <div className="mobile-bar">
                    <div className="mobile-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>EXCEPTIONAL QUALITY</p>
                  <div className="mobile-bar">
                    <div className="mobile-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>CUTTING EDGE SOLUTIONS</p>
                  <div className="mobile-bar">
                    <div className="mobile-fill" style={{ width: '90%' }}></div>
                  </div>

              </div>

            

            <div className="mobile-right-workus">

              <p>CLEAN ARCHITECTURES</p>
                <div className="mobile-bar">
                  <div className="mobile-fill" style={{ width: '90%' }}></div>
                </div>

              <p>PROPER DOCUMENTATION</p>
                <div className="mobile-bar">
                  <div className="mobile-fill" style={{ width: '90%' }}></div>
                </div>

              <p>DIGITAL TRANSFORMATION WITH MODERNIZED SOFTWARE</p>
                <div className="mobile-bar">
                  <div className="mobile-fill" style={{ width: '90%' }}></div>
                </div>

            </div>
            </div>
          </div>
        </div>
      



      <div className="mobile-right-content">

        <div class="mobile-menu-container">
          <div class="mobile-menu-item ">
            <span>Enterprise Software</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Web Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Desktop Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item active">
            <span>Mobile Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Artificial Intelligence</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Machine Learning</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Quality Assurance</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="mobile-menu-item">
            <span>Business Process Outsourcing</span>
            <span class="arrow">&#8250;</span>
          </div>
        </div>




        <div class="mobile-contact-card">
        <div class="call-mobile-icon">
          <span className='call-mobile-i'>
        <i class="fa-solid fa-phone" style={{color: "#3178f2",}} />
        </span>
        </div>
        <h2>Have any Questions?</h2>
        <p>Call us Today!</p>
        <p class="phone-number">(+91) 9791565317</p>
    </div>
    </div>

      </div>



    


    <div className="mobile-get-in-touch">
      <div className="mobile-left-touch-content">
        <p>Let’s Work Together</p>
        <h1>Have any Questions? Call us Today!</h1>
      </div>
      <div className="mobile-right-touch-content">
        <button>Get In Touch</button>
      </div>
    </div>

















      </div>
 
  );
}

export default Mobile;
