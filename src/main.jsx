import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Login";
import Coffee from "./Pages/Coffee";
import CoffeeID from "./Pages/Coffee/CoffeeID/CoffeeWithID.jsx";
import Upload from "./Pages/Profile/index.jsx";
import NavBar from "./Components/Navbar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <NavBar />
      <div className="inter">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/coffee/:id" element={<CoffeeID />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </StrictMode>
);
