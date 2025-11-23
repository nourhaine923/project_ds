import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Produit 1", price: 29.99, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Produit 2", price: 39.99, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Produit 3", price: 49.99, image: "https://via.placeholder.com/100" },
  ]);

  function handleDelete(id) {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestion des produits</h1>
        <Link to="/admin/produit/nouveau" className="btn btn-primary">
          Ajouter
        </Link>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}€</td>
              <td>
                <Link
                  to={`/admin/produit/${product.id}`}
                  className="btn btn-sm btn-warning me-2"
                >
                  Modifier
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

