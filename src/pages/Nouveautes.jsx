import React from "react";
import { Link } from "react-router-dom";
import "../style/nouveautes.css";

function Nouveautes(props) {
  return (
    <section className="nouveaute">
      <div className="entete">
        <Link to="/recherche">
          <i className="bi bi-chevron-left"></i>
        </Link>
        <h1 className="entete-titre">Nouveautés</h1>
        <Link to="/collection">
          <i className="bi bi-chevron-right"></i>
        </Link>
      </div>
      <div className="nouveaute-wrapper">
        <Link to="/vuedetail" className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
        <Link className="nouveaute-item">
          <div className="card">
            <img src="/img/img-1.jpg" alt="" />
            <div className="card-contenu">
              <p className="titre">My Hero Academia</p>
              <p className="tome">Tome 42</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Nouveautes;
