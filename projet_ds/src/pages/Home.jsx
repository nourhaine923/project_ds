import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const categories = ["Beauté", "Mode", "Tech", "Maison"];
  const popularProducts = [
    { id: 1, name: "Produit 1", price: "29.99€", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Produit 2", price: "39.99€", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Produit 3", price: "49.99€", image: "https://via.placeholder.com/200" },
    { id: 4, name: "Produit 4", price: "59.99€", image: "https://via.placeholder.com/200" },
  ];

  return (
    <div>
      {/* Slider/Banner */}
      <div className="carousel slide" data-bs-ride="carousel" style={{ marginBottom: "40px" }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Banner 1" />
          </div>
          <div className="carousel-item">
            <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Banner 2" />
          </div>
        </div>
      </div>

      <div className="container">
        {/* Liste de catégories */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Catégories</h2>
          <div className="row">
            {categories.map((category, index) => (
              <div key={index} className="col-md-3 mb-3">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Produits populaires */}
        <section className="mb-5">
          <h2 className="text-center mb-4">Produits populaires</h2>
          <div className="row">
            {popularProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
                    <Link to={`/produit/${product.id}`} className="btn btn-primary">
                      Voir détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/shop" className="btn btn-outline-primary">
              Voir plus
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

