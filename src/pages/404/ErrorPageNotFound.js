
import React from 'react'
import "./ErrorPageNotFound.css";
import Navbar from '../../layouts/Navbar/Navbar.js';
import Main from '../../layouts/Main/Main.js';
import { NavLink } from "react-router-dom";

function ErrorPageNotFound() {
  return (

    <>
      <Navbar />
<div className='page-404'>
     <h1 className="titre-404">404</h1>

     <h2 className="description-404" > Oups! La page que vous demandez n'existe pas.</h2>

     <NavLink to="/" className="linkhome" >Retourner sur la page d’accueil</NavLink>

      <Main> </Main>
      </div>
    </>
 
  );
}

export default ErrorPageNotFound ;
