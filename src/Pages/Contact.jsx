import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import RouteNav from '../Components /RouteNav';

const Contact = () => {
    return (
        <div className='contactsin-container'>
            <div className="contactsin-header">

                <div className="contactsin-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="contactsin-contact">
                    <ul>
                        <div className="contactsin-address">
                            <div className="icon-contactsin">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="contactsin-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="contactsin-email">
                            <div className="icon-contactsin">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="contactsin-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-contactsin">
                                <span className='i-contactsin'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="contactsin-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>




            <div className="contactsin-nav-container">
                <RouteNav />
            </div>




            <div className="contactsin-header-1">
                <div class="contactsin-hero-section-1" >
                    <div class="contactsin-overlay-1">
                        <div class="contactsin-content-1">
                            <h1>Contact</h1>
                            <p>Home / Contact</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="form-container">

                <div className="experts-talk">
                    <div className="experts-content">
                        <p>Let's Talk</p>
                        <h1>Speak With Our Experts.</h1>
                    </div>
                    <div className="experts-icon-container">
                        <div className="experts-items">
                            <div className="experts-icon">
                                <i class="fa-solid fa-house-chimney" />
                            </div>
                            <div className="experts-icon-content">
                                <p>Email:</p>
                                <p>contact@intechhub.com</p>
                            </div>
                        </div>
                        <div className="experts-items">
                            <div className="experts-icon">
                                <i class="fa-solid fa-phone" />
                            </div>
                            <div className="experts-icon-content">
                                <p>Phone:</p>
                                <p>(+91) 9791565317</p>
                            </div>
                        </div>
                        <div className="experts-items">
                            <div className="experts-icon">
                                <i class=" fa-solid fa-location-dot" />
                            </div>
                            <div className="experts-icon-content">
                                <p>Address:</p>
                                <p>Pammal, Chennai, India <br /> Salem, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="form">
                    <form>
                        <p>GET IN TOUCH</p>
                        <h1>Fill The Form Below</h1>
                        <div class="form-row">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="E-Mail" />
                        </div>
                        <div class="form-row">
                            <input type="text" placeholder="Phone Number" />
                            <input type="url" placeholder="Your Website" />
                        </div>
                        <textarea placeholder="Your message Here"></textarea>
                        <button type="submit" id="sbtn">Submit</button>
                    </form>
                </div>











            </div>

        </div>
    )
}

export default Contact