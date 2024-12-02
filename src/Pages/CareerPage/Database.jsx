import React from 'react';
import './Database.css';
import { Link } from 'react-router-dom';
import enterlogo from '../../assets/COLOR-LOGO.png';
import RouteNav from '../../Components /RouteNav';
import DatabaseLeftImg from'../../assets/DatabaseLeftImg.svg';
import Drop from '../../Components /Drop';
import DropContents from './DropContents';


const Database = () => {
    return (
        <div className='database-container'>
            <div className="database-header">

                <div className="database-logo">
                    <Link to='/'><img src={enterlogo} alt="enter-logo" id="colorlogo" /></Link>
                </div>

                <div className="database-contact">
                    <ul>
                        <div className="database-address">
                            <div className="icon-database">
                                <i class="fa-solid fa-xl fa-location-dot" style={{ color: "#74C0FC" }} />
                            </div>
                            <div className="database-content">
                                <p><strong>Address</strong></p>
                                <li> Pammal, Chennai, India<br /> </li>
                            </div>
                        </div>

                        <div className="database-email">
                            <div className="icon-database">
                                <i class="fa-solid  fa-xl fa-envelope" style={{ color: "#74C0FC", }} />
                            </div>
                            <div className="database-content">
                                <p><strong>Email</strong></p>
                                <li>  contact@intechhub.com</li>
                            </div>
                        </div>

                        <div className="database-ph">
                            <div className="icon-database">
                                <span className='i-database'><i class="fa-solid  fa-xl fa-phone-volume" style={{ color: "#74C0FC" }} /></span>
                            </div>
                            <div className="database-content">
                                <p><strong>Phone</strong></p>
                                <li> (+91) 9791565317</li>
                            </div>
                        </div>

                    </ul>
                </div>
            </div>




            <div className="database-nav-container">
                <RouteNav />
            </div>




            <div className="database-header-1">
                <div class="database-hero-section-1" >
                    <div class="database-overlay-1">
                        <div class="database-content-1">
                            <h1>Database Careers</h1>
                            <p>Home / Careers / Database Engineers</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="database-contain">

                <div className="database-img">
                    <img src={DatabaseLeftImg} alt="databaseapp" />
                </div>

                <div className="database-contents">
                    <p><i class="fa-regular fa-calendar" style={{ color: "#c8c9cb", }} />Updated Date: <b>August 26, 2021</b></p>
                    <p><i class="fa-regular fa-user" style={{ color: "#c8c9cb", }} />Shared By: <b>HR Manager</b></p>
                    <p><i class="fa-solid fa-book" style={{ color: "#c8c9cb", }} /><a href="#">Category: <b>Full Stack</b></a></p>
                </div>
            </div>




        
            <div className="database-development">
                <h1>Datawarehouse Careers</h1>
                <div className="database-development-contents">
                <div className='drop'>
                <Drop title="Datawarehouse Architect" content={<DropContents/>}/><hr/>
                <Drop title="Junior SSIS Developer" content={<DropContents/>}/><hr/>
                
                </div>
                   
                </div>

            </div>






        </div>
    )
}

export default Database