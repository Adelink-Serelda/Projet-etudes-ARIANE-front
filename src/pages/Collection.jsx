import { Link } from "react-router-dom";
import "../style/collection.css";
import AJAX from "../utils/ajax";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Collection() {
  const [mangas, setMangas] = useState([]);
  console.log(mangas);
  const [totalTomes, setTotalTomes] = useState();
  const [totalSeries, setTotalSeries] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("collection", true);
      setMangas(datas.userCollection);
      setTotalTomes(datas.totalTomes);
      setTotalSeries(datas.totalSeries);
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
        <h1>{totalTomes} TOMES</h1>
        <h2>{totalSeries} Séries</h2>
      </div>
      <div className="collection-wrapper">
        {mangas.map((m) => (
          <div
            className="collection-item"
            key={m.mangaId}
            onClick={() => navigate(`/${m.slug}`)}
          >
            <div className="couv-collection">
              <img src={m.tomes[m.tomes.length - 1]?.image} alt={m.titre} />
            </div>
            <div className="description-collection">
              <div className="collection-avancee">
                <h3>{m.titre}</h3>
                <p>
                  {m.tomes.length}/{m.nbTomesTotal} Tomes{" "}
                  {m.termine ? "" : "(en cours)"}
                </p>
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
