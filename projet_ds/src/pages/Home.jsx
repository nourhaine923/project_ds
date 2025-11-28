import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const categories = [
    { name: "Beauté", icon: "💄", color: "#ff6b9d" },
    { name: "Mode", icon: "👗", color: "#4ecdc4" },
    { name: "Tech", icon: "📱", color: "#45b7d1" },
    { name: "Maison", icon: "🏠", color: "#f9ca24" },
  ];
  
  const popularProducts = [
    { id: 1, name: "Produit Premium", price: "29.99€", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop" },
    { id: 2, name: "Produit Élégant", price: "39.99€", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop" },
    { id: 3, name: "Produit Moderne", price: "49.99€", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
    { id: 4, name: "Produit Exclusif", price: "59.99€", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop" },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative" style={{ height: "400px", overflow: "hidden" }}>
        <div
          className="w-100 h-100 d-flex align-items-center justify-content-center text-white"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3">Bienvenue sur Ma Boutique</h1>
            <p className="lead mb-4">Découvrez nos produits exceptionnels</p>
            <Link to="/shop" className="btn btn-light btn-lg px-5">
              Explorer la boutique
            </Link>
          </div>
        </div>
      </div>

      <div className="container my-5">
        {/* Liste de catégories */}
        <section className="mb-5">
          <h2 className="text-center mb-5 fw-bold">Nos Catégories</h2>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <Link
                  to="/shop"
                  className="text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <div
                    className="card text-center h-100 border-0 shadow-sm"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}15 0%, ${category.color}05 100%)`,
                      cursor: "pointer",
                    }}
                  >
                    <div className="card-body p-4">
                      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                        {category.icon}
                      </div>
                      <h5 className="card-title fw-bold">{category.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Produits populaires */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Produits populaires</h2>
            <Link to="/shop" className="btn btn-outline-primary">
              Voir tout →
            </Link>
          </div>
          <div className="row g-4">
            {popularProducts.map((product) => (
              <div key={product.id} className="col-md-3 col-sm-6">
                <div className="card product-card h-100 border-0 shadow-sm">
                  <div style={{ overflow: "hidden", height: "250px" }}>
                    <img
                      src={product.image}
                      className="card-img-top w-100 h-100"
                      alt={product.name}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{product.name}</h5>
                    <p className="card-text text-primary fw-bold fs-5 mb-3">
                      {product.price}
                    </p>
                    <Link
                      to={`/produit/${product.id}`}
                      className="btn btn-primary mt-auto"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

