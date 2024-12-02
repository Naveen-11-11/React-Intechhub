import React from "react";
import "./HeroSection.css";
import BackgroundImage from "../assets/Home-banner.svg"; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h2>Innovation & Technology Solutions</h2>
        <p>
          We offer an <span>Innovative & Top-Notch Technology Solutions</span> to
          assist, support and facilitate your business requirements & growth.
        </p>
        <div className="button-container">
          <button className="get-started-button">Get Started</button>
          <div className="play-icon-container">
            <span className="play-icon"> <i class="fa fa-play-circle"></i> </span>
          </div>
          
        </div>
      </div>
      <div className="hero-image">
        <img src={BackgroundImage} alt="Innovation and Technology" />
      </div>
    </div>
  );
};

export default HeroSection;
