import "../style/recherche.css";
import { useState, useEffect } from "react";
import AJAX from "../utils/ajax.js";

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
    }, 300);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="page-recherche">
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
          <div key={manga.idJson} className="search-item">
            <img src={manga.cover || "/img/img-1.jpg"} alt={manga.titre} />
            <div>
              <h3>{manga.titre}</h3>
              <p>{manga.auteur}</p>
              <p>({manga.genre})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recherche;
