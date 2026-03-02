import "../../style/intro.css";
import HomeSlide1 from "./components/HomeSlide1";
import HomeSlide2 from "./components/HomeSlide2";
import HomeSlide3 from "./components/HomeSlide3";
import { Link } from "react-router-dom";

export default function HomeSlides({ children }) {
  return (
    <div className="home-slides">
      <div className="head-logo">
        <img
          className="trame-head"
          src="/img/illu_intro/trame_intro.png"
          alt="bandeau header trame mangas"
        />
        <img
          className="head-logo-intro"
          src="/img/logo-ariane/logo_Ariane_complet_120.svg"
          alt="logo-ariane"
        />
        <p>Ne perdez pas le fil</p>
      </div>
      <div className="mobile">{children}</div>
      <div className="desktop">
        <img
          src="/img/logo-ariane/logoFil.svg"
          alt="logo-fil-ariane"
          className="fil-transparence-desktop"
        />
        <div className="slides-desktop">
          <HomeSlide1 />
          <HomeSlide2 />
          <HomeSlide3 />
        </div>
        <div className="footer-desktop">
          <p>Créez votre bibliothèque virtuelle</p>
          <Link className="btn-begin" to="/nouveautes">
            Commencer
          </Link>
        </div>
      </div>
    </div>
  );
}
