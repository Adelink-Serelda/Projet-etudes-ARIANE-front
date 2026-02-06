import { useState } from "react";
import axios from "axios";
import "../../style/form.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
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
    <section className="login">
      <form className="form-login" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
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
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
}
