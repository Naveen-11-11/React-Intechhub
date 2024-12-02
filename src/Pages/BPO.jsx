import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import './BPO.css';
import BPOLeft from '../assets/BPOLeft.svg'
import RouteNav from '../Components /RouteNav'

const BPO = () => {
    return (
        <div className="bpo-container">

            <div className="bpo-header">

                <div className="bpo-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="bpo-contact">
                    <ul>
                        <div className="bpo-address">
                            <div className="icon-bpo">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="bpo-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="bpo-email">
                            <div className="icon-bpo">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="bpo-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="bpo-ph">
                            <div className="icon-bpo">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="bpo-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>

            <div className="bpo-nav-container">
               <RouteNav/>
            </div>


            <div className="bpo-header-1">
                <div class="bpo-hero-section-1">
                    <div class="bpo-overlay-1">
                        <div class="bpo-content-1">
                            <h1>Bussiness Process Outsourcing</h1>
                            <p>Home / Tech Services /Bussiness Process Outsourcing</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="bpo-content-lists">
                <div className="bpo-left-content">


                    <img src={BPOLeft} alt="" id="bpo-leftimg" />
                    <div className="content-bpo">
                        <h1>Bussiness Process Outsourcing</h1>

                        <p id="bpo-para">our business process outsourcing experts can create business 
                        continuity for better intelligent workflows to transform your organization
                         Traditional operations and business process outsourcing models are being 
                         reinvented through more intelligent workflows using automation, artificial
                          intelligence, the Internet of Things (IoT), cloud and other emerging 
                          technologies. To remain relevant and grow, we help our Customers to
                           constantly evolve to with intelligent, fully orchestrated processes.</p>
                        <div className="bpo-correct-lists">
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />   Business strategy services</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  Technology consulting</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  Digital marketing and analytics</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  Healthcare management consulting</p>

                        </div>
                    </div>




                    <div className="bpo-work-withus">

                        <h1>Why Work With Us</h1>

                        <div className="bpo-workus">

                            <div className="bpo-left-workus">

                                <p>CLOUD SERVICES</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>SUPPLY CHAIN SERVICES</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>DIGITAL MARKETING</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                            </div>



                            <div className="bpo-right-workus">

                                <p>SECURITY AS A SERVICE</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>BLOCKCHAIN SOLUTIONS</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>CLAIMS PROCESSING</p>
                                    <div className="bpo-bar">
                                        <div className="bpo-fill" style={{ width: '90%' }}></div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>




                <div className="bpo-right-content">

                    <div class="bpo-menu-container">
                        <div class="bpo-menu-item ">
                            <span>Enterprise Software</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item">
                            <span>Web Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item">
                            <span>Desktop Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item ">
                            <span>Mobile Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item ">
                            <span>Artificial Intelligence</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item ">
                            <span>Machine Learning</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item ">
                            <span>Quality Assurance</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="bpo-menu-item active">
                            <span>Business Process Outsourcing</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                    </div>




                    <div class="bpo-contact-card">
                        <div class="call-bpo-icon">
                            <span className='call-bpo-i'>
                            <i class="fa-solid fa-phone" style={{ color: "#3178f2", }} />
                            </span>
                        </div>
                        <h2>Have any Questions?</h2>
                        <p>Call us Today!</p>
                        <p class="phone-number">(+91) 9791565317</p>
                    </div>
                </div>

            </div>






            <div className="bpo-get-in-touch">
                <div className="bpo-left-touch-content">
                    <p>Let’s Work Together</p>
                    <h1>Have any Questions? Call us Today!</h1>
                </div>
                <div className="bpo-right-touch-content">
                    <button>Get In Touch</button>
                </div>
            </div>

















        </div>

    );
}

export default BPO;
