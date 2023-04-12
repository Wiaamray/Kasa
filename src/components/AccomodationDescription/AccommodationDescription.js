import React, {useState} from 'react'
import "./AccommodationDescription.css"

export function AccommodationDescription(props) {

const [isContentVisible, setIsContentVisible] = useState(false);

const showContent = () =>{
  setIsContentVisible(!isContentVisible);
};



  return (

      <div className="Accomodation__description">
    <p className='description__header'>
        <span>{props.title}</span>

        <span className={'chevron '+ (isContentVisible ? "chevron-up" : "chevron-down") }
              onClick={showContent}>
        </span>
    </p>


 {isContentVisible && <p className=" description__content">{props.content}</p>}
 
</div>


  );
}

export default AccommodationDescription;
