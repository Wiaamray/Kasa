//Importation des composants
//Première componsent APP
import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Banner from "./components/Banner.js";
import AccommodationGrid from "./components/AccommodationGrid.js";
import Footer from "./components/Footer.js";

import "./App.css";


function App() {
  return (

<div>

<Navbar />

  <Main>
  <Banner />
  <AccommodationGrid />
  </Main>
  
  <Footer />
 
  
</div>

  );
}

export default App;
