import { Link, useSearchParams } from "react-router-dom";
import "../style/fil.css";
import AJAX from "../utils/ajax";
import { useEffect, useState } from "react";

function Fil(datas) {
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("mangas");
      setMangas(datas);
    }
    fetchDatas();
  }, []);

  return (
    <section className="fil">
      <div className="entete">
        <Link to="/collection">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Fil d'Ariane</h1>
        <Link to="/suggestions">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="bouton-filtre-wrapper">
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>PAL</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>En cours</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Lu</p>
        </Link>
        <Link className="bouton-filtre">
          <i className="bi bi-book"></i>
          <p>Wishlist</p>
        </Link>
      </div>
      <div className="collection-details">
        <h1>42 Tomes à lire</h1>
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
                <p>2/42 Tomes (en cours)</p>
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

export default Fil;
