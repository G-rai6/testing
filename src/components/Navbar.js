import "./Navbarstyle.css";
import React ,{useState} from 'react';
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
 const[color,setColor] = useState(false);
 const changeColor=() => {
if(window.scrollY >=100)
{
  setColor(true);
}else{
  setColor(false);
}  
 };
 window.addEventListener("scroll",changeColor);
    return (
    <div className={color?"header header-bg":"header"}>
      <h1>Portfolio</h1>
      <ul className={click ?"nav-menu active":"nav-menu"}>
        <li>
            <Link to="/">HOME</Link>
        </li>
        
        <li>
            <Link to="/">PROJECT</Link>
        </li>
        <li>
            <Link to="/">ABOUT</Link>
        </li>
        <li>
            <Link to="/">CONTACT</Link>
        </li>
      </ul>
      <div className="hamburger" onClick ={handleClick}>
        {click ? ( <FaTimes size={20} style={{color:"white"}}/>):( <FaBars size={20} style={{color:"white"}}/>)}
    </div>
    </div>
  )
}

export default Navbar
