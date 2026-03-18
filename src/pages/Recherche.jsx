import "../style/recherche.css";
import { useState, useEffect } from "react";
import AJAX from "../utils/ajax.js";
import { Link } from "react-router-dom";

function Recherche() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }
    const delay = setTimeout(async () => {
      const datas = await AJAX.get(`recherche?q=${query}`, true);
      setResults(datas);
      console.log(datas);
    }, 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="page-recherche">
      <div className="entete">
        <Link to="/suggestions">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Recherche</h1>
        <Link to="/nouveautes">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="recherche-wrapper">
        <h2>Trouve un manga par titre, auteur ou genre...</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Naruto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-result">
          {results.map((manga) => (
            <Link
              to={`/${manga.slug}`}
              key={manga.idJson}
              className="search-item"
            >
              <img src={manga.cover || "/img/img-1.jpg"} alt={manga.titre} />
              <div>
                <h3>{manga.titre}</h3>
                <p>{manga.auteur}</p>
                <p>({manga.genre})</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recherche;
