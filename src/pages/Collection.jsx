import { Link } from "react-router-dom";
import "../style/collection.css";
import AJAX from "../utils/ajax";
import { useEffect, useState } from "react";

function Collection(datas) {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("mangas");
      setMangas(datas);
    }
    fetchDatas();
  }, []);

  return (
    <section className="collection">
      <div className="entete">
        <Link to="/">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Collection</h1>
        <Link to="/fil">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="bouton-filtre-wrapper">
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Physique</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Numérique</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Prêts</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Compléter</p>
        </Link>
      </div>
      <div className="collection-details">
        <h1>1492 TOMES</h1>
        <h2>465 Séries</h2>
      </div>
      <div className="collection-wrapper">
        {mangas.map((manga) => (
          <div className="collection-item" key={manga.id}>
            <div className="couv-collection">
              <img src="/img/img-1.jpg" alt="" />
            </div>
            <div className="description-collection">
              <div className="collection-avancee">
                <h3>My Hero Academia</h3>
                <p>41/42 Tomes (en cours)</p>
              </div>
              <div className="icone-chevron">
                <i className="bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collection;
