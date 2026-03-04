// import { Link } from "react-router-dom";
import "../style/header.css";
import { useEffect, useState } from "react";
import SubMenu from "./SubMenu";
import { jwtDecode } from "jwt-decode";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("USE EFFECT LANCE");
    const token = localStorage.getItem("token");
    console.log("TOKEN BRUT =", token);
    if (!token) return;

    const decoded = jwtDecode(token);
    console.log("TOKEN DECODED =", decoded);
    setUser(decoded);
  }, []);

  return (
    <div>
      <header className="header-wrapper">
        {openMenu && <SubMenu onClose={() => setOpenMenu(false)} />}
        <nav className="barre-navigation">
          <div className="logo-container">
            <img
              className="logo"
              src="/img/logo-ariane/logo_lettres_64.svg"
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
              {user && <p>{user.firstName}</p>}
            </button>
            {openMenu && <SubMenu onClose={() => setOpenMenu(false)} />}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
