import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import WEBIMG from '../assets/WebIMG.svg';
import RouteNav from '../Components /RouteNav';
import './Web.css';

const Web = () => {
  return (
    <div className="web-container">

      <div className="web-header">

        <div className="web-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="web-contact">
          <ul>
            <div className="web-address">
              <div className="icon-web">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="web-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="web-email">
              <div className="icon-web">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="web-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="enter-ph">
              <div className="icon-web">
                <span className='i-web'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
              </div>
              <div className="web-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>

          </ul>
        </div>
      </div>

      <div className="web-nav-container">
            <RouteNav/>
      </div>


      <div className="web-header-1">
        <div class="web-hero-section-1" >
          <div class="web-overlay-1">
            <div class="web-content-1">
              <h1>Web Application</h1>
              <p>Home / Tech Services / Web Application</p>
            </div>
          </div>
        </div>
      </div>




      <div className="web-content-lists">
        <div className="web-left-content">


          <img src={WEBIMG} alt="" id="web-leftimg"/>
          <div className="content-web">
            <h1>Web Application</h1>

            <p id="web-para">Considering the manifold requirements of clients in mind, 
            we develop and integrate reliable and secure software solutions for the efficient
             automation of complex business workflows. We also render Enterprise Solutions for
              large-scale IT companies having many simultaneous users and support high availability. 
              These ERP dynamic solutions aid to strike a balance in planning, supporting, 
            delivering inside of supply chain, manufacturing, and business administration.</p>
            <div className="correct-lists">
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Well-versed in the best practices of all modern front-end tools.</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> We work efficiently to deliver a world-class front-end application.</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> High-Performance web application that grows your business.</p>
            
          </div>
          </div>




          <div className="web-work-withus">

            <h1>Why Work With Us</h1>

            <div className="web-workus">

              <div className="web-left-workus">

                <p>MODERN CODING TECHNOLOGIES</p>
                  <div className="web-bar">
                    <div className="web-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>CHALLENGING WORK ENVIRONMENT</p>
                  <div className="web-bar">
                    <div className="web-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>MAINTENANCE AND SUPPORT</p>
                  <div className="web-bar">
                    <div className="web-fill" style={{ width: '90%' }}></div>
                  </div>

              </div>

            

            <div className="web-right-workus">

              <p>FLEXIBLE WORKING HOURS</p>
                <div className="web-bar">
                  <div className="web-fill" style={{ width: '90%' }}></div>
                </div>

              <p>INSPIRING TEAMMATES</p>
                <div className="web-bar">
                  <div className="web-fill" style={{ width: '90%' }}></div>
                </div>

              <p>EXPLORING YOURSELF</p>
                <div className="web-bar">
                  <div className="web-fill" style={{ width: '90%' }}></div>
                </div>

            </div>
            </div>
          </div>
        </div>
      



      <div className="web-right-content">

        <div class="web-menu-container">
          <div class="web-menu-item ">
            <span>Enterprise Software</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item active">
            <span>Web Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Desktop Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Mobile Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Artificial Intelligence</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Machine Learning</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Quality Assurance</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="web-menu-item">
            <span>Business Process Outsourcing</span>
            <span class="arrow">&#8250;</span>
          </div>
        </div>




        <div class="web-contact-card">
        <div class="call-web-icon">
          <span className='call-web-i'>
        <i class="fa-solid fa-phone" style={{color: "#3178f2",}} />
        </span>
        </div>
        <h2>Have any Questions?</h2>
        <p>Call us Today!</p>
        <p class="phone-number">(+91) 9791565317</p>
    </div>
    </div>

      </div>



    


    <div className="web-get-in-touch">
      <div className="web-left-touch-content">
        <p>Let’s Work Together</p>
        <h1>Have any Questions? Call us Today!</h1>
      </div>
      <div className="web-right-touch-content">
        <button>Get In Touch</button>
      </div>
    </div>

















      </div>
 
  );
}

export default Web;
