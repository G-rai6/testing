import"./Footer.css"
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
        <div className="location">
          <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
          <div>

          <p>123 Housing society</p>
          <p>INdia</p>
           </div>
          </div>
          <div className="Phone">
          <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
          <div>
            <h4>1-2223-2223</h4>
          </div>
          </div>
          <div className="mail">
          <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
          <div>
            <h4>raigarvita@500</h4>
          </div>
          </div>
        <div className="right">
          <h4>ABout the company</h4>
          <p>this is Garvita Rai. Currently I am pursuing my bech in cse from lovely Professional University</p>
          <div className="social">
            <FaFacebook size={20} style={{color:"white",marginRight:"2rem"}}/>
            <FaTwitter size={20} style={{color:"white",marginRight:"2rem"}}/>
            <FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/>
          </div>
</div>
        </div>
      </div>
    </div>
  );
}

export default Footer
