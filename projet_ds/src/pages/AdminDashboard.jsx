import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const stats = {
    products: 42,
    categories: 8,
    orders: 156,
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard Admin</h1>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Nombre de produits</h5>
              <h2 className="text-primary">{stats.products}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Nombre de catégories</h5>
              <h2 className="text-success">{stats.categories}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Nombre de commandes</h5>
              <h2 className="text-warning">{stats.orders}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Mini-statistiques */}
      <div className="row mt-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Ventes du mois</h5>
              <p className="card-text">12,450€ (faux chiffres)</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Clients actifs</h5>
              <p className="card-text">234 (faux chiffres)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

