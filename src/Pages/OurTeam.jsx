import React from 'react';
import "./OurTeam.css";
import enterlogo from '../assets/COLOR-LOGO.png';
import { Link } from 'react-router-dom';
import RouteNav from '../Components /RouteNav';

const OurTeam = () => {
    return (
        <div className='team-container'>
            <div className="team-header">

                <div className="team-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="team-contact">
                    <ul>
                        <div className="team-address">
                            <div className="icon-team">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="team-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="team-email">
                            <div className="icon-team">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="team-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="team-ph">
                            <div className="icon-team">
                                <i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="team-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>


            <div className="team-nav-container">
                <RouteNav />
            </div>


            <div className="team-header-1">
                <div class="team-hero-section-1" >
                    <div class="team-overlay-1">
                        <div class="team-content-1">
                            <h1>Our Team</h1>
                            <p>Home / Tech Services / Our Team</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="core-team-section">


                <h1 className="core-team-heading">Meet our Core Team</h1>
                <div className="core-team-lists">
                    <div className="team-banner">
                        <span>EXECUTIVES</span>
                    </div>
                    <div className="team-cards">

                        <div className="team-card">
                            <h2>Karthik Shanmugam</h2>
                            <p className="position">President, USA</p>
                            <p className="description">Visionary leader with 20+ years in software, championing innovation and excellence. Spearheading our company's success with strategic vision and commitment to transformative tech solutions and customer satisfaction.</p>
                        </div>

                        <div className="team-card">
                            <h2>Anand Subramanian</h2>
                            <p className="position">Operations Head, Global</p>
                            <p className="description">Exemplary leader with 20+ years expertise, steering IT and sales, driving innovation, excellence, and transformative strategies at the nexus of technology and business.</p>
                        </div>

                        <div className="team-card">
                            <h2>Ramnath N</h2>
                            <p className="position">General Manager (Sales & Operations)</p>
                            <p className="description">Seasoned executive with 15+ years of experience leading sales and operations, driving strategic initiatives for business excellence.</p>
                        </div>
                    </div>
                </div>





                <div className="core-team-lists-1">
                    <div className="team-banner-1">
                        <span>SENIOR LEADERS</span>
                    </div>

                    <div className="team-cards-1">
                        <div className="team-card-1">
                            <h2>Selvaraj S</h2>
                            <p className="position-1">Director / Projects</p>
                            <p className="description">Results-oriented leader with over 15 years of experience leading cross-functional teams to deliver impactful technology solutions, expertise in project planning and stakeholder management</p>
                        </div>

                        <div className="team-card-1">
                            <h2>Dineshbabu B</h2>
                            <p className="position-1">Client Relationship Manager</p>
                            <p className="description-1">Leveraging 15 years of expertise to cultivate and sustain mutually beneficial partnerships through strategic client engagement and exceptional service delivery</p>
                        </div>
                    </div>

                </div>

            </div>



            <div class="core-team-section-2">
            <div className="core-team-lists-2">
                    <div className="team-banner-2">
                        <span>LEADERS</span>
                    </div>
                    <div className="team-cards-2">

                        <div className="team-card-item-lists">

                            <div className="team-card-left-list">
                                <div className="team-card-2">
                                    <h2>Thambidurai S</h2>
                                    <p className="position-2">Technical head (Mobile & Cloud Apps)</p>
                                </div>

                                <div className="team-card-2">
                                    <h2>Ganeshkumar S</h2>
                                    <p className="position-2">Technical head (Windows & Web Apps)</p>
                                </div>

                                <div className="team-card-2">
                                    <h2>Abhinav J</h2>
                                    <p className="position-2">Technical head (AI/ML & Robotics)</p>
                                </div>
                            </div>

                            <div className="team-card-right-list">
                                <div className="team-card-2">
                                    <h2>Avinash K</h2>
                                    <p className="position-2">Technical head (Data Science Engineering)</p>
                                </div>

                                <div className="team-card-2">
                                    <h2>Sivanandham S</h2>
                                    <p className="position-2">Head (Quality Assurance)</p>
                                </div>

                                <div className="team-card-2">
                                    <h2>Arun T</h2>
                                    <p className="position-2">Head (ITIS / BPO)</p>
                                </div>
                            </div>






                        </div>
                    </div>
                    </div>


                </div>












        </div>
    )
}

export default OurTeam