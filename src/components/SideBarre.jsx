import React from "react";
import { Link } from "react-router-dom";
import "../style/sidebarre.css";

function SideBarre(props) {
  return (
    <div>
      <nav className="barre-menu">
        <div className="barre-menu-logo">
          <Link to="#" className="liens">
            <img src="/img/logo_lettres_64.svg" alt="Logo Ariane lettres" />
          </Link>
        </div>
        <div className="barre-menu-logo-complet">
          <Link to="#" className="liens">
            <img src="/img/logo_Ariane_complet_120.svg" alt="Logo Ariane" />
          </Link>
        </div>
        <div className="barre-menu-item">
          <Link to="/" className="liens">
            <img src="/img/house-door-fill.svg" alt="icône maison accueil" />
            <span>Accueil</span>
          </Link>
        </div>
        <div className="barre-menu-item">
          <Link to="/collection" className="liens">
            <img src="/img/icone_collection.svg" alt="icône collection" />
            <span>Collection</span>
          </Link>
        </div>
        <div className="barre-menu-item">
          <Link to="/fil" className="liens">
            <img src="/img/logo_fil_64.svg" alt="icône fil d'Ariane" />
            <span>Fil</span>
          </Link>
        </div>
        <div className="barre-menu-item">
          <Link to="/suggestions" className="liens">
            <img src="/img/fire.svg" alt="icône suggestions" />
            <span>Suggestion</span>
          </Link>
        </div>
        <div className="barre-menu-item">
          <Link to="/recherche" className="liens">
            <img src="/img/search.svg" alt="icône loupe recherche" />
            <span>Recherche</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default SideBarre;
