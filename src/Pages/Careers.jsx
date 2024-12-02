import React from 'react';
import "./Careers.css";
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import RouteNav from '../Components /RouteNav';




const Careers = () => {
    return (
        <div className='careers-container'>
            <div className="careers-header">

                <div className="careers-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="careers-contact">
                    <ul>
                        <div className="careers-address">
                            <div className="icon-careers">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="careers-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="careers-email">
                            <div className="icon-careers">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="careers-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-careers">
                                <span className='i-careers'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="careers-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>



            <div className="culture-nav-container">
                <RouteNav />
            </div>



            <div className="careers-header-1">
                <div class="careers-hero-section-1" >
                    <div class="careers-overlay-1">
                        <div class="careers-content-1">
                            <h1>Careers</h1>
                            <p>Home / Careers</p>
                        </div>
                    </div>
                </div>
            </div>





            <div class="candiate-container">
                <div className="title-candiate">
                    <h2>Experienced Candidates</h2>
                </div>
                <div class="careeres-card-container">
                    <div class="careers-card">

                        <div className="careers-img">
                            <Link to="/web-application-careers"> <button>Web</button></Link>
                        </div>
                        <div className="careers-link">
                            <Link to="/web-application-careers"><li class="details-link">More Details → </li></Link>
                        </div>
                    </div>
                    <div class="careers-card">
                        <div className="careers-img">
                            <Link to="/windows-application-career"> <button>Windows</button></Link>
                        </div>
                        <div className="careers-link">
                            <Link to="/windows-application-career"><li class="details-link">More Details →</li></Link>
                        </div>
                    </div>
                    <div class="careers-card">
                        <div className="careers-img">
                            <Link to="/database-career"><button>Database</button></Link>
                        </div>
                        <div className="careers-link">
                            <Link to="/database-career"> <li class="details-link" >More Details →</li></Link>
                        </div>
                    </div>
                    <div class="careers-card">
                        <div className="careers-img">
                            <Link to="/artificial-intelligence"><button>AI & ML</button></Link>
                        </div>
                        <div className="careers-link">
                            <Link to="/artificial-intelligence"><li class="details-link">More Details →</li></Link>
                        </div>
                    </div>
                    <div class="careers-card">
                        <div className="careers-img">
                            <Link to="/software-testing"><button>Software Testing</button></Link>
                        </div>
                        <div className="careers-link">
                            <Link to="/software-testing"> <li  class="details-link">More Details →</li></Link>
                        </div>
                    </div>
                </div>

                <div className="candiate-2">
                    <div className="title-candiate">
                        <h2>Fresher Candidates</h2>
                    </div>

                    <div class="careeres-card-container">

                        <div class="careers-card">
                            <div className="careers-img">
                                <Link to="/fresher-web"><button>Web</button></Link>
                            </div>
                            <div className="careers-link">
                            <Link to="/fresher-web"> <li class="details-link">More Details →</li></Link>
                            </div>
                        </div>


                        <div class="careers-card">
                            <div className="careers-img">
                                <Link to="/database-freshers"><button>Database</button></Link>
                            </div>
                            <div className="careers-link">
                            <Link to="/database-freshers"> <li class="details-link">More Details →</li></Link>
                            </div>
                        </div>




                        <div class="careers-card">
                            <div className="careers-img">
                                <Link to="/artificial-intelligence"><button>AI & ML</button></Link>
                            </div>
                            <div className="careers-link">
                                <Link to="/artificial-intelligence"><li  class="details-link">More Details →</li></Link>
                            </div>
                        </div>


                        <div class="careers-card">
                            <div className="careers-img">
                                <Link to="/software-fresher"><button>Software Testing</button></Link>
                            </div>
                            <div className="careers-link">
                            <Link to="/software-fresher"> <li  class="details-link">More Details →</li></Link>
                            </div>
                        </div>




                    </div>

                </div>



            </div>












        </div>
    )
}

export default Careers