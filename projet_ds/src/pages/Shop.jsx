import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const categories = ["all", "Beauté", "Mode", "Tech", "Maison"];
  const products = [
    { id: 1, name: "Produit 1", price: 29.99, category: "Beauté", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop" },
    { id: 2, name: "Produit 2", price: 39.99, category: "Mode", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop" },
    { id: 3, name: "Produit 3", price: 49.99, category: "Tech", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop" },
    { id: 4, name: "Produit 4", price: 59.99, category: "Maison", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop" },
    { id: 5, name: "Produit 5", price: 19.99, category: "Beauté", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop" },
    { id: 6, name: "Produit 6", price: 79.99, category: "Tech", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "low" && product.price < 30) ||
      (priceRange === "medium" && product.price >= 30 && product.price < 50) ||
      (priceRange === "high" && product.price >= 50);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="container my-5">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="fw-bold mb-4">Boutique</h1>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="card shadow-sm mb-4 border-0">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">🔍 Rechercher</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">📂 Catégorie</label>
              <select
                className="form-select form-select-lg"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "Toutes" : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">💰 Prix</label>
              <select
                className="form-select form-select-lg"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">Tous les prix</option>
                <option value="low">Moins de 30€</option>
                <option value="medium">30€ - 50€</option>
                <option value="high">Plus de 50€</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des produits */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted fs-5">Aucun produit trouvé</p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredProducts.map((product) => (
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
                  <p className="text-muted small mb-2">{product.category}</p>
                  <p className="card-text text-primary fw-bold fs-5 mb-3">
                    {product.price}€
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
      )}
    </div>
  );
}

