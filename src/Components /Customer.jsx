import React from 'react';
import './Customer.css';
import testiimg from '../assets/CustomerContact.svg'
import quotes from '../assets/quote2.png'
const Customer = () => {
  return (
    <div className='customer-container'>
        <div className='left-img-content'>
            <img src={testiimg} alt="testiimg" width="500" height="500"/>
        </div>
        <div className="right-testi-content">
        <div class="line-container-3">
                <span id="line-one"></span>
                <span id="line-two"></span>
                <p>TESTIMONIALS</p>
            </div>
        <div className="say">
            <h1>What Customer Saying</h1><br/>
            <p>our customer’s trust and their feedback in our work.</p>
        </div>
        <div className="img-para">
            <img src={quotes} alt="quote"  />
            <p>we have great Experience in working with IntechHub.Thanks<br/> 
            for helping our company to stay relevant in this digital era<br/> 
            with It Solutions and support provided by your team</p><br/><br/>
            <h3>Kumaravel S</h3>
            <>MD,The Vogue</>
        </div>
        </div>
    </div>
  )
}

export default Customer