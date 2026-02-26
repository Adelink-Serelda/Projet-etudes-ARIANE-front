import { Link } from "react-router-dom";
import "../../style/intro.css";
import { useNavigate } from "react-router-dom";

export default function HomeSlide3() {
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
            src="/img/illu_intro/lire4.jpg"
            alt="coeur avec les pages d'un livre"
            className="contenu-illu"
          />
        </div>
        <h1>Boostez votre rythme de lecture</h1>
        <p>Remplissez vos objectifs et remportez des badges.</p>
      </div>
      <div className="btn-pagination">
        <div className="dots">
          <img
            src="/img/svg/circle-dot.svg"
            alt="cercle vide page 1"
            onClick={() => navigate("/home-slide-1")}
          />
          <img
            src="/img/svg/circle-dot.svg"
            alt="cercle vide page 2"
            onClick={() => navigate("/home-slide-2")}
          />
          <img
            src="/img/svg/circle.svg"
            alt="cercle plein page actuelle"
            id="page-actuelle"
          />
        </div>
        <Link className="btn-suivant" to="/nouveautes">
          Commencer
        </Link>
      </div>
    </>
  );
}
