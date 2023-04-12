import React from 'react'
import "./Appartement.css";
import { NavLink } from "react-router-dom";

function Appartement(props) {

return (

<NavLink to="/flat"
    state = {{
      apartmentId: props.id
  
      }}
>

<div className='appartement'>
     
    <img  src= {props.imageUrl}  alt= "" />

     <div className='appartement__subtitle'>{props.title}</div>
     </div>
</NavLink>
   
  );
}

export default Appartement;

