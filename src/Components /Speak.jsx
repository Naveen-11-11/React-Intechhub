import React from 'react';
import SpeakImg from '../assets/Speakimg.svg'
import './Speak.css'
const Speakcontent = () => {
  return (
    <div className='speak-container'>
         <div className="left-content-1">
                <div className="line-container-2">
                    <span id="line-one1"></span>
                    <span id="line-two2"></span>
                    <p>LET'S TALK</p>
                </div><br/>
                <h1>Speak With Our Experts.</h1><br/>
                <p style={{fontSize:'1.5rem'}}>
                Our experts are ready to hear from you to help you to transform your ideas into reality.
                </p>
                <div className='contacts'>
                    <h3>Email</h3>
                    <p>contact@intechhub.com</p>
                    <h3>Call Us</h3>
                    <p>(+91) 9791565317</p>
                    <h3>Office address</h3>
                    <p>Pammal, Chennai, India<br/><br/>
                    Salem, Tamil Nadu, India</p>
                </div>
            </div>

            <div className="right-content-1">

                <img src={SpeakImg} alt="Speak" width="500px" height="600px"/>
            </div>

    </div>
  )
}

export default Speakcontent;