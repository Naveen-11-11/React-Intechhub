import React from 'react'
import "./WebApplicationCareers.css";
import { Link, Route } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import CareersWebAppLeftImg from '../../assets/CareersWebAppLeftImg.svg'
import RouteNav from '../../Components /RouteNav';


import Drop from '../../Components /Drop';
import DropContents from './DropContents';

const WebApplicationCareers = () => {


    return (
        <div className='careers-web-app'>
            <div className="careers-web-header">

                <div className="careers-web-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="careers-web-contact">
                    <ul>
                        <div className="careers-web-address">
                            <div className="icon-web-careers">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="careers-web-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="careers-web-email">
                            <div className="icon-web-careers">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="careers-web-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-web-careers">
                                <span className='i-web-careers'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="careers-web-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>




            <div className="careers-web-nav-container">
                <RouteNav />
            </div>


            <div className="careers-web-app-header-1">
                <div class="careers-web-app-hero-section-1" >
                    <div class="careers-web-app-overlay-1">
                        <div class="careers-web-app-content-1">
                            <h1>Web Application Careers</h1>
                            <p>Home / Careers / Web Application Careers</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="careers-web-app-contain">

                <div className="careers-web-app-img">
                    <img src={CareersWebAppLeftImg} alt="careerswebapp" />
                </div>

                <div className="careers-web-app-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Full Stack</b></a></p>
                </div>
            </div>


            <div className="careers-web-app-development">
                <h1>Web Application Development</h1>
                <div className="careers-web-app-development-contents">
                    <div className='drop'>
                        <Drop title=".Net Technical Lead" content={<DropContents />} /><hr />
                        <Drop title="Full Stack .Net Developer (Entry level)" content={<DropContents />} /><hr />
                        <Drop title="UI Developer" content={<DropContents />} />
                    </div>
                </div>
            </div>
        </div>
















    )
}

export default WebApplicationCareers