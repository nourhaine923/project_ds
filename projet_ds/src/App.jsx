import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import AboutContact from "./pages/aboutContact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/about" element={<AboutContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

