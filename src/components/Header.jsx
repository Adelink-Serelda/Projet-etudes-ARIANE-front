// import { Link } from "react-router-dom";
import "../style/header.css";
import { useState } from "react";
import SubMenu from "./SubMenu";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <header className="header-wrapper">
        {openMenu && <SubMenu onClose={() => setOpenMenu(false)} />}
        <nav className="barre-navigation">
          <div className="logo-container">
            <img
              className="logo"
              src="/img/logo_lettres_64.svg"
              alt="logo Ariane"
            />
          </div>
          <div className="titre-page">
            <p>Nouveautés</p>
          </div>
          <div className="recherche">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Recherche"
            />
          </div>
          <div className="burger">
            <button
              className="burger-btn"
              onClick={() => {
                setOpenMenu(true);
              }}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
          <div
            className={`menu-cpt ${openMenu ? "open" : ""}`}
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={() => setOpenMenu(false)}
          >
            <button
              className="menu-cpt-btn"
              // onClick={() => setOpenMenu((v) => !v)}
            >
              <i className="bi bi-person-circle"></i>
              <p>Compte</p>
            </button>
            {openMenu && <SubMenu onClose={() => setOpenMenu(false)} />}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
