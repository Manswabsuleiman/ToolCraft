import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/pages/Home";
// ... (Other imports remain the same)
import ProductSection from "./Components/ProductSection";
import Details from "./Components/pages/Details";
import DeliveriesSection from "./Components/pages/DeliveriesSection";
import Map from "./Components/pages/Map";
import Contact from "./Components/Contact";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";

import Login from "./Components/Login"; // ✅ USER LOGIN

// Product Context
import { ProductProvider } from "./context/ProductContext";

// Modal wrapper for login popup
const LoginModal = ({ close, onSuccessfulLogin, onLogout, isLoggedIn }) => { // 1. Receive new props
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(32, 41, 103, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <button
          onClick={close}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* 2. Pass login state and handlers to the Login component */}
        <Login
          onClose={close}
          onSuccessfulLogin={onSuccessfulLogin}
          onLogout={onLogout}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
};

// --- App Component ---

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ NEW STATE: User login status

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false); // Close modal on successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally: setShowLogin(false); // Close modal if it was open during logout
  };

  // Function to open the login modal
  const openLogin = () => setShowLogin(true);

  return (
    <ProductProvider>
      {/* LOGIN POPUP */}
      {showLogin && (
        <LoginModal
          close={() => setShowLogin(false)}
          onSuccessfulLogin={handleSuccessfulLogin} // Pass success handler
          onLogout={handleLogout} // Pass logout handler
          isLoggedIn={isLoggedIn} // Pass state
        />
      )}

      <Routes>
        {/* Pass state and handlers to Home (which renders Navbar) */}
        <Route
          path="/"
          element={
            <Home
              openLogin={openLogin} // Passed to Navbar to open modal
              isLoggedIn={isLoggedIn} // Passed to Navbar to determine button text
              handleLogout={handleLogout} // Passed to Navbar for Sign Out button action
            />
          }
        />

        {/* ... (Other Routes remain the same) ... */}
        <Route path="/product" element={<ProductSection />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/deliveries" element={<DeliveriesSection />} />
        <Route path="/trackdelivery" element={<Map />} />
        <Route path="/getintouch" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </ProductProvider>
  );
};

export default App;