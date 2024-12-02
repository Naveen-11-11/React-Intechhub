import React from 'react'
import './WorkCulture.css';
import { Link } from 'react-router-dom';
import enterlogo from '../assets/COLOR-LOGO.png';
import RouteNav from '../Components /RouteNav';
import RemoteLeftImg from "../assets/RemoteLeftImg.png";
import WorkBalanceImg from "../assets/WorkBalanceImg.png";
import FlexibleLeftImg from "../assets/FlexibleLeftImg.png";
import TeamRightImg from "../assets/TeamRightImg.png"
const WorkCulture = () => {
    return (
        <div className='culture-container'>
            <div className="culture-header">

                <div className="culture-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="culture-contact">
                    <ul>
                        <div className="culture-address">
                            <div className="icon-culture">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="culture-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="culture-email">
                            <div className="icon-culture">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="culture-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="enter-ph">
                            <div className="icon-culture">
                                <span className='i-culture'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="culture-content">
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




            <div className="culture-header-1">
                <div class="culture-hero-section-1" >
                    <div class="culture-overlay-1">
                        <div class="culture-content-1">
                            <h1>Work Culture</h1>
                            <p>Home / Work Culture</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className="culture-lists-container">

                <div className="culture-lists">

                    <div className="culture-item">
                        <h1 className='h1'>Our Culture</h1>
                        <p>Our work culture is the foremost inspiring factor for our employees.
                            At all times we believe that our employees are the pillars of our
                            organization and they strive hard and dedicate themselves to the company's
                            mission.</p>
                    </div>

                    <div className="culture-item">
                        <div className="cul-content">
                            <div className="cul-image-content">
                                <img src={RemoteLeftImg} alt="RemoteWorking" width="150px" height="250px" />
                            </div>
                            <div className='contents-culture'>
                                <h1 className='h1'> Remote Working</h1>

                                <>
                                    <p>Remote working enables our employees to be more engrossed and productive for
                                        quality results. Concurrently, we have all the data security measures in place
                                        to safeguard the client data.</p>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="culture-item">
                        <div className="cul-content">
                            <div className='contents-culture-1'>
                                <h1 className='h1'>Work-Life Balance</h1>

                                <>
                                    <p>The remote work setup embrace diversity by hiring people from different
                                        cultural background and helps our employees for a well-balanced life both
                                        professionally and personally.</p>
                                </>
                            </div>
                            <div className="cul-image-content-1">
                                <img src={WorkBalanceImg} alt="RemoteWorking" width="250px" height="250px" />
                            </div>

                        </div>
                    </div>
                    <div className="culture-item">
                        <div className="cul-content">
                            <div className="cul-image-content">
                                <img src={FlexibleLeftImg} alt="RemoteWorking" width="250px" height="200px" />
                            </div>
                            <div className='contents-culture'>
                                <h1 className='h1'>Flexible Timings</h1>

                                <>
                                    <p>There are no time constraints for our employees and they can work
                                        accordingly based on their convenience except for Client / Team meetings.</p>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="culture-item">
                        <div className="cul-content">
                            <div className='contents-culture-1'>
                                <h1 className='h1'>Team Motivation</h1>

                                <>
                                    <p>We have an excellent team who inspires and motivates among themselves by growing together
                                        and creating a healthy work environment.</p>
                                </>
                            </div>
                            <div className="cul-image-content-1">
                                <img src={TeamRightImg} alt="RemoteWorking" width="250px" height="150px" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <div class="culture-quote-container">
                <h1 class="culture-quote">“We believe that employee happiness is key to our success”</h1>
                <p class="culture-author">- Ram, GM</p>
            </div>






        </div>
    )
}

export default WorkCulture;



