import React from 'react';
import './Card.css';
import Icon1 from '../assets/1.png';
import Icon2 from '../assets/2.png';
import Icon3 from '../assets/3.png';
import Icon4 from '../assets/4.png';

function Card() {
    return (
        <div className="container">
            <div className="left-content">
                <div className="line-container">
                    <span id="line-one"></span>
                    <span id="line-two"></span>
                    <p>About Us</p>
                </div><br/><br/>
                <h2>Serving Clients with Contemporary Technology to achieve prospective</h2>
                <p>
                    We are a rapidly growing technology company offering high-quality software products
                    with innovative design and development. We bring in innovation and deliver
                    state-of-the-art technology solutions to several industries and stakeholders worldwide.
                </p>
            </div>
            <div className="right-content">
                <div className="row">
                    <div className="card high-quality">
                        <img src={Icon1} alt="icon1" className="card-icon" />
                        <h3>High-Quality Code</h3>
                        <p>We use conventional & best in class industry standards to ensure high-quality deliverables.</p>
                    </div>
                    <div className="card agile">
                        <img src={Icon2} alt="icon2" className="card-icon" />
                        <h3>Agile Approach</h3>
                        <p>Our team is flexible and open to frequent changes to address customer needs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="card full-stack">
                        <img src={Icon3} alt="icon3" className="card-icon" />
                        <h3>Full-Stack Teams</h3>
                        <p>Our highly skilled workforce is key for delivering the best results in every phase of the software development lifecycle.</p>
                    </div>
                    <div className="card quality-assured">
                        <img src={Icon4} alt="icon4" className="card-icon" />
                        <h3>Quality Assured</h3>
                        <p>Each module and feature will be meticulously tested and certified.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
