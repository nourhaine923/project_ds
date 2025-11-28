import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          🛍️ Ma Boutique
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                to="/"
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/shop") ? "active" : ""}`}
                to="/shop"
              >
                Boutique
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                to="/about"
              >
                À propos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/panier") ? "active" : ""}`}
                to="/panier"
              >
                🛒 Panier
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/login") ? "active" : ""}`}
                to="/login"
              >
                Connexion
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/profil") ? "active" : ""}`}
                to="/profil"
              >
                Profil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive("/admin") ? "active" : ""}`}
                to="/admin"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


