import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/nouveautes.css";
import AJAX from "../utils/ajax";

function Nouveautes(datas) {
  // Récupérer les données
  const [tomes, setTomes] = useState([]);
  console.log(tomes);

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("tomes");
      setTomes(datas.slice(0, 20));
    }
    fetchDatas();
  }, []);

  //composant
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
      <div className="nouveaute-wrapper">
        {tomes.map((tome) => (
          <Link
            to={`/vuedetail/${tome.id}`}
            className="nouveaute-item"
            key={tome.id}
          >
            <div className="card">
              <img src={tome.image} alt={tome.titre} />
              <div className="card-contenu">
                <p className="titre">{tome.manga.titre}</p>
                <p className="tome">Tome {tome.numero}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Nouveautes;
