import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './QA.css';
import QALeft from '../assets/QALeft.svg'
import RouteNav from '../Components /RouteNav'

const QA = () => {
    return (
        <div className="qa-container">

            <div className="qa-header">

                <div className="qa-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="qa-contact">
                    <ul>
                        <div className="qa-address">
                            <div className="icon-qa">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="qa-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="qa-email">
                            <div className="icon-qa">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="qa-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="qa-ph">
                            <div className="icon-qa">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="qa-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>

            <div className="qa-nav-container">
                <RouteNav/>
            </div>


            <div className="qa-header-1">
                <div class="qa-hero-section-1">
                    <div class="qa-overlay-1">
                        <div class="qa-content-1">
                            <h1>Quality Assurance</h1>
                            <p>Home / Tech Services /Quality Assurance</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="qa-content-lists">
                <div className="qa-left-content">


                    <img src={QALeft} alt="" id="qa-leftimg" />
                    <div className="content-qa">
                        <h1>Quality Assurance</h1>

                        <p id="qa-para">We provide end-to-end quality assurance to help enterprises manage an
                            increasingly complex technology landscape. We balance the cost, speed, quality and time
                            to market by leveraging the well-established quality assurance practices with the support
                            of DevOps and advanced automation solutions like Robotic Process Automation. our customer’s
                            technical and business risks will be mitigated through the custom-designed quality assurance
                            frameworks, methodologies, and accelerators.</p>
                        <div className="qa-correct-lists">
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  System and Functional Testing</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Database testing: data integrity, integration, migration</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Performance (Load and Stress) testing</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Usability and application interface testing</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  E2E Automation Testing</p>
                        </div>
                    </div>




                    <div className="qa-work-withus">

                        <h1>Why Work With Us</h1>

                        <div className="qa-workus">

                            <div className="qa-left-workus">

                                <p>EXPERINCED QA ANALYSTS</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>BETTER DOCUMENTATION</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>ADVANCED AUTOMATION SOLUTIONS</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                            </div>



                            <div className="qa-right-workus">

                                <p>STRONG BUSINESS KNOWLEDGE</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>AGILE TESTING</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>SEAMLESS CUSTOMER EXPERIENCE</p>
                                    <div className="qa-bar">
                                        <div className="qa-fill" style={{ width: '90%' }}></div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>




                <div className="qa-right-content">

                    <div class="qa-menu-container">
                        <div class="qa-menu-item ">
                            <span>Enterprise Software</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item">
                            <span>Web Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item">
                            <span>Desktop Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item ">
                            <span>Mobile Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item ">
                            <span>Artificial Intelligence</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item ">
                            <span>Machine Learning</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item active">
                            <span>Quality Assurance</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="qa-menu-item">
                            <span>Business Process Outsourcing</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                    </div>




                    <div class="qa-contact-card">
                        <div class="call-qa-icon">
                            <span className='call-qa-i'>
                            <i class="fa-solid fa-phone" style={{ color: "#3178f2", }} />
                            </span>
                        </div>
                        <h2>Have any Questions?</h2>
                        <p>Call us Today!</p>
                        <p class="phone-number">(+91) 9791565317</p>
                    </div>
                </div>

            </div>






            <div className="qa-get-in-touch">
                <div className="qa-left-touch-content">
                    <p>Let’s Work Together</p>
                    <h1>Have any Questions? Call us Today!</h1>
                </div>
                <div className="qa-right-touch-content">
                    <button>Get In Touch</button>
                </div>
            </div>

















        </div>

    );
}

export default QA;
