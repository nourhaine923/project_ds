export default function Profile() {
  const user = {
    name: "Nourhene",
    email: "nourhene@example.com",
    orders: [
      { id: 1, item: "Chaussures Nike", date: "12/10/2025" },
      { id: 2, item: "Casque Bluetooth", date: "03/11/2025" },
    ],
  };

  function logout() {
    alert("Déconnexion réussie (fake)");
  }

  return (
    <div style={styles.container}>
      <h2>Profil utilisateur</h2>

      <img
        src="https://via.placeholder.com/120"
        alt="User"
        style={{ borderRadius: "50%", marginTop: "20px" }}
      />

      <p><strong>Nom :</strong> {user.name}</p>
      <p><strong>Email :</strong> {user.email}</p>

      <h3 style={{ marginTop: "20px" }}>Historique des commandes</h3>

      <ul style={styles.list}>
        {user.orders.map((order) => (
          <li key={order.id} style={styles.orderItem}>
            {order.item} — <i>{order.date}</i>
          </li>
        ))}
      </ul>

      <button style={styles.logoutBtn} onClick={logout}>
        Déconnexion
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  orderItem: {
    background: "#f3f3f3",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  logoutBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    background: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
