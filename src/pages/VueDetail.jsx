import { Link, useParams } from "react-router-dom";
import "../style/vue.css";
import { useState, useEffect } from "react";
import AJAX from "../utils/ajax.js";

function VueDetail() {
  const { id } = useParams();
  const [tome, setTome] = useState(null);

  useEffect(() => {
    async function fetchTome() {
      const data = await AJAX.get(`catalogue/${id}`);
      setTome(data);
    }
    fetchTome();
  }, [id]);

  if (!tome) return <p>Chargement ...</p>;

  return (
    <section className="vue-detail">
      <div className="entete">
        <Link to="#">
          <i className="bi bi-chevron-left">{tome.numero}</i>
        </Link>
        <div className="entete-title">
          <h1 className="entete-titre">{tome.manga.titre}</h1>
          <h2>Tome {tome.numero}</h2>
        </div>
        <Link to="#">
          <i className="bi bi-chevron-right"></i>
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
