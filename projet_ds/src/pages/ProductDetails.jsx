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
    <div className="container mt-4">
      <div className="row">
        {/* Grande image */}
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.name} />
        </div>

        {/* Détails */}
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <h2 className="text-primary">{product.price}€</h2>
          <p className="mt-4">{product.description}</p>
          <button className="btn btn-primary btn-lg mt-4" onClick={handleAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>

      {/* Produits similaires */}
      <div className="mt-5">
        <h3>Produits similaires</h3>
        <div className="row">
          {similarProducts.map((similar) => (
            <div key={similar.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={similar.image} className="card-img-top" alt={similar.name} />
                <div className="card-body">
                  <h5 className="card-title">{similar.name}</h5>
                  <p className="card-text">{similar.price}</p>
                  <Link to={`/produit/${similar.id}`} className="btn btn-primary">
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

