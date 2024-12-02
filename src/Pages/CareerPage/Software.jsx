import React from 'react'
import './Software.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import SoftwareLeftImg from '../../assets/SoftwareLeftImg.svg'
import Drop from '../../Components /Drop';
import DropContents from './DropContents';

const Software = () => {
    return (
        <div className='software-testing'>
            <div className="software-header">

                <div className="software-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="software-contact">
                    <ul>
                        <div className="software-address">
                            <div className="icon-software">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="software-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="software-email">
                            <div className="icon-software">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="software-content">
                                <p><strong>Email</strong></p>
                                <li> contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="software-ph">
                            <div className="icon-software">
                                <span className='i-software'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="software-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>



            <div className="software-nav-container">
                <RouteNav />
            </div>




            <div className="software-header-1">
                <div class="software-hero-section-1" >
                    <div class="software-overlay-1">
                        <div class="software-content-1">
                            <h1>Software Testing Careers</h1>
                            <p>Home / Careers / QA Engineers</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="software-contain">

                <div className="software-img">
                    <img src={SoftwareLeftImg} alt="databaseapp" />
                </div>

                <div className="software-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Manual & Automation</b></a></p>
                </div>
            </div>


            <div className="software-development">
                <h1>QA Careers</h1>
                <div className="software-development-contents">

                <div className='drop'>
                <Drop title="Senior QA (Manual & Automation)" content={<DropContents/>}/><hr/>
                <Drop title="Software Test Engineer" content={<DropContents/>}/><hr/>
                
                </div>
                  
                </div>

            </div>



        </div>
    )
}

export default Software