

import { AccommodationDescription } from '../../components/AccomodationDescription/AccommodationDescription.js';

import "./Accomodationpage.css";
//import "../components/AccommodationDescription.js";
import ApartementBanner from "../../components/ApartementBanner/ApartementBanner.js";
import ApartementHeader from "../../components/ApartementHeader/ApartementHeader.js";
import {useApartement} from "../../hooks/useApartement.js";

function Accomodationpage() {

const flat = useApartement();

 if(flat == null) return <div> Loading.... </div>;


  return (
    <div className='accomodation__page'>

 <ApartementBanner pictures= {flat.pictures} />
 

<ApartementHeader  flat= {flat} />


<div className='accommodation__description__aria'>
<AccommodationDescription title="Description" content= {flat.description} />
<AccommodationDescription  title="Equipements"  content= {flat.equipments.map ((eq, i) => (
    <li key={i}> {eq}</li>
))}/>

      </div>
      </div>

  );
}

export default Accomodationpage;
