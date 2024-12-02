import React from 'react';
import './Image.css';
import Angular from '../assets/Angular.png';
import Java from '../assets/Java.png'
import ReactImg from '../assets/React.png';
import Andriod from '../assets/Andriod.png';
import IOS from '../assets/IOS.png';

const Image = () => {
    return (
        <div className="main-image">
            <ul>
                <li>
                    <img src={Angular} alt="Angular" />
                    <span><img src={Angular} alt="Angular Hover" /></span>
                </li>
                <li>
                    <img src={Java} alt="Java" />
                    <span><img src={Java} alt="Java Hover" /></span>
                </li>
                <li>
                    <img src={ReactImg} alt="React" />
                    <span><img src={ReactImg} alt="React Hover" /></span>
                </li>
                <li>
                    <img src={Andriod} alt="Android" />
                    <span><img src={Andriod} alt="Android Hover" /></span>
                </li>
                <li>
                    <img src={IOS} alt="iOS" />
                    <span><img src={IOS} alt="iOS Hover" /></span>
                </li>
            </ul>
        </div>
    );
}

export default Image;
