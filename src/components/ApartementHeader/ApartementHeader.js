
import React from 'react'
import "./ApartementHeader.css";


function ApartementHeader(props) {

  const flat = props.flat;
  const name = flat.host.name;
  const [firstName, lastName] = name.split(" ");
  return (
    <div>
<div className='accomodation__header'>
<div className="accomodation__title">
    <h1>{flat.title}</h1>
    <h2>{flat.location}</h2>
<div className='accomodation__tags'>
    {/* <span>Cosy</span>
    <span>Canal</span>
    <span>Paris 10</span> */}

    {flat.tags.map((tag) => 
    (<span key = {tag}>{tag}</span>))}

</div>
</div>

<div className='accomodation__owner'>
    <div className='accomodation__owner_details'>
<h3>
  <span>{firstName}</span>
  <span>{lastName}</span>
</h3>

<div className='accomondation__owner__badge'>
  <img src={flat.host.picture} alt="" />
</div>


</div>
<div className='accomodation__stars'>

{[1,2 ,3, 4, 5, ].map((num) => (
  <span  key={num} className={props.flat.rating >= num ? "star__full"  : "star__empty"}></span> 
))}

({props.flat.rating})

{/* <span className='star__full'></span>
<span className='star__full'></span>
<span className='star__full'></span> */}
{/* <span className='star__empty'></span>
<span className='star__empty'></span> */}
</div>
</div>

</div>
    </div>
  )
}

export default ApartementHeader;
