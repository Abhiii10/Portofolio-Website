import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaVoicemail } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{color: "#fff",
                     marginRight:"2rem"}} />
                     <div>
                        <p> Kathmandu-32</p>
                        <p> Nepal</p>
                     </div>
                </div>
                <div className="phone">
                 <h4><FaPhone size={20} 
                    style={{color: "#fff",
                     marginRight:"2rem"}} />
                     9864026723</h4>
                <div className="Email">
                  <h4><FaMailBulk size={20} 
                    style={{color: "#fff",
                     marginRight:"2rem"}} />
                     paudelabhi2057@gmail.com</h4>
                </div>     
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Abhishek Paudel. Owner of Ipac_tech. I enjoy discussing new 
                    projects and design challanges.</p>
                    <div className="social">
                        <FaFacebook
                           size={30}
                           style={{color:"#fff", marginRight:
                           "1rem"}}
                        />
                        <FaTwitter
                           size={30}
                           style={{color:"#fff", marginRight:
                           "1rem"}}
                        />
                        <FaLinkedin
                           size={30}
                           style={{color:"#fff", marginRight:
                           "1rem"}}
                        />
                    </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer