import { useState } from "react";
import "../../style/form.css";
import { useLocation, useNavigate } from "react-router-dom";
import AJAX from "../../utils/ajax";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Merci de remplir tous les champs");
      return;
    }
    try {
      const res = await AJAX.postAuth("login", {
        email,
        password,
      });
      localStorage.setItem("token", res.token);
      navigate("/nouveautes");
    } catch (err) {
      console.error(err);
      alert("Identifiants incorrects");
    }
  };

  return (
    <section className="login">
      <form className="form-login" onSubmit={handleSubmit}>
        <p className="msg-registered">{location.state?.msgRegistered}</p>
        <h2>Connexion</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
}
