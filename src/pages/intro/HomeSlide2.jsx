import { Link } from "react-router-dom";
import "../../style/intro.css";
import { useNavigate } from "react-router-dom";

export default function HomeSlide2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="head-logo">
        <img
          src="/img/logo-ariane/logo_Ariane_complet_120.svg"
          alt="logo-ariane"
        />
      </div>
      <div className="contenu-page">
        <div className="illu-container">
          <img
            src="/img/logo-ariane/logoFil.svg"
            alt="logo-fil-ariane"
            className="fil-transparence"
          />
          <img
            src="/img/illu_intro/collec1.jpg"
            alt="collection de livres"
            className="contenu-illu"
          />
        </div>
        <h1>Gérez votre bibliothèque et vos collections</h1>
        <p>
          Que vos livres soient physiques ou numériques, gardez un oeil sur
          votre collection complète !
        </p>
        <div className="btn-pagination">
          <div className="dots">
            <img
              src="/img/svg/circle-dot.svg"
              alt="cercle vide page 1"
              onClick={() => navigate("/home-slide-1")}
            />
            <img
              src="/img/svg/circle.svg"
              alt="cercle plein page actuelle"
              id="page-actuelle"
            />
            <img
              src="/img/svg/circle-dot.svg"
              alt="cercle vide page 3"
              onClick={() => navigate("/home-slide-3")}
            />
          </div>

          <Link className="btn-suivant" to="/home-slide-3">
            Suivant
          </Link>
        </div>
      </div>
    </>
  );
}
