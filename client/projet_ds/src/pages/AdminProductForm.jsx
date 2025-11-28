import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = id && id !== "nouveau";

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
  });

  const categories = ["Beauté", "Mode", "Tech", "Maison"];

  useEffect(() => {
    if (isEdit) {
      // Simuler le chargement d'un produit existant
      setFormData({
        name: "Produit existant",
        image: "https://via.placeholder.com/300",
        price: "29.99",
        description: "Description du produit",
        category: "Tech",
      });
    }
  }, [isEdit]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Produit ${isEdit ? "modifié" : "ajouté"} avec succès (fake) !`);
    navigate("/admin/produits");
  }

  return (
    <div className="container my-5">
      <div className="d-flex align-items-center mb-4">
        <button
          className="btn btn-outline-secondary me-3"
          onClick={() => navigate("/admin/produits")}
        >
          ← Retour
        </button>
        <h1 className="mb-0 fw-bold">
          {isEdit ? "✏️ Modifier un produit" : "➕ Ajouter un produit"}
        </h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold">📝 Nom du produit</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Entrez le nom du produit"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">🖼️ Image (URL)</label>
                  <input
                    type="url"
                    className="form-control form-control-lg"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                  {formData.image && (
                    <div className="mt-2">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="img-thumbnail"
                        style={{ maxHeight: "200px", maxWidth: "200px" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">💰 Prix (€)</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control form-control-lg"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="29.99"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">🏷️ Catégorie</label>
                    <select
                      className="form-select form-select-lg"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Sélectionner une catégorie</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">📄 Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Décrivez votre produit..."
                    required
                  />
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary btn-lg flex-grow-1">
                    💾 Enregistrer
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg"
                    onClick={() => navigate("/admin/produits")}
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

