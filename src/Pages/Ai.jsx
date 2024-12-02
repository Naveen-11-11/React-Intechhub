import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './Ai.css';
import AILeft from  '../assets/AILeft.svg'
import RouteNav from "../Components /RouteNav"

const Enterprise = () => {
  return (
    <div className="ai-container">

      <div className="ai-header">

        <div className="ai-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="ai-contact">
          <ul>
            <div className="ai-address">
              <div className="icon-ai">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="ai-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="ai-email">
              <div className="icon-ai">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="ai-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="ai-ph">
              <div className="icon-ai">
                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
              </div>
              <div className="ai-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>
          
          </ul>
        </div>
      </div>

      <div className="ai-nav-container">
       <RouteNav/>
      </div>


      <div className="ai-header-1">
        <div class="ai-hero-section-1">
          <div class="ai-overlay-1">
            <div class="ai-content-1">
              <h1>Artificial Intelligence</h1>
              <p>Home / Tech Services / Artificial Intelligence</p>
            </div>
          </div>
        </div>
      </div>




      <div className="ai-content-lists">
        <div className="ai-left-content">


          <img src={AILeft} alt="" id="ai-leftimg"/>
          <div className="content-ai">
            <h1>Artificial Intelligence</h1>

            <p id="ai-para">We follow unique approach to solve problems with AI using
             statistical techniques, search optimization and artificial neural networks. 
             We use machine learning techniques to discover insights, find new patterns
              and discover relationships in the data. Our AI analytics solution greatly 
              improves the data analysis capabilities in terms of speed, the scale of data
               that can be analyzed and the granularity of the data that can be monitored.</p>
            <div className="ai-correct-lists">
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Automate Tasks</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Plan Creation and Execution</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Data ingestion</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />Business Improvement</p>
          </div>
          </div>




          <div className="ai-work-withus">

            <h1>Why Work With Us</h1>

            <div className="ai-workus">

              <div className="ai-left-workus">

                <p>Forecasting Demand</p>
                  <div className="ai-bar">
                    <div className="ai-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>Business Monitoring</p>
                  <div className="ai-bar">
                    <div className="ai-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>Successful marketing campaigns</p>
                  <div className="ai-bar">
                    <div className="ai-fill" style={{ width: '90%' }}></div>
                  </div>

              </div>

            

            <div className="ai-right-workus">

              <p>Predictive Maintenance</p>
                <div className="ai-bar">
                  <div className="ai-fill" style={{ width: '90%' }}></div>
                </div>

              <p>Customer engagement</p>
                <div className="ai-bar">
                  <div className="ai-fill" style={{ width: '90%' }}></div>
                </div>

              <p>Turbocharged supply chain</p>
                <div className="ai-bar">
                  <div className="ai-fill" style={{ width: '90%' }}></div>
                </div>

            </div>
            </div>
          </div>
        </div>
      



      <div className="ai-right-content">

        <div class="ai-menu-container">
          <div class="ai-menu-item ">
            <span>Enterprise Software</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item">
            <span>Web Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item">
            <span>Desktop Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item ">
            <span>Mobile Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item active">
            <span>Artificial Intelligence</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item">
            <span>Machine Learning</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item">
            <span>Quality Assurance</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ai-menu-item">
            <span>Business Process Outsourcing</span>
            <span class="arrow">&#8250;</span>
          </div>
        </div>




        <div class="ai-contact-card">
        <div class="call-ai-icon">
          <span className='call-ai-i'>
        <i class="fa-solid fa-phone" style={{color: "#3178f2",}} />
        </span>
        </div>
        <h2>Have any Questions?</h2>
        <p>Call us Today!</p>
        <p class="phone-number">(+91) 9791565317</p>
    </div>
    </div>

      </div>



    


    <div className="ai-get-in-touch">
      <div className="ai-left-touch-content">
        <p>Let’s Work Together</p>
        <h1>Have any Questions? Call us Today!</h1>
      </div>
      <div className="ai-right-touch-content">
        <button>Get In Touch</button>
      </div>
    </div>

















      </div>
 
  );
}

export default Enterprise;
