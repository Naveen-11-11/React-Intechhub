import React from 'react'
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import AboutusLeft from "../assets/AboutusLeft.png"
import IntegrityImg from '../assets/IntegrityImg.png';
import ContinuosLearningImg from '../assets/Continuos-LearningImg.png';
import InnovationImg from '../assets/InnovationImg.png';
import ConstantImprovementImg from '../assets/Constant-ImprovementImg.png';
import TrustImg from '../assets/TrustImg.png';
import TeamWorkImg from '../assets/Team-WorkImg.png';
import QualityImg from '../assets/QualityImg.png';
import CommitmenttoCustomerImg from '../assets/Commitment-to-CustomerImg.png';
import ValuesRightImg from '../assets/ValuesRightImg.png';

import "./AboutUs.css";
import RouteNav from '../Components /RouteNav';

const AboutUs = () => {
    return (
        <div className='aboutus-container'>
            <div className="aboutus-header">

                <div className="aboutus-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="aboutus-contact">
                    <ul>
                        <div className="aboutus-address">
                            <div className="icon-aboutus">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="aboutus-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="aboutus-email">
                            <div className="icon-aboutus">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="aboutus-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="aboutus-ph">
                            <div className="icon-aboutus">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="aboutus-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>


            <div className="aboutus-nav-container">
                <RouteNav />
            </div>

            <div className="aboutus-header-1">
                <div class="aboutus-hero-section-1" >
                    <div class="aboutus-overlay-1">
                        <div class="aboutus-content-1">
                            <h1>About Us</h1>
                            <p>Home / Tech Services / About Us</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="aboutus-contentaboutus">
                <div className="aboutus-para">


                    <h1>About Us</h1>
                    <p id="para-aboutus"><strong>Serving Clients with Contemporary Technology to achieve prospective</strong></p>
                    <p>We are a rapidly growing technology company and offering high degree of software
                        products with inventive design and development to convey an outstanding infrastructure,
                        services, and solutions that promotes our standards. We bring in innovation and deliver
                        state-of-the-art technology solutions to several industries and stakeholders worldwide.</p>
                </div>

                <div className="aboutus-mission">
                    <img src={AboutusLeft} alt="mission" />
                    <div className='mission-content'>
                        <h1>Our Mission</h1>
                        <p>Our mission is to build a best in-class software development enterprise
                            by providing high-quality, on-time, and on-budget software solutions to
                            clients in information technology, customer service, and global operations
                            by continually combining our strategic thinking with the best in technology,
                            people, and process.</p>
                    </div>
                </div>
            </div>




    <div class="aboutus-values">
   
    <div class="values-content">
        <h1>Our Values</h1>
        <div class="values">
        
            <div class="left-values">
            
                <div class="value-item">
                    <img src={IntegrityImg} alt="Integrity" />
                    <span>Integrity</span>
                </div>
                <div class="value-item">
                    <img src={ContinuosLearningImg} alt="Continuous Learning" />
                    <span>Continuous Learning</span>
                </div>
                <div class="value-item">
                    <img src={InnovationImg} alt="Innovation" />
                    <span>Innovation</span>
                </div>
                <div class="value-item">
                    <img src={ConstantImprovementImg} alt="Constant Improvement" />
                    <span>Constant Improvement</span>
                </div>
            </div>
            <div class="right-values">
                <div class="value-item">
                    <img src={TrustImg} alt="Trust" />
                    <span>Trust</span>
                </div>
                <div class="value-item">
                    <img src={TeamWorkImg} alt="Team Work" />
                    <span>Team Work</span>
                </div>
                <div class="value-item">
                    <img src={QualityImg} alt="Quality" />
                    <span>Quality</span>
                </div>
                <div class="value-item">
                    <img src={ CommitmenttoCustomerImg} alt="Commitment to Customers" />
                    <span>Commitment to Customers</span>
                </div>
            </div>


            <div class="values-image">
        <img src={ValuesRightImg} alt="Values Illustration" />
    </div>

        </div>
    </div>
    
</div>











        </div>
    )
}

export default AboutUs