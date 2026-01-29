import { useState } from "react";
import sliderData from "../data/sliderData";
import "../style/suggestions.css";
import { Link } from "react-router-dom";

export default function Suggestions() {
  const [sliderIndex, setSliderIndex] = useState(1);

  function toggleImage(indexPayLoad) {
    let newState;
    if (indexPayLoad + sliderIndex > sliderData.length) {
      newState = 1;
    } else if (indexPayLoad + sliderIndex < 1) {
      newState = sliderData.length;
    } else {
      newState = indexPayLoad + sliderIndex;
    }
    setSliderIndex(newState);
  }

  return (
    <section className="suggestions">
      <div className="entete">
        <Link to="/fil">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Suggestions</h1>
        <Link to="/recherche">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="suggestion-wrapper">
        <p className="index-info">
          {sliderIndex} / {sliderData.length}
        </p>
        <div className="suggestions-slider">
          <img
            src={`/img/img-${sliderIndex}.jpg`}
            alt="couv MHA 42"
            className="manga-img"
          />
          <button
            onClick={() => toggleImage(-1)}
            className="navigation-button prev-button"
          >
            PREV
          </button>
          <button
            onClick={() => toggleImage(1)}
            className="navigation-button next-button"
          >
            NEXT
          </button>
        </div>
        <p className="manga-titre">
          {sliderData.find((obj) => obj.id === sliderIndex).description}
        </p>
      </div>
    </section>
  );
}
