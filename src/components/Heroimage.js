import  "./Heroimagestyle.css";
import React from 'react'
import bg from "../assests/intro.jpg";
import { Link } from "react-router-dom";
const Heroimage = (props) => {
  return (
    <div className="hero">
        <div className="mask">
      <img className="into-img" 
        src= {bg} alt="image"/>
      
    </div>
    <div className="content">
        <p>HI, I'M FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/" className="btn">Projects</Link>
            <Link to="/" className="btn btn-light">contact</Link>
        </div>
    </div>
    </div>
  );
}

export default Heroimage
