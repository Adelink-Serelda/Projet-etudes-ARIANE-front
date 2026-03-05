import { Link, useParams } from "react-router-dom";
import "../style/vue.css";
import { useState, useEffect } from "react";
import AJAX from "../utils/ajax.js";

function VueDetail() {
  const { manga, numero } = useParams();
  const num = Number(numero);
  const [tome, setTome] = useState(null);

  useEffect(() => {
    async function fetchTome() {
      const data = await AJAX.get(`catalogue/${manga}/${numero}`);
      setTome(data);
    }
    fetchTome();
  }, [manga, numero]);

  if (!tome) return <p>Chargement ...</p>;

  return (
    <section className="vue-detail">
      <div className="entete">
        <Link
          className="nav-wrapper"
          to={`/vuedetail/${manga.toLowerCase()}/${num - 1 > 0 ? num - 1 : num}`}
        >
          <img
            className="chevron-nav"
            src="/img/svg/chevron-left.svg"
            alt="tome précédent"
          />
          <p className="tome-nav">{tome.numero > 1 ? tome.numero - 1 : null}</p>
        </Link>
        <div className="entete-title">
          <h1 className="entete-titre">{tome.manga.titre}</h1>
          <h2>Tome {tome.numero}</h2>
        </div>
        <Link
          className="nav-wrapper"
          to={`/vuedetail/${manga.toLowerCase()}/${num + 1 < tome.manga.nbTomes ? num + 1 : num}`}
        >
          <img
            className="chevron-nav"
            src="/img/svg/chevron-right.svg"
            alt="tome précédent"
          />
          <p className="tome-nav">
            {tome.numero < tome.manga.nbTomes ? tome.numero + 1 : null}
          </p>
        </Link>
      </div>
      <div className="vue-wrapper">
        <div className="vue-image">
          <img src={tome.image} alt="" />
        </div>
        <div className="vue-title">
          <h1>{tome.manga.titre}</h1>
          <p>Tome {tome.numero}</p>
        </div>
        <div className="vue-cta">
          <Link className="cta">
            <span>+</span>AJOUTER
          </Link>
          <Link className="cta">
            <i className="bi bi-book"></i>
          </Link>
          <Link className="cta">
            <i className="bi bi-book"></i>
          </Link>
        </div>
        <div className="vue-note">Avis</div>
        <div className="vue-resume">
          <p>{tome.synopsis}</p>
        </div>
      </div>
    </section>
  );
}

export default VueDetail;
