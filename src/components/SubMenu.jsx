import React from "react";
import { Link } from "react-router-dom";
import "../style/submenu.css";

function SubMenu({ onClose }) {
  return (
    <>
      <div className="submenu-wrapper">
        <div className="submenu-title">
          <h2>MENU</h2>
          <button onClick={onClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="submenu-category">
          <h2 className="category">
            <i className="bi bi-person-circle"></i>Compte
          </h2>
          <ul>
            <li>
              <Link to="#">Tableau de bord</Link>
            </li>
            <li>
              <Link to="#">PAL</Link>
            </li>
            <li>
              <Link to="#">Wishlist</Link>
            </li>
            <li>
              <Link to="#">Amis</Link>
            </li>
          </ul>
        </div>
        <div className="submenu-category">
          <h2 className="category">
            <i className="bi bi-question-circle"></i>Aide
          </h2>
          <ul>
            <li>
              <Link to="#">Présentation d'Ariane</Link>
            </li>
            <li>
              <Link to="#">Qui sommes-nous?</Link>
            </li>
            <li>
              <Link to="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="submenu-category">
          <h2 className="category">
            <i className="bi bi-person-workspace"></i>Professionnels
          </h2>
          <ul>
            <li>
              <Link to="#">Admin</Link>
            </li>
            <li>
              <Link to="#">Espace librairie</Link>
            </li>
          </ul>
        </div>
        <div className="submenu-cta">
          <Link to="">Déconnexion</Link>
        </div>
      </div>
    </>
  );
}

export default SubMenu;
