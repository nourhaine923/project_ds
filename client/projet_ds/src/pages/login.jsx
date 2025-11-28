import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
    } else {
      setError("");
      alert("Connexion réussie (fake) !");
    }
  }

  return (
    <div className="login-bg d-flex align-items-center justify-content-center">
      <div className="overlay"></div>

      <div className="container position-relative text-white">
        <div className="row d-flex justify-content-between align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6 p-4">
            <h1 className="display-4 fw-bold">Welcome</h1>
            <p className="mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="d-flex gap-3 fs-3 mt-4">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="col-md-5 p-4 bg-white bg-opacity rounded login-card">
            <h2 className="fw-semibold mb-3 text-dark">Connexion</h2>

            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">Se souvenir de moi</label>
              </div>

              <button type="submit" className="btn btn-custom w-100 fw-bold">
                Se connecter
              </button>
            </form>

            <p className="mt-3 text-dark small">Mot de passe oublié ?</p>
            <p className="mt-2 text-dark small">
              En cliquant sur "Se connecter" vous acceptez nos Conditions d'utilisation | Politique de confidentialité
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

