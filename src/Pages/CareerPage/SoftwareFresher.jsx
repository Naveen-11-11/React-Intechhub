import React from 'react'
import './SoftwareFresher.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import SoftwareLeftImg from '../../assets/SoftwareLeftImg.svg'
import DropContents from './DropContents';
import Drop from '../../Components /Drop';

const Software = () => {
    return (
        <div className='softwarefresher-testing'>
            <div className="softwarefresher-header">

                <div className="softwarefresher-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="softwarefresher-contact">
                    <ul>
                        <div className="softwarefresher-address">
                            <div className="icon-softwarefresher">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="softwarefresher-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="softwarefresher-email">
                            <div className="icon-softwarefresher">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="softwarefresher-content">
                                <p><strong>Email</strong></p>
                                <li> contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="softwarefresher-ph">
                            <div className="icon-softwarefresher">
                                <span className='i-softwarefresher'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="softwarefresher-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>



            <div className="softwarefresher-nav-container">
                <RouteNav />
            </div>




            <div className="softwarefresher-header-1">
                <div class="softwarefresher-hero-section-1" >
                    <div class="softwarefresher-overlay-1">
                        <div class="softwarefresher-content-1">
                            <h1>Software Testing Careers</h1>
                            <p>Home / Careers / QA Engineers</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="softwarefresher-contain">

                <div className="softwarefresher-img">
                    <img src={SoftwareLeftImg} alt="softwarefresherapp" />
                </div>

                <div className="softwarefresher-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Manual & Automation</b></a></p>
                </div>
            </div>


            <div className="softwarefresher-development">
                <h1>QA Careers</h1>
                <div className="softwarefresher-development-contents">
                <div className='drop'>
                <Drop title="Software Test Entry-Level Engineer" content={<DropContents/>}/>
      
                
                </div>
                    

                </div>

            </div>



        </div>
    )
}

export default Software