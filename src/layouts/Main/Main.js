import React from 'react'
//import ReactDOM from "react-dom/client";
import "./Main.css";
//import App from '../App.jsx';


//Afficher children de composant main
/*La props  children   est renseignée en imbriquant
 les enfants dans le parent : <Parent><Enfant /></Parent>.
children  est utile lorsqu'un composant ne connaît pas ses enfants à l'avance.*/

function Main({children}) {
  return <div className='main'>{children}</div>;
}

export default Main;
