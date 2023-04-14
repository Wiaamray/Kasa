import React from "react";
import "./ApartementBanner.css";
import { useState } from "react";

export function ApartementBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPictures] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPictures((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPictures(pictures.length - 1);
      return;
    }
    setCurrentPictures(currentPicture - 1);
  };

  const getCarouselDefaultImage = () => {
    if (!pictures || pictures.length === 0) {
      return <img src="banner_about.jpg" alt="" className="show" />;
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
    ));
  };

  return (
    <div className="apartment__banner">
      <div className="image__container">{getCarouselDefaultImage()}</div>

      <div className="chevron-previous" onClick={moveToPrevious}>
        {/*<span className="chevron" onClick={showContent}></span>*/}
        {/*<img src="/assets/chevron-left.svg" alt="" />*/}
        {/*<ArrowLeft />*/}
      </div>

      <span className="slide__counter">
        {" "}
        {currentPicture + 1} / {pictures.length}
      </span>

      <div className=" chevron-next" onClick={moveToNext}>
        <img src="src/assets/chevron-right.svg" alt="Contenu suivant" />
      </div>
    </div>
  );
}

export default ApartementBanner;
