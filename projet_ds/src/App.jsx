import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/login";
import Profile from "./pages/profile";
import AboutContact from "./pages/aboutContact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Confirmation from "./pages/Confirmation";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProductList from "./pages/AdminProductList";
import AdminProductForm from "./pages/AdminProductForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            {/* User Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/produit/:id" element={<ProductDetails />} />
            
            {/* Cart & Order Pages */}
            <Route path="/panier" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            
            {/* Admin Pages */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/produits" element={<AdminProductList />} />
            <Route path="/admin/produit/nouveau" element={<AdminProductForm />} />
            <Route path="/admin/produit/:id" element={<AdminProductForm />} />
            
            {/* Advanced User Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/about" element={<AboutContact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

