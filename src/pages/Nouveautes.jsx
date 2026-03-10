import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/nouveautes.css";
import AJAX from "../utils/ajax";

function Nouveautes(datas) {
  // Récupérer les données
  const [tomes, setTomes] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      // const datas = await AJAX.get("tomes"); >> Pour utiliser mysql
      const datas = await AJAX.get("catalogue");
      setTomes(datas);
    }
    fetchDatas();
  }, []);

  return (
    <section className="nouveaute">
      <div className="entete">
        <Link to="/recherche">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Nouveautés</h1>
        <Link to="/collection">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="nouveaute-container">
        <div className="nouveaute-wrapper">
          {tomes.map((tome, index) => (
            <Link
              to={`/vuedetail/${tome.manga.slug}/${tome.numero}`}
              className="nouveaute-item"
              key={index}
            >
              <div className="card">
                <img src={tome.image} alt={tome.sousTitre} />
                <div className="card-contenu">
                  <p className="titre">{tome.manga.titre}</p>
                  <p className="tome">Tome {tome.numero}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Nouveautes;
