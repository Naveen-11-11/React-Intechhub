import React from 'react'
import './Windows.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import WindowsLeftImg from '../../assets/WindowsLeftImg.svg'
import Drop from '../../Components /Drop';
import DropContents from './DropContents';

const Windows = () => {
    return (
        <div className='windows-container'>
            <div className="windows-header">

                <div className="windows-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="windows-contact">
                    <ul>
                        <div className="windows-address">
                            <div className="icon-windows">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="windows-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="windows-email">
                            <div className="icon-windows">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="windows-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-windows">
                                <span className='i-windows'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="windows-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>



            <div className="windows-nav-container">
                <RouteNav />
            </div>



            <div className="windows-app-header-1">
                <div class="windows-hero-section-1" >
                    <div class="windows-overlay-1">
                        <div class="windows-content-1">
                            <h1>Windows Application Careers</h1>
                            <p>Home / Careers / Windows Application Careers</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="windows-contain">

                <div className="windows-img">
                    <img src={WindowsLeftImg} alt="windowsapp" />
                </div>

                <div className="windows-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Full Stack</b></a></p>
                </div>
            </div>




            <div className="windows-development">
                <h1>Windows Application Development</h1>
                <div className="windows-development-contents">
                <div className='drop'>
                <Drop title="Windows Service & Console App Developer" content={<DropContents/>}/><hr/>
                <Drop title="Windows Application Developer" content={<DropContents/>}/><hr/>
                
                </div>
                    
                </div>

            </div>






        </div>
    )
}

export default Windows