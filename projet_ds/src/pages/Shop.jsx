import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const categories = ["all", "Beauté", "Mode", "Tech", "Maison"];
  const products = [
    { id: 1, name: "Produit 1", price: 29.99, category: "Beauté", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Produit 2", price: 39.99, category: "Mode", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Produit 3", price: 49.99, category: "Tech", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Produit 4", price: 59.99, category: "Maison", image: "https://via.placeholder.com/200" },
    { id: 5, name: "Produit 5", price: 19.99, category: "Beauté", image: "https://via.placeholder.com/200" },
    { id: 6, name: "Produit 6", price: 79.99, category: "Tech", image: "https://via.placeholder.com/200" },
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
    <div className="container mt-4">
      <h1 className="mb-4">Boutique</h1>

      {/* Barre de recherche */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filtres */}
      <div className="row mb-4">
        <div className="col-md-4">
          <label className="form-label">Catégorie</label>
          <select
            className="form-select"
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
        <div className="col-md-4">
          <label className="form-label">Prix</label>
          <select
            className="form-select"
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

      {/* Liste des produits */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}€</p>
                <Link to={`/produit/${product.id}`} className="btn btn-primary">
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

