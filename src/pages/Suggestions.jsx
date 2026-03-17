import { useState, useEffect } from "react";
import AJAX from "../utils/ajax";
import "../style/suggestions.css";
import { Link } from "react-router-dom";

export default function Suggestions() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [mangas, setMangas] = useState([]);

  const totalSlides = mangas.length;

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("suggestion", true);
      setMangas(datas);
      console.log("datas_brutes : ", datas);
    }
    fetchDatas();
  }, []);

  useEffect(() => {
    if (sliderIndex >= mangas.length) {
      setSliderIndex(0);
    }
  }, [mangas, sliderIndex]);

  function toggleImage(indexPayLoad) {
    if (totalSlides === 0) return;

    setSliderIndex((current) => {
      const nextIndex = current + indexPayLoad;
      if (nextIndex >= totalSlides) return 0;
      if (nextIndex < 0) return totalSlides - 1;
      return nextIndex;
    });
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
          {totalSlides === 0 ? "0 / 0" : `${sliderIndex + 1} / ${totalSlides}`}
        </p>
        <div className="suggestions-slider">
          <img
            src={mangas[sliderIndex]?.cover || "/img/img-1.jpg"}
            alt={mangas[sliderIndex]?.titre || "couv manga"}
            className="manga-img"
          />
          <p className="manga-titre">{mangas[sliderIndex]?.titre || ""}</p>
          <p className="manga-auteur">{mangas[sliderIndex]?.auteur || ""}</p>
        </div>
        <div className="navigation-buttons">
          <button
            onClick={() => toggleImage(-1)}
            className="navigation-button prev-button"
            disabled={totalSlides <= 1}
          >
            <img src="/img/svg/chevron-left.svg" alt="suggestion précédente" />
          </button>
          <button
            onClick={() => toggleImage(1)}
            className="navigation-button next-button"
            disabled={totalSlides <= 1}
          >
            <img src="/img/svg/chevron-right.svg" alt="suggestion suivante" />
          </button>
        </div>
      </div>
    </section>
  );
}
