import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Confirmation() {
  const orderDetails = {
    orderId: "ORD-12345",
    items: [
      { name: "Produit 1", quantity: 2, price: 29.99 },
      { name: "Produit 2", quantity: 1, price: 39.99 },
    ],
    total: 99.97,
    date: new Date().toLocaleDateString("fr-FR"),
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 shadow-lg text-center">
            <div className="card-body p-5">
              <div className="mb-4">
                <div
                  className="rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center"
                  style={{ width: "100px", height: "100px" }}
                >
                  <span style={{ fontSize: "4rem" }}>✅</span>
                </div>
              </div>
              <h2 className="card-title text-success mb-3 fw-bold">
                Commande confirmée !
              </h2>
              <p className="text-muted mb-4">
                Votre commande a été enregistrée avec succès. Vous recevrez un email de confirmation sous peu.
              </p>

              {/* Détails de la commande */}
              <div className="text-start mt-5">
                <div className="card bg-light border-0 mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-4">📋 Détails de la commande</h5>
                    <div className="row mb-3">
                      <div className="col-6">
                        <small className="text-muted">Numéro de commande</small>
                        <p className="mb-0 fw-bold">{orderDetails.orderId}</p>
                      </div>
                      <div className="col-6">
                        <small className="text-muted">Date</small>
                        <p className="mb-0 fw-bold">{orderDetails.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h6 className="fw-bold mb-3">Articles commandés:</h6>
                <div className="list-group mb-4">
                  {orderDetails.items.map((item, index) => (
                    <div key={index} className="list-group-item d-flex justify-content-between align-items-center border-0 bg-light">
                      <div>
                        <span className="fw-semibold">{item.name}</span>
                        <br />
                        <small className="text-muted">Quantité: {item.quantity}</small>
                      </div>
                      <span className="fw-bold">{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                  ))}
                </div>
                
                <div className="d-flex justify-content-between align-items-center p-3 bg-primary bg-opacity-10 rounded">
                  <strong className="fs-5">Total:</strong>
                  <strong className="fs-4 text-primary">{orderDetails.total.toFixed(2)}€</strong>
                </div>
              </div>

              <div className="mt-5">
                <Link to="/" className="btn btn-primary btn-lg px-5 me-2">
                  Retour à l'accueil
                </Link>
                <Link to="/shop" className="btn btn-outline-primary btn-lg px-5">
                  Continuer les achats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

