import { Link, useParams } from "react-router-dom";
import "../style/vue.css";
import AJAX from "../utils/ajax.js";
import { useEffect, useState } from "react";

function VueManga() {
  const { slug } = useParams();
  const [manga, setManga] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await AJAX.get(`mangas/${slug}`, true);
      setManga(data);
      console.log(data);
    }
    fetchData();
  }, [slug]);

  if (!manga) return <p>Chargement...</p>;

  return (
    <>
      <div className="entete-desktop">
        <div className="mangas-nav-wrap">
          <p>{manga.titre}</p>
        </div>
      </div>
      <section className="vue-detail">
        <div className="entete">
          <h2>{manga.titre}</h2>
        </div>
        <div className="vue-wrapper mangas">
          <img
            className="vue-image"
            src={manga.tomes[0].image}
            alt="couv de MHA"
          />
          <div className="vue-description">
            <h1 className="vue-title">{manga.titre}</h1>
            <p className="vue-synopsis">{manga.description}</p>
          </div>
        </div>
        <div className="vue-wrapper serie">
          <h1 className="vue-title">La série</h1>

          <div className="serie-wrapper">
            {manga.tomes.map((tome, index) => (
              <Link
                to={`/vuedetail/${manga.mangaId}/${tome.numero}`}
                className="serie-item"
                key={index}
              >
                <div className="serie-item-image">
                  <img
                    src={tome.image}
                    alt={tome.titre}
                    className="serie-image"
                  />
                  {tome.statusCollection === "collection" && (
                    <img
                      src="/img/svg/check-circle-green.svg"
                      alt="Dans ma collection"
                      className="status-icon"
                    />
                  )}
                  {tome.statusFil === "PAL" && (
                    <img
                      src="/img/svg/bookmark-check-red.svg"
                      alt="Dans ma PAL"
                      className="status-icon-pal"
                    />
                  )}
                </div>
                <h1>Tome {tome.numero}</h1>
                <p>{tome.titre}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VueManga;
