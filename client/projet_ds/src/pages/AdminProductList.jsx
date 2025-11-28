import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Produit 1", price: 29.99, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop" },
    { id: 2, name: "Produit 2", price: 39.99, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop" },
    { id: 3, name: "Produit 3", price: 49.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  ]);

  function handleDelete(id) {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">📦 Gestion des produits</h1>
        <Link to="/admin/produit/nouveau" className="btn btn-primary btn-lg">
          ➕ Ajouter un produit
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-5">
          <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>📦</div>
          <h3 className="mb-3">Aucun produit</h3>
          <p className="text-muted mb-4">Commencez par ajouter votre premier produit</p>
          <Link to="/admin/produit/nouveau" className="btn btn-primary btn-lg">
            Ajouter un produit
          </Link>
        </div>
      ) : (
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th style={{ width: "100px" }}>Image</th>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th style={{ width: "200px" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="rounded"
                          style={{ width: "60px", height: "60px", objectFit: "cover" }}
                        />
                      </td>
                      <td className="align-middle">
                        <strong>{product.name}</strong>
                      </td>
                      <td className="align-middle">
                        <span className="text-primary fw-bold">{product.price}€</span>
                      </td>
                      <td className="align-middle">
                        <Link
                          to={`/admin/produit/${product.id}`}
                          className="btn btn-sm btn-warning me-2"
                        >
                          ✏️ Modifier
                        </Link>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(product.id)}
                        >
                          🗑️ Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

