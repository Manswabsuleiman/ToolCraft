import React, { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ADMINS = [
    { email: "admin@123.com", password: "admin123" },
    { email: "admin@456.com", password: "admin456" },
    { email: "admin@789.com", password: "admin789" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    const isValidAdmin = ADMINS.some(
      (admin) => admin.email === email && admin.password === password
    );

    if (isValidAdmin) {
      localStorage.setItem("adminToken", "logged-in");
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f2f2f2",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "#ffffff",
          padding: "30px 20px",
          borderRadius: "12px",
          boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            fontWeight: "500",
            color: "#333",
            fontSize: "22px",
          }}
        >
          Admin Login
        </h2>

        {error && (
          <div
            style={{
              background: "#ffe5e5",
              padding: "10px",
              borderRadius: "8px",
              color: "#cc0000",
              marginBottom: "15px",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
              width: "100%",
              boxSizing: "border-box",
            }}
            required
          />

          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "14px",
              width: "100%",
              boxSizing: "border-box",
            }}
            required
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "#006644",
              color: "#fff",
              fontSize: "15px",
              cursor: "pointer",
              fontWeight: "500",
              width: "100%",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
