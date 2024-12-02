import React from 'react';
import './Services.css';
import Icon1 from '../assets/Grid1.png';
import Icon2 from '../assets/Grid2.png'
import Icon3 from '../assets/Grid3.png'
import Icon4 from '../assets/Grid4.png'
import Icon5 from '../assets/Grid5.png'
import Icon6 from '../assets/Grid6.png'
import Icon7 from '../assets/Grid7.png'
import Icon8 from '../assets/Grid8.png'

function Services() {
  return (
    <div className="body">
      <div className='main'>
        <div className="sub">
      <h4 >Services</h4><br/><br/>
      <h2>What Solutions We Provide to<br/>
       Our Valued Customers</h2>
      </div>
      <div className='btn'>
      <button className="get-started-button" id="button">Get Started</button>
      </div>
      </div>
      <div className='grid'>
      <div className="service-grid">
        <div className="service-card" id='grid1'>
          <div className="service-icon"><img src={Icon1} alt=''/></div>
          <h3 className="service-title">Enterprise Software</h3>
        </div>
        <div className="service-card" id='grid2'>
          <div className="service-icon"><img src={Icon2} alt=''/></div>
          <h3 className="service-title">Web Application</h3>
        </div>
        <div className="service-card" id='grid3'>
          <div className="service-icon"><img src={Icon3} alt=''/></div>
          <h3 className="service-title">Desktop Application</h3>
        </div>
        <div className="service-card" id='grid4'>
          <div className="service-icon"><img src={Icon4} alt=''/></div>
          <h3 className="service-title">Mobile Application</h3>
        </div>
        <div className="service-card" id='grid5'>
          <div className="service-icon"><img src={Icon5} alt=''/></div>
          <h3 className="service-title">Artificial Intelligence</h3>
        </div>
        <div className="service-card" id='grid6'>
          <div className="service-icon"><img src={Icon6} alt=''/></div>
          <h3 className="service-title">Machine Learning</h3>
        </div>
        <div className="service-card" id='grid7'>
          <div className="service-icon"><img src={Icon7} alt=''/></div>
          <h3 className="service-title">Quality Assurance</h3>
        </div>
        <div className="service-card" id='grid8'>
          <div className="service-icon"><img src={Icon8} alt=''/></div>
          <h3 className="service-title">Business Process<br/> Outsourcing</h3>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Services;
