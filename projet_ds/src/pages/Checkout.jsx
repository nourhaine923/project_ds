import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const orderSummary = {
    items: [
      { name: "Produit 1", quantity: 2, price: 29.99 },
      { name: "Produit 2", quantity: 1, price: 39.99 },
    ],
    total: 99.97,
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/confirmation");
  }

  return (
    <div className="container my-5">
      <h1 className="fw-bold mb-4">💳 Finaliser la commande</h1>

      <div className="row g-4">
        {/* Formulaire */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h5 className="mb-0 fw-bold">Informations de livraison</h5>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">👤 Nom complet</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">📍 Adresse</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Votre adresse"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">📧 Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">📱 Téléphone</label>
                  <input
                    type="tel"
                    className="form-control form-control-lg"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 py-3">
                  Confirmer la commande →
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Résumé de la commande */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-lg sticky-top" style={{ top: "20px" }}>
            <div className="card-header bg-primary text-white py-3">
              <h5 className="mb-0 fw-bold">Résumé de la commande</h5>
            </div>
            <div className="card-body p-4">
              {orderSummary.items.map((item, index) => (
                <div key={index} className="d-flex justify-content-between mb-3 pb-3 border-bottom">
                  <div>
                    <span className="fw-semibold">{item.name}</span>
                    <br />
                    <small className="text-muted">Quantité: {item.quantity}</small>
                  </div>
                  <span className="fw-bold">{(item.price * item.quantity).toFixed(2)}€</span>
                </div>
              ))}
              <div className="d-flex justify-content-between mb-2">
                <span>Sous-total:</span>
                <span>{orderSummary.total.toFixed(2)}€</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Livraison:</span>
                <span className="text-success">Gratuite</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong className="fs-5">Total:</strong>
                <strong className="fs-5 text-primary">{orderSummary.total.toFixed(2)}€</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

