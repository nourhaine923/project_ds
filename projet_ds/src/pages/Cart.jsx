import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Produit 1", price: 29.99, quantity: 2, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=300&h=300&fit=crop" },
    { id: 2, name: "Produit 2", price: 39.99, quantity: 1, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop" },
  ]);

  function updateQuantity(id, change) {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  }

  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-4">🛒 Mon Panier</h1>

      {items.length === 0 ? (
        <div className="text-center py-5">
          <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>🛒</div>
          <h3 className="mb-3">Votre panier est vide</h3>
          <p className="text-muted mb-4">Découvrez nos produits et commencez vos achats</p>
          <Link to="/shop" className="btn btn-primary btn-lg px-5">
            Continuer les achats
          </Link>
        </div>
      ) : (
        <div className="row">
          {/* Liste des articles */}
          <div className="col-lg-8">
            {items.map((item) => (
              <div key={item.id} className="card mb-3 border-0 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                      style={{ height: "150px", objectFit: "cover", width: "100%" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-primary fw-bold fs-5">
                        {item.price}€
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card-body d-flex flex-column h-100">
                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <button
                          className="btn btn-outline-secondary rounded-circle"
                          style={{ width: "35px", height: "35px" }}
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="mx-3 fw-bold fs-5">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary rounded-circle"
                          style={{ width: "35px", height: "35px" }}
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="btn btn-danger btn-sm mt-auto"
                        onClick={() => removeItem(item.id)}
                      >
                        🗑️ Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prix total */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-lg sticky-top" style={{ top: "20px" }}>
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4">Résumé de la commande</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Sous-total:</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Livraison:</span>
                  <span className="text-success">Gratuite</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between mb-4">
                  <strong className="fs-5">Total:</strong>
                  <strong className="fs-5 text-primary">{total.toFixed(2)}€</strong>
                </div>
                <Link to="/checkout" className="btn btn-primary btn-lg w-100 py-3">
                  Passer commande →
                </Link>
                <Link to="/shop" className="btn btn-outline-secondary w-100 mt-2">
                  Continuer les achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

