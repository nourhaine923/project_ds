import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
    } else {
      setError("");
      alert("Connexion réussie (fake) !");
    }
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Connexion</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button}>Se connecter</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    textAlign: "center",
  },
  title: { marginBottom: "20px" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: { padding: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: {
    padding: "10px",
    borderRadius: "5px",
    background: "#4CAF50",
    color: "white",
    border: "none",
  },
  error: { color: "red", marginBottom: "10px" },
};
