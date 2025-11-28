export default function AboutContact() {
  return (
    <div style={styles.container}>
      <h2>À propos de notre boutique</h2>
      <p style={styles.text}>
        Nous sommes une boutique en ligne spécialisée dans les produits
        électroniques et accessoires de qualité.
      </p>

      <h3>Adresse</h3>
      <p style={styles.text}>Avenue Habib Bourguiba, Tunis, Tunisie</p>

      <h2 style={{ marginTop: "30px" }}>Contact</h2>

      <form style={styles.form}>
        <input type="text" placeholder="Votre nom" style={styles.input} />
        <input type="email" placeholder="Votre email" style={styles.input} />
        <textarea
          placeholder="Votre message"
          rows="4"
          style={styles.input}
        ></textarea>

        <button style={styles.button}>Envoyer (fake)</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
  },
  text: {
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "5px",
    background: "#007BFF",
    color: "white",
    border: "none",
  },
};
