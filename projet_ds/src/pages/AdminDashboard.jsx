import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const stats = {
    products: 42,
    categories: 8,
    orders: 156,
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="fw-bold">📊 Dashboard Admin</h1>
        <Link to="/admin/produits" className="btn btn-primary">
          Gérer les produits
        </Link>
      </div>

      {/* Statistiques principales */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <div className="card-body text-white p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-white-50 mb-2">Produits</h6>
                  <h2 className="fw-bold mb-0">{stats.products}</h2>
                </div>
                <div style={{ fontSize: "3rem" }}>📦</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
            <div className="card-body text-white p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-white-50 mb-2">Catégories</h6>
                  <h2 className="fw-bold mb-0">{stats.categories}</h2>
                </div>
                <div style={{ fontSize: "3rem" }}>🏷️</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100" style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>
            <div className="card-body text-white p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="text-white-50 mb-2">Commandes</h6>
                  <h2 className="fw-bold mb-0">{stats.orders}</h2>
                </div>
                <div style={{ fontSize: "3rem" }}>🛒</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini-statistiques */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-success bg-opacity-10 rounded-circle p-3 me-3">
                  <span style={{ fontSize: "2rem" }}>💰</span>
                </div>
                <div>
                  <h5 className="card-title mb-0">Ventes du mois</h5>
                  <p className="text-muted small mb-0">(faux chiffres)</p>
                </div>
              </div>
              <h3 className="text-success fw-bold">12,450€</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                  <span style={{ fontSize: "2rem" }}>👥</span>
                </div>
                <div>
                  <h5 className="card-title mb-0">Clients actifs</h5>
                  <p className="text-muted small mb-0">(faux chiffres)</p>
                </div>
              </div>
              <h3 className="text-primary fw-bold">234</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

