import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Ma Boutique</h5>
            <p className="text-muted">
              Votre destination pour les meilleurs produits en ligne.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Liens rapides</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-light text-decoration-none">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-light text-decoration-none">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="text-muted mb-0">Email: contact@maboutique.com</p>
            <p className="text-muted">Tél: +33 1 23 45 67 89</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center text-muted">
          <p className="mb-0">&copy; 2025 Ma Boutique. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}


