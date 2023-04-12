
import React, { useEffect, useState } from 'react';
import "./Gallery.css";
import Appartement from "../Appartement/Appartement.js";



function AccommodationGrid() {

  const [apartments, setApartements] = useState([]);

//useEffect avec une array vide == exécute cette fonction au chargement du composant
useEffect(fetchApartements, []);


function fetchApartements() {
fetch ("logements.json")
.then ((res) => res.json())
.then ((res)  => setApartements(res))
.catch (console.error);
}

  return (

  <div className='grid'>
 {/* Afficher les 20 titres et 20 images */}
   {apartments.map((apartment) => (
    <Appartement key={apartment.id} id={apartment.id} title={apartment.title} imageUrl={apartment.cover} />
 ))}

   
  
  </div>

  );
  
}

export default AccommodationGrid;
