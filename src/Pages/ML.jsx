import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './ML.css';
import MLLeft from  '../assets/MLLeft.svg'
import RouteNav from '../Components /RouteNav'

const Enterprise = () => {
  return (
    <div className="ml-container">

      <div className="ml-header">

        <div className="ml-logo">
          <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
        </div>

        <div className="ml-contact">
          <ul>
            <div className="ml-address">
              <div className="icon-ml">
                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
              </div>
              <div className="ml-content">
                <p><strong>Address</strong></p>
                <li> Pammal, Chennai, India<br /> </li>
              </div>
            </div>

            <div className="ml-email">
              <div className="icon-ml">
                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
              </div>
              <div className="ml-content">
                <p><strong>Email</strong></p>
                <li>  contact@intechhub.com</li>
              </div>
            </div>

            <div className="ml-ph">
              <div className="icon-ml">
                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
              </div>
              <div className="ml-content">
                <p><strong>Phone</strong></p>
                <li> (+91) 9791565317</li>
              </div>
            </div>
          
          </ul>
        </div>
      </div>

      <div className="ml-nav-container">
        <RouteNav/>
      </div>


      <div className="ml-header-1">
        <div class="ml-hero-section-1">
          <div class="ml-overlay-1">
            <div class="ml-content-1">
              <h1>Machine Learning</h1>
              <p>Home / Tech Services / Machine Learning</p>
            </div>
          </div>
        </div>
      </div>




      <div className="ml-content-lists">
        <div className="ml-left-content">


          <img src={MLLeft} alt="" id="ml-leftimg"/>
          <div className="content-ml">
            <h1>Machine Learning</h1>

            <p id="ml-para">Machine learning is ubiquitous in the industry these days. We enable organizations
             to harvest a higher volume of insights from both structured and unstructured data than they could
              otherwise accomplish with traditional business intelligence solutions. Our analytic solutions based 
              on machine learning often operate in real time, adding a new dimension to BI. We offer many new commercial
               and open-source solutions for machine learning, along with a rich ecosystem.</p>
            <div className="ml-correct-lists">
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Predictive Analytics is Everywhere</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Distinct Competitive Advantage</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Automation at its best</p>
            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Accurate data analysis</p>
          </div>
          </div>




          <div className="ml-work-withus">

            <h1>Why Work With Us</h1>

            <div className="ml-workus">

              <div className="ml-left-workus">

                <p>Multi fidelity environment</p>
                  <div className="ml-bar">
                    <div className="ml-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>Up to Date analysis</p>
                  <div className="ml-bar">
                    <div className="ml-fill" style={{ width: '90%' }}></div>
                  </div>

                <p>Customer Enhancement</p>
                  <div className="ml-bar">
                    <div className="ml-fill" style={{ width: '90%' }}></div>
                  </div>

              </div>

            

            <div className="ml-right-workus">

              <p>Feature engineering</p>
                <div className="ml-bar">
                  <div className="ml-fill" style={{ width: '90%' }}></div>
                </div>

              <p>Integration with latest technologies</p>
                <div className="ml-bar">
                  <div className="ml-fill" style={{ width: '90%' }}></div>
                </div>

              <p>Innovative products</p>
                <div className="ml-bar">
                  <div className="ml-fill" style={{ width: '90%' }}></div>
                </div>

            </div>
            </div>
          </div>
        </div>
      



      <div className="ml-right-content">

        <div class="ml-menu-container">
          <div class="ml-menu-item ">
            <span>Enterprise Software</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item">
            <span>Web Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item">
            <span>Desktop Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item ">
            <span>Mobile Application</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item ">
            <span>Artificial Intelligence</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item active">
            <span>Machine Learning</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item">
            <span>Quality Assurance</span>
            <span class="arrow">&#8250;</span>
          </div>
          <div class="ml-menu-item">
            <span>Business Process Outsourcing</span>
            <span class="arrow">&#8250;</span>
          </div>
        </div>




        <div class="ml-contact-card">
        <div class="call-ml-icon">
          <span className='call-ml-i'>
        <i class="fa-solid fa-phone" style={{color: "#3178f2",}} />
        </span>
        </div>
        <h2>Have any Questions?</h2>
        <p>Call us Today!</p>
        <p class="phone-number">(+91) 9791565317</p>
    </div>
    </div>

      </div>



    


    <div className="ml-get-in-touch">
      <div className="ml-left-touch-content">
        <p>Let’s Work Together</p>
        <h1>Have any Questions? Call us Today!</h1>
      </div>
      <div className="ml-right-touch-content">
        <button>Get In Touch</button>
      </div>
    </div>

















      </div>
 
  );
}

export default Enterprise;
