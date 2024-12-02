import React from 'react'
import './Content.css'
import IconImg1 from "../assets/Fast growing Process.png";
import IconImg2 from "../assets/Clean Code.png";
import IconImg3 from "../assets/Well Document.png";



const Content = () => {
    return (
        <div class="main-container">
            <div class="line-container-1">
                <span id="line-one"></span>
                <span id="line-two"></span>
                <p>WHY CHOOSE US</p>
            </div>

            <div class="content">
                <h2>We Create Result-Oriented <br />Dynamic Applications</h2>
                <p class="intro-text">
                    We strive to stay on the technology wave by developing the software using modern tech stacks and frameworks.
                </p>

                <div class="features">
                    <div class="feature">
                        <img src={IconImg1} alt="Growing"  id="iconImages"/>
                        <div class="feature-text">
                            <h3>Our Excellence</h3>
                            <p>We follow Industry-standard best practices.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <img src={IconImg2} alt="Clean code" id="iconImages" />
                        <div class="feature-text">
                            <h3>Code</h3>
                            <p>Strong Architecture and Design principles are a part of our coding.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <img src={IconImg3} alt="Well Document" id="iconImages" />
                        <div class="feature-text">
                            <h3>Documentation</h3>
                            <p>Business and Technical documentation are a part of our deliverables.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Content;
