import { Link, useParams } from "react-router-dom";
import "../style/vue.css";
import { useState, useEffect } from "react";
import AJAX from "../utils/ajax.js";

function VueDetail() {
  const { slug, numero } = useParams();
  const manga = slug;
  const num = Number(numero);
  const [tome, setTome] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const data = await AJAX.get(`catalogue/${manga}/${numero}`);
      setTome(data);

      const mangaId = data.manga.idJson;
      const tomeNumero = data.numero;
      const check = await AJAX.get(
        `collection/check?mangaId=${mangaId}&tomeNumero=${tomeNumero}`,
        true,
      );
      setAdded(check.exists);
    }
    fetchData();
  }, [manga, numero]);

  async function handleToggle() {
    if (!tome) return;

    const mangaId = tome.manga.idJson;
    const tomeNumero = tome.numero;

    if (!added) {
      await AJAX.post("collection/add", { mangaId, tomeNumero }, true);
      setAdded(true);
    } else {
      await AJAX.post("collection/delete", { mangaId, tomeNumero }, true);
      setAdded(false);
    }
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
            {num < tome.manga.nbTomes ? num + 1 : null}
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
                <button
                  className={`cta-ajout ${added ? "added" : ""}`}
                  onClick={handleToggle}
                >
                  <img
                    src={
                      added
                        ? "/img/svg/check-white.svg"
                        : "/img/svg/plus-white.svg"
                    }
                    alt="plus pour ajouter check si ajouté"
                  />
                  <p>{added ? "COLLEC" : "AJOUTER"}</p>
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
