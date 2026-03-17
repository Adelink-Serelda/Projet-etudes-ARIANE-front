import { Link } from "react-router-dom";
import "../style/fil.css";
import AJAX from "../utils/ajax";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Fil() {
  const [mangas, setMangas] = useState([]);
  const [totalTomes, setTotalTomes] = useState();
  const [totalSeries, setTotalSeries] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDatas() {
      const datas = await AJAX.get("fil", true);
      console.log(datas);
      setMangas(datas.userPal);
      setTotalTomes(datas.totalTomes);
      setTotalSeries(datas.totalSeries);
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
        <h1>{totalTomes} Tomes à lire</h1>
        <h1>{totalSeries} Series </h1>
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
                  {m.tomes.length}/{m.nbTomesTotal} Tomes
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

export default Fil;
