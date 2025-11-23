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
    <div className="container mt-4">
      <h1 className="mb-4">{isEdit ? "Modifier un produit" : "Ajouter un produit"}</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image (URL)</label>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Prix</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Catégorie</label>
          <select
            className="form-select"
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

        <button type="submit" className="btn btn-primary">
          Enregistrer
        </button>
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => navigate("/admin/produits")}
        >
          Annuler
        </button>
      </form>
    </div>
  );
}

