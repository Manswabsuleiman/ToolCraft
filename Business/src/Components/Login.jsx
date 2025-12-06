import React, { useState } from "react";

const Login = ({ onClose, onSuccessfulLogin, onLogout, isLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const FAKE_CREDENTIALS = {
    email: "test@example.com",
    password: "123456",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (email === FAKE_CREDENTIALS.email && password === FAKE_CREDENTIALS.password) {
      onSuccessfulLogin();
      setError("");
    } else {
      setError("Invalid credentials!");
    }
  };

  const handleModalLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "20px", // ensures modal doesn't overflow on small screens
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "clamp(20px, 5vw, 30px)",
          borderRadius: "10px",
          width: "100%",       // Full width up to maxWidth
          maxWidth: "400px",   // Limits width on large screens
          position: "relative",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          boxSizing: "border-box",
        }}
      >
        {/* Close X */}
        <span
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          X
        </span>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
          }}
        >
          {isLoggedIn ? "Welcome!" : "Login"}
        </h2>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "clamp(8px, 2vw, 12px)",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "clamp(8px, 2vw, 12px)",
                borderRadius: "5px",
                border: "1px solid #ccc",
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              }}
            />
            {error && (
              <p
                style={{
                  color: "red",
                  fontSize: "clamp(0.8rem, 2vw, 0.9rem)",
                  margin: 0,
                }}
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "clamp(10px, 2.5vw, 12px)",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              }}
            >
              Sign In
            </button>
          </form>
        ) : (
          <button
            onClick={handleModalLogout}
            style={{
              width: "100%",
              padding: "clamp(10px, 2.5vw, 12px)",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
            }}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
