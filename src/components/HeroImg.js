import "./HeroImgStyles.css";

import React from 'react'

import image1 from "../assets/Back-image.png";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img"
        src={image1} alt="image"/>
    </div>
    <div className="content">
        <p>I'M A WEB-LEARNER</p>
        <h1>React Developer</h1>
        <div>
            <Link to="/project"
            className="btn">Projects</Link>
            <Link to="/contact"
            className="btn">Contact</Link>
        </div>
    </div>
    
  </div>
  
}

export default HeroImg