import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../../style/intro.css";

export default function HomeSlide1() {
  const navigate = useNavigate();
  return (
    <>
      <div className="contenu-page">
        <div className="contenu-slide">
          <div className="illu-container">
            <img
              src="/img/logo-ariane/logoFil.svg"
              alt="logo-fil-ariane"
              className="fil-transparence"
            />
            <img
              src="/img/illu_intro/PAL1.jpg"
              alt="pile de livres et lunettes"
              className="contenu-illu"
            />
          </div>
          <div className="intro-descr">
            <h1>Ne vous perdez plus dans vos lectures multiples</h1>
            <p>
              Gérez ici toutes vos lectures en cours, vos livres à lire, vos
              envies
            </p>
          </div>
        </div>
        <div className="btn-pagination">
          <div className="dots">
            <img
              id="page-actuelle"
              src="/img/svg/circle.svg"
              alt="cercle plein page actuelle"
            />
            <img
              src="/img/svg/circle-dot.svg"
              alt="cercle vide page 2"
              onClick={() => navigate("/home-slide-2")}
            />
            <img
              src="/img/svg/circle-dot.svg"
              alt="cercle vide page 3"
              onClick={() => navigate("/home-slide-3")}
            />
          </div>
          <Link className="btn-suivant" to="/home-slide-2">
            Suivant
          </Link>
        </div>
      </div>
    </>
  );
}
