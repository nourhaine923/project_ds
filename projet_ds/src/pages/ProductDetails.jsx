import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProductDetails() {
  const { id } = useParams();
  
  const product = {
    id: parseInt(id),
    name: `Produit ${id}`,
    price: 49.99,
    description: "Description détaillée du produit. Ce produit est de haute qualité et offre une excellente valeur pour votre argent.",
    image: "https://via.placeholder.com/500",
    category: "Tech",
  };

  const similarProducts = [
    { id: 1, name: "Produit Similaire 1", price: "39.99€", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Produit Similaire 2", price: "59.99€", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Produit Similaire 3", price: "29.99€", image: "https://via.placeholder.com/200" },
  ];

  function handleAddToCart() {
    alert("Produit ajouté au panier (fake) !");
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* Grande image */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <img
              src={product.image}
              className="card-img-top"
              alt={product.name}
              style={{ height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Détails */}
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <span className="badge bg-secondary mb-2">{product.category}</span>
              <h1 className="fw-bold mb-3">{product.name}</h1>
              <h2 className="text-primary fw-bold mb-4">{product.price}€</h2>
              <hr />
              <h5 className="mb-3">Description</h5>
              <p className="text-muted mb-4" style={{ lineHeight: "1.8" }}>
                {product.description}
              </p>
              <button
                className="btn btn-primary btn-lg w-100 py-3"
                onClick={handleAddToCart}
              >
                🛒 Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-5">
        <h3 className="fw-bold mb-4">Produits similaires</h3>
        <div className="row g-4">
          {similarProducts.map((similar) => (
            <div key={similar.id} className="col-md-4">
              <div className="card product-card border-0 shadow-sm h-100">
                <div style={{ overflow: "hidden", height: "250px" }}>
                  <img
                    src={similar.image}
                    className="card-img-top w-100 h-100"
                    alt={similar.name}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{similar.name}</h5>
                  <p className="card-text text-primary fw-bold fs-5 mb-3">
                    {similar.price}
                  </p>
                  <Link
                    to={`/produit/${similar.id}`}
                    className="btn btn-outline-primary mt-auto"
                  >
                    Voir détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

