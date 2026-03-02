import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../style/intro.css";

export default function HomeSlide2() {
  const navigate = useNavigate();
  return (
    <>
      <div className="contenu-page">
        <div className="contenu-slide even">
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
          <div className="intro-descr">
            <h1>Gérez votre bibliothèque et vos collections</h1>
            <p>
              Que vos livres soient physiques ou numériques, gardez un oeil sur
              votre collection complète !
            </p>
          </div>
        </div>
        <div className="btn-pagination">
          <div className="dots">
            <img
              src="/img/svg/circle-dot.svg"
              alt="cercle plein page actuelle"
              onClick={() => navigate("/home-slide-1")}
            />
            <img
              id="page-actuelle"
              src="/img/svg/circle.svg"
              alt="cercle vide page 2"
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
