import "../../style/intro.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeIntro() {
  const [open, setOpen] = useState(false);

  return (
    <section className="home-intro">
      <div
        className={`intro-cover ${open ? "open" : "close"}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <img
          src="/img/illu_intro/trame_intro.png"
          alt="trame-fond-ariane"
          className="trame-cover"
        />
        <img
          src="/img/logo-ariane/logo_Ariane_complet_120.svg"
          alt="logo-ariane"
          className="logo-cover"
        />
        <h1>Bienvenue sur Ariane</h1>
        <img
          src="/img/svg/chevron-down.svg"
          alt="chevron-bas"
          className="chevron"
        />
      </div>
      <img
        src="/img/logo-ariane/logoFil_black_crop.svg"
        alt="logo-fil-ariane"
        id="fil-background"
      />

      <div className={`intro-content ${open ? "show" : "hide"}`}>
        <div className="btn-login">
          <p className="description">L'application des mordus de lecture</p>
          <Link to="/login" className="btn-log">
            Je me connecte
          </Link>
          <Link to="/register" className="btn-reg">
            Créer un compte
          </Link>
        </div>
      </div>
    </section>
  );
}
