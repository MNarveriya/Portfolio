import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

// import { IconContext } from "react-icons";

// ROUTING

import { NavLink } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SlidebarData";

// STYLES
import "./Navbar.css";

import icon from "../asset/icon.png"

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [colorchange, setColorchange] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const activenavbar = ({isActive}) =>{
    return{

      fontWeight : isActive ? "bold" : "normal",
      
    }
  }

  const changenavbarcolor = () =>{
    if (window.scrollY >= 10){
      setColorchange(true);
    }else{
      setColorchange(false);
    }
  }

  window.addEventListener("scroll",changenavbarcolor);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#FFF" }}> */}
        {/* All the icons now are white */}
        <div className={colorchange ? "navbarcolorChange" : "navbar1"}>
          <NavLink to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar}/>
          </NavLink>
           <img src={icon} className="logo1" alt="image"/>
         
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              {/* <p style={{ color: "#fff" }} className="logo">
                logo
              </p> */}
              <img src={icon} className="logo" alt="image"/>
              <NavLink to="#" className="menu-cross">
                <AiIcons.AiOutlineClose className="crossicon" />
              </NavLink>
            </li>
             {console.log("open navbar")}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink to={item.path} style={activenavbar}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      {/* </IconContext.Provider> */}
    </>
  );
}
