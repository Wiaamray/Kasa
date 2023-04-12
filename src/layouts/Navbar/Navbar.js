
import React from "react";
import {  NavLink  } from "react-router-dom";
import "../Navbar/Navbar.css";


/*Une fonction qui prend en paramètre isActive , donc si active nous donne un activestyle*/
function Navbar() {
  
  let activeStyle= {
    textDecoration: "underline"
  };
    return (
    <nav className="navbar">
      
      <NavLink to= "/">
      <div className="navbar__logo">
          <img src="LOGO.png" alt ="logo" width="210" />
         </div>
         </NavLink>
  
  <NavLink to="/" style={({isActive})=> (isActive ? activeStyle: undefined)}>
  <div>Accueil</div>
  </NavLink>
  
  <NavLink to="/about">
  <div>A propos</div>
  </NavLink> 
    </nav>

  );
}

export default Navbar;
