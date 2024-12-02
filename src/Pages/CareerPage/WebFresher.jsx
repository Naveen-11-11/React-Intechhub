import React from 'react'
import "./WebFresher.css";
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import CareersWebAppLeftImg from '../../assets/CareersWebAppLeftImg.svg'
import RouteNav from '../../Components /RouteNav';
import Drop from '../../Components /Drop';
import DropContents from './DropContents';

const WebFresher = () => {
    return (
        <div className='fresher-web-app'>
            <div className="fresher-web-header">

                <div className="fresher-web-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="fresher-web-contact">
                    <ul>
                        <div className="fresher-web-address">
                            <div className="icon-web-fresher">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="fresher-web-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="fresher-web-email">
                            <div className="icon-web-fresher">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="fresher-web-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="fresher-web-ph">
                            <div className="icon-web-fresher">
                                <span className='i-web-fresher'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="fresher-web-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>




            <div className="fresher-web-nav-container">
                <RouteNav/>
            </div>


            <div className="fresher-web-app-header-1">
                <div class="fresher-web-app-hero-section-1" >
                    <div class="fresher-web-app-overlay-1">
                        <div class="fresher-web-app-content-1">
                            <h1>Web Application Careers</h1>
                            <p>Home / Careers / Web Application Careers</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="fresher-web-app-contain">

                <div className="fresher-web-app-img">
                    <img src={CareersWebAppLeftImg} alt="fresherwebapp" />
                </div>

                <div className="fresher-web-app-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Full Stack</b></a></p>
                </div>
            </div>


            <div className="fresher-web-app-development">
                <h1>Web Application Development</h1>
                <div className="fresher-web-app-development-contents">
                <div className='drop'>
                <Drop title="Full Stack Developer (Entry Level)" content={<DropContents/>}/>

                
                </div>
                    
                    
                </div>

            </div>














        </div>
    )
}

export default WebFresher;