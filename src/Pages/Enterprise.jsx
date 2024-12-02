import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './Enterprise.css';
import Enterprisesoftware from '../assets/Enterprise-Software.svg';
import RouteNav from '../Components /RouteNav';


const Enterprise = () => {
  return (

    <div className="enter-container">

      <div className="enter-header">

        <div className="enter-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="enter-contact">
          <ul>
            <div className="enter-address">
              <div className="icon-enter">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="enterprise-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="enter-email">
              <div className="icon-enter">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="enterprise-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="enter-ph">
              <div className="icon-enter">
                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
              </div>
              <div className="enterprise-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>

          </ul>
        </div>
      </div>

      <div className="enter-nav-container">
        <RouteNav />
      </div>


      <div className="enterprise-header">
        <div class="enter-hero-section">
          <div class="enter-overlay">
            <div class="enter-content">
              <h1>Enterprise Software</h1>
              <p>Home / Tech Services / Enterprise Software</p>
            </div>
          </div>
        </div>
      </div>




      <div className="content-lists">
        <div className="enterprise-left-content">


          <img src={Enterprisesoftware} alt="" id="enterprise-leftimg" />
          <div className="content-enterprise">
            <h1>Enterprise Software</h1>

            <p id="enterprise-para">Considering the manifold requirements of clients in mind,
              we develop and integrate reliable and secure software solutions for the efficient
              automation of complex business workflows. We also render Enterprise Solutions for
              large-scale IT companies having many simultaneous users and support high availability.
              These ERP dynamic solutions aid to strike a balance in planning, supporting,
              delivering inside of supply chain, manufacturing, and business administration.</p>
            <div className="correct-lists">
              <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Technical Infrastructure Solution</p>
              <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Secure and Scalable Solutions</p>
              <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Portable Enterprise Solution</p>
              <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Leverages Digital Technologies</p>
            </div>
          </div>




          <div className="enter-work-withus">

            <h1>Why Work With Us</h1>

            <div className="enter-workus">

              <div className="enter-left-workus">

                <p>SCALABLE SOLUTIONS</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

                <p>BUSINESS/TECHNOLOGY SOLUTIONS</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

                <p>SELF-MANAGEMENT AND TRANSPARENCY</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

              </div>



              <div className="enter-right-workus">

                <p>FASTER PROCESSING</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

                <p>PRODUCT PROTOTYPING SYSTEM</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

                <p>ENTERPRISE SYSTEM INTEGRATION</p>
                <div className="enter-bar">
                  <div className="enter-fill" style={{ width: '90%' }}></div>
                </div>

              </div>
            </div>
          </div>
        </div>




        <div className="enterprise-right-content">

          <div class="menu-container">
            <div class="menu-item active">
              <span>Enterprise Software</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Web Application</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Desktop Application</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Mobile Application</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Artificial Intelligence</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Machine Learning</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Quality Assurance</span>
              <span class="arrow">&#8250;</span>
            </div>
            <div class="menu-item">
              <span>Business Process Outsourcing</span>
              <span class="arrow">&#8250;</span>
            </div>
          </div>




          <div class="contact-card">
            <div class="call-icon">
              <span className='call-i'><i class="fa-solid fa-phone" style={{ color: "#3178f2", }} /></span>
            </div>
            <h2>Have any Questions?</h2>
            <p>Call us Today!</p>
            <p class="phone-number">(+91) 9791565317</p>
          </div>
        </div>

      </div>






      <div className="get-in-touch">
        <div className="left-touch-content">
          <p>Let’s Work Together</p>
          <h1>Have any Questions? Call us Today!</h1>
        </div>
        <div className="right-touch-content">
          <button>Get In Touch</button>
        </div>
      </div>














    </div>


  );
}

export default Enterprise;
