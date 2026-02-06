import { useState } from "react";
import axios from "axios";
import "../../style/form.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        lastName,
        firstName,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Identifiants incorrects");
    }
  };
  return (
    <section className="register">
      <form className="form-register" onSubmit={handleSubmit}>
        <h2>Inscris-toi !</h2>
        <div className="identity">
          <label for="nom">Nom</label>
          <input
            type="nom"
            placeholder="Nom de famille"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label for="prenom">Prénom</label>
          <input
            type="prenom"
            placeholder="Prénom"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <label for="email">Email</label>
        <input
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Mot de passe</label>
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">S'inscrire</button>
      </form>
    </section>
  );
}
