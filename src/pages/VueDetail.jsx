import { Link } from "react-router-dom";
import "../style/vue.css";

function VueDetail() {
  return (
    <section className="vue-detail">
      <div className="entete">
        <Link to="#">
          <i className="bi bi-chevron-left">41</i>
        </Link>
        <div className="entete-title">
          <h1 className="entete-titre">My Hero Academia</h1>
          <h2>Tome 42</h2>
        </div>
        <Link to="#">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="vue-wrapper">
        <div className="vue-image">
          <img src="/img/img-1.jpg" alt="" />
        </div>
        <div className="vue-title">
          <h1>My Hero Academia</h1>
          <p>Tome 42</p>
        </div>
        <div className="vue-cta">
          <Link className="cta">
            <span>+</span>AJOUTER
          </Link>
          <Link className="cta">
            <i className="bi bi-book"></i>
          </Link>
          <Link className="cta">
            <i className="bi bi-book"></i>
          </Link>
        </div>
        <div className="vue-note">Avis</div>
        <div className="vue-resume">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque modi
            aut illo id vero ea beatae qui iure assumenda fuga aliquam eum,
            excepturi autem ut nemo veritatis vel esse alias.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VueDetail;
