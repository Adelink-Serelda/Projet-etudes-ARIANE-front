import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/form.css";
import AJAX from "../../utils/ajax";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !email || !password) {
      setError("Merci de remplir tous les champs");
      return;
    }
    try {
      await AJAX.postAuth("register", {
        lastName,
        firstName,
        email,
        password,
      });
      navigate("/login", {
        state: { msgRegistered: `Merci pour ton inscription, ${firstName}` },
      });
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };
  return (
    <section className="register">
      <form className="form-register" onSubmit={handleSubmit}>
        <h2>Inscris-toi !</h2>
        <div className="identity">
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="nom"
            placeholder="Nom de famille"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="prenom"
            placeholder="Prénom"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
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
        <button type="submit">S'inscrire</button>
      </form>
    </section>
  );
}
