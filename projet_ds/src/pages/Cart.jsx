import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "Produit 1", price: 29.99, quantity: 2, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Produit 2", price: 39.99, quantity: 1, image: "https://via.placeholder.com/100" },
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
    <div className="container mt-4">
      <h1 className="mb-4">Panier</h1>

      {items.length === 0 ? (
        <div className="text-center">
          <p>Votre panier est vide</p>
          <Link to="/shop" className="btn btn-primary">
            Continuer les achats
          </Link>
        </div>
      ) : (
        <>
          {/* Liste des articles */}
          <div className="row">
            <div className="col-md-8">
              {items.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price}€</p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-sm btn-danger mt-2"
                          onClick={() => removeItem(item.id)}
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prix total */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Résumé</h5>
                  <p className="card-text">
                    <strong>Total: {total.toFixed(2)}€</strong>
                  </p>
                  <Link to="/checkout" className="btn btn-primary w-100">
                    Passer commande
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

