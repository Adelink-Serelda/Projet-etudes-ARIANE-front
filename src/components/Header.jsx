// import { Link } from "react-router-dom";
import "../style/header.css";
import { useEffect, useState } from "react";
import SubMenu from "./SubMenu";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  let title = "";
  const { slug } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const decoded = jwtDecode(token);
    setUser(decoded);
  }, []);

  if (location.pathname === "/nouveautes") title = "Nouveautés";
  else if (location.pathname === "/collection") title = "Collection";
  else if (location.pathname === "/fil") title = "Fil d'Ariane";
  else if (location.pathname === "/suggestions") title = "Suggestions du jour";
  else if (location.pathname.startsWith("/vuedetail"))
    title = slug || "Détails";
  else if (location.pathname.startsWith("/vuemanga"))
    title = "My Hero Academia";

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
              onClick={() => navigate("/nouveautes")}
            />
          </div>
          <div className="titre-page">
            <p>{title}</p>
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
