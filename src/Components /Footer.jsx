import React from 'react'
import './Footer.css'
import Intechlogo from '../assets/Intech Logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">

                    <div class="footer-logo">
                        <img src={Intechlogo} alt="InTechHub Logo" />

                    </div>

                    <div class="footer-services">

                        <ul>
                            <div className='column-flex'>

                                <div className='columns-1'>
                                    <div className="title">
                                        <h3>Tech Services</h3>
                                    </div>
                                    <li>Enterprise Software</li>
                                    <li>Web Development</li>
                                    <li>Desktop Application</li>
                                    <li>Mobile App Development</li>
                                </div>
                                <div className='columns-2'>
                                    <li>Artificial Intelligence</li>
                                    <li>Machine Learning</li>
                                    <li>Quality Assurance</li>
                                    <li>Business Process Outsourcing</li>
                                </div>
                            </div>
                        </ul>
                    </div>


                    <div class="footer-contact">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><i class="fa-solid fa-location-dot" style={{ color: "#74C0FC" }} />  Pammal, Chennai, India<br /> </li>
                            <li><i></i>&nbsp;&nbsp;&nbsp;&nbsp;Salem, Tamil Nadu, India</li>
                            <li><i class="fa-solid fa-phone-volume" style={{ color: "#74C0FC" }} />  (+91) 9791565317</li>
                            <li><i class="fa-solid fa-envelope" style={{ color: "#74C0FC", }} />  contact@intechhub.com</li>
                            <li><i class="fa-solid fa-light fa-clock" style={{ color: "#74C0FC", }} /> Opening Hours: 10:00 - 18:00</li>
                        </ul>
                    </div>
                </div>


                <div className="copy-links">
                    <div className="copyright">
                        <p>&copy; 2021 All Rights Reserved. <span><Link to="/">InTechHub</Link></span></p>
                    </div>

                    <div class="footer-links">
                       <Link to="/">Home</Link>
                        <Link to="/aboutus"><span id="dot"></span>About Us</Link>
                            <Link to="/work-culture"><span id="dot"></span>Work Culture</Link>
                            <Link to="/careers"><span id="dot"></span>Careers</Link>
                            <Link to="/contactsin"><span id="dot"></span>Contact</Link>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer