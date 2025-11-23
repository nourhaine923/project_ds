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
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center">
            <div className="card-body">
              <div className="mb-4">
                <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}>✓</i>
              </div>
              <h2 className="card-title text-success mb-4">
                Votre commande a été enregistrée !
              </h2>

              {/* Détails de la commande */}
              <div className="text-start mt-4">
                <h4>Détails de la commande</h4>
                <p><strong>Numéro de commande:</strong> {orderDetails.orderId}</p>
                <p><strong>Date:</strong> {orderDetails.date}</p>
                
                <h5 className="mt-4">Articles:</h5>
                <ul className="list-unstyled">
                  {orderDetails.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item.name} x{item.quantity} - {(item.price * item.quantity).toFixed(2)}€
                    </li>
                  ))}
                </ul>
                
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total:</strong>
                  <strong>{orderDetails.total.toFixed(2)}€</strong>
                </div>
              </div>

              <Link to="/" className="btn btn-primary mt-4">
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

