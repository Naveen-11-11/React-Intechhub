import React from 'react';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import DesktopLeft from '../assets/Desktop-Left.svg';
import './Desktop.css';
import RouteNav from '../Components /RouteNav';

const Desktop = () => {
    return (
        <div className="desk-container">

            <div className="desk-header">

                <div className="desk-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="desk-contact">
                    <ul>
                        <div className="desk-address">
                            <div className="icon-desk">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="desk-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="desk-email">
                            <div className="icon-desk">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="desk-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-desk">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="desk-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>

            <div className="desk-nav-container">
                <RouteNav/>
            </div>


            <div className="desk-header-1">
                <div class="desk-hero-section-1" >
                    <div class="desk-overlay-1">
                        <div class="desk-content-1">
                            <h1>Desktop Application</h1>
                            <p>Home / Tech Services / Desktop Application</p>
                        </div>
                    </div>
                </div>
            </div>




            <div className="desk-content-lists">
                <div className="desk-left-content">


                    <img src={DesktopLeft} alt="" id="desk-leftimg" />
                    <div className="content-desk">
                        <h1>Desktop Application</h1>

                        <p id="desk-para">Based on client’s ideas we design a framework accordingly to meet out their needs.
                            We develop custom software solutions, mainly for your business needs and also support a wide variety
                            of platforms and applications to address the unique business requirements of our clients. We follow a
                            rigorous agile development
                            process and are committed to safeguard our clients’ intellectual property.</p>
                        <div className="correct-lists">
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Time-Sensitive and innovative Solution</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} />  Completely dependable and affordable</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Full custom Software development</p>
                            <p><i class="fa-solid fa-circle-check" style={{ color: "#022f7e", }} /> Flexible and cost-effective solutions</p>
                        </div>
                    </div>




                    <div className="desk-work-withus">

                        <h1>Why Work With Us</h1>

                        <div className="desk-workus">

                            <div className="desk-left-workus">

                                <p>EXPERT PEOPLE AT WORK</p>
                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>INNOVATORY IDEAS</p>

                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>TRANSPAENCY AT WORK<br />
                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div></p>

                            </div>



                            <div className="desk-right-workus">

                                <p>FAST GROWING PROCESS</p>
                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>EXPRESS SERVICE</p>
                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div>

                                <p>POWERFUL & SECURE DEVELOPMENT</p>
                                    <div className="desk-bar">
                                        <div className="desk-fill" style={{ width: '90%' }}></div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>




                <div className="desk-right-content">

                    <div class="desk-menu-container">
                        <div class="desk-menu-item ">
                            <span>Enterprise Software</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item ">
                            <span>Web Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item active">
                            <span>Desktop Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item">
                            <span>Mobile Application</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item">
                            <span>Artificial Intelligence</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item">
                            <span>Machine Learning</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item">
                            <span>Quality Assurance</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                        <div class="desk-menu-item">
                            <span>Business Process Outsourcing</span>
                            <span class="arrow">&#8250;</span>
                        </div>
                    </div>




                    <div class="desk-contact-card">
                        <div class="call-desk-icon">
                            <span className='call-desk-i'>
                            <i class="fa-solid fa-phone" style={{ color: "#3178f2", }} />
                            </span>
                        </div>
                        <h2>Have any Questions?</h2>
                        <p>Call us Today!</p>
                        <p class="phone-number">(+91) 9791565317</p>
                    </div>
                </div>

            </div>






            <div className="desk-get-in-touch">
                <div className="desk-left-touch-content">
                    <p>Let’s Work Together</p>
                    <h1>Have any Questions? Call us Today!</h1>
                </div>
                <div className="desk-right-touch-content">
                    <button>Get In Touch</button>
                </div>
            </div>

















        </div>

    );
}

export default Desktop;


