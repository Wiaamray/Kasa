import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

/*Une fonction qui prend en paramètre isActive , donc si active nous donne un activestyle*/
function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  /*L'attribut className permet de préciser une classe à un élément React pour lui indiquer du CSS.*/

/*Après avoir importé NavLink, nous devons mettre à jour notre barre de navigation. Au lieu d'utiliser a et href, React Router utilise NavLink et to pour pouvoir basculer entre les pages sans recharger la page.*/
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="LOGO.png" alt="logo" width="210" />
        </div>
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div>Accueil</div>
      </NavLink>

      <NavLink to="/about">
        <div>A propos</div>
      </NavLink>
    </nav>
  );
}

export default Navbar;
