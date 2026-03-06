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
      console.log("verif manga :" + manga);
      setTome(data);
    }
    fetchTome();
  }, [manga, numero]);

  async function handleAdd() {
    if (!tome) return;

    const mangaId = tome.manga.idJson;
    const tomeNumero = tome.numero;

    const result = await AJAX.post(
      "collection/add",
      { mangaId, tomeNumero },
      true,
    );
    console.log("RAW RESULT : ", result);
    alert(result.message);
  }

  if (!tome) return <p>Chargement ...</p>;

  return (
    <>
      <div className="entete-desktop">
        <div className="tomes-nav-wrap">
          <Link
            to={`/vuedetail/${manga.toLowerCase()}/${num - 1 > 0 ? num - 1 : num}`}
          >
            {num > 1 ? num - 1 : null}
          </Link>
          <p>{num}</p>
          <Link
            to={`/vuedetail/${manga.toLowerCase()}/${num + 1 <= tome.manga.nbTomes ? num + 1 : num}`}
          >
            {num + 1 < tome.manga.nbTomes ? num + 1 : null}
          </Link>
        </div>
      </div>
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
            <p className="tome-nav">{num > 1 ? num - 1 : null}</p>
          </Link>
          <div className="entete-title">
            <h1 className="entete-titre">{tome.manga.titre}</h1>
            <h2>Tome {tome.numero}</h2>
          </div>
          <Link
            className="nav-wrapper"
            to={`/vuedetail/${manga.toLowerCase()}/${num + 1 <= tome.manga.nbTomes ? num + 1 : num}`}
          >
            <img
              className="chevron-nav"
              src="/img/svg/chevron-right.svg"
              alt="tome précédent"
            />
            <p className="tome-nav">
              {num < tome.manga.nbTomes ? num + 1 : null}
            </p>
          </Link>
        </div>

        <div className="vue-wrapper">
          <div className="tome-wrapper">
            <div className="vue-image">
              <img src={tome.image} alt="" />
            </div>
            <div className="vue-info-tome">
              <div className="vue-title">
                <h1>{tome.manga.titre}</h1>
                <p>Tome {tome.numero}</p>
              </div>
              <div className="vue-cta">
                <button className="cta-ajout" onClick={handleAdd}>
                  <img src="/img/svg/plus-white.svg" alt="" />
                  <p>AJOUTER</p>
                </button>
                <button className="cta">
                  <img src="/img/svg/heart-white.svg" alt="coeur" />
                  <p className="cta-desktop">WISHLIST</p>
                </button>
                <button className="cta">
                  <img
                    src="/img/svg/book-friend-white.svg"
                    alt="livre ouvert prêté"
                  />
                  <p className="cta-desktop">PRÊT</p>
                </button>
              </div>
            </div>
          </div>
          <div className="vue-resume">
            <div className="vue-note">
              <p>Avis</p>
              <p>☆ ★ ★ ★ ★</p>
            </div>
            <div className="vue-synopsis">
              <p>{tome.synopsis}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VueDetail;
