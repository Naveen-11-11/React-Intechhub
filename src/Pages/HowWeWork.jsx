import React from 'react'
import './HowWeWork.css'
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import RouteNav from '../Components /RouteNav';
import BulbLeftImg from '../assets/BulbLeftImg.svg';
import DesignLeftImg from '../assets/DesignLeftImg.svg';
import DevelopmentLeftImg from '../assets/DevelopmentLeftImg.svg';
import QARightImg from '../assets/QARightImg.svg';
import DeploymentLeftImg from '../assets/DeploymentLeftImg.svg';
import WebMaintenanceRightImg from '../assets/WebMaintenanceRightImg.svg';


const HowWeWork = () => {
    return (
        <div className='we-work-container'>
            <div className="we-work-header">

                <div className="we-work-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="we-work-contact">
                    <ul>
                        <div className="we-work-address">
                            <div className="icon-we-work">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="we-work-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="we-work-email">
                            <div className="icon-we-work">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="we-work-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="we-work-ph">
                            <div className="icon-we-work">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="we-work-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>



            <div className="we-work-nav-container">
                <RouteNav />
            </div>



            <div className="we-work-header-1">
                <div class="we-work-hero-section-1" >
                    <div class="we-work-overlay-1">
                        <div class="we-work-content-1">
                            <h1>How We Work</h1>
                            <p>Home / Tech Services / How We Work</p>
                        </div>
                    </div>
                </div>
            </div>




            <div class="work-card-container">
        
        <div class="we-work-section">
            <div class="we-work-left-icon">
                <img src={BulbLeftImg} alt="Idea Icon"/>
            </div>
            <div class="we-work-left-content">
                <h2>Idea & Plans</h2>
                <p>Every project begins with an idea. Together, we discover ideas and connect the dots to build an innovative solution.</p>
            </div>
        </div>

        <div class="we-work-section">
            
            <div class="we-work-right-content">
                <h2>Design</h2>
                <p>Designing enriches our company to bring out the best in us for more innovation and relevance.</p>
            </div>
            <div class="we-work-right-icon">
                <img src={DesignLeftImg} alt="Design Icon"/>
            </div>
        </div>




        <div class="we-work-section">
            <div class="we-work-left-icon">
                <img src={DevelopmentLeftImg} alt="Idea Icon"/>
            </div>
            <div class="we-work-left-content">
                <h2>Development</h2>
                <p>We build the user-friendly product to the clients with detailed documentation and deliver it with utmost care.</p>
            </div>
        </div>

        <div class="we-work-section">
            
            <div class="we-work-right-content">
                <h2>Quality Assurance</h2>
                <p>Quality Assurance is now integral to software delivery as agility becomes non-negotiable.</p>
            </div>
            <div class="we-work-right-icon">
                <img src={QARightImg} alt="Design Icon"/>
            </div>
        </div>













        <div class="we-work-section">
            <div class="we-work-left-icon">
                <img src={DeploymentLeftImg } alt="Idea Icon"/>
            </div>
            <div class="we-work-left-content">
                <h2>Deployment</h2>
                <p>The finest product after rigorous testing at multiple levels will be finally deployed to the production.</p>
            </div>
        </div>

        <div class="we-work-section">
            
            <div class="we-work-right-content">
                <h2>Maintenance & Support</h2>
                <p>We provide technical support for any issues including remote troubleshooting.</p>
            </div>
            <div class="we-work-right-icon">
                <img src={WebMaintenanceRightImg} alt="Design Icon"/>
            </div>
        </div>










    </div>















        </div>
    )
}

export default HowWeWork