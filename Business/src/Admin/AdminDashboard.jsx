import React, { useState } from "react";
import AddProduct from "./AddProduct";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial",
        flexDirection: "row",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: isSidebarOpen ? "220px" : "0",
          minWidth: isSidebarOpen ? "220px" : "0",
          background: "#006644",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: isSidebarOpen ? "20px" : "0",
          transition: "all 0.3s ease",
          overflow: "hidden",
          position: "fixed", // Keep sidebar fixed
          height: "100vh",
          zIndex: 1000,
        }}
      >
        {isSidebarOpen && (
          <>
            <h2 style={{ marginBottom: "30px", fontWeight: 600 }}>Admin Panel</h2>

            <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <a href="#dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>
                Dashboard
              </a>
              <a href="#users" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>
                Users
              </a>
              <a href="#messages" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>
                Messages
              </a>
              <a href="#settings" style={{ color: "#fff", textDecoration: "none", fontWeight: 500 }}>
                Settings
              </a>
            </nav>

            <div style={{ marginTop: "auto" }}>
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#cc0000",
                  color: "#fff",
                  fontWeight: 500,
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "#f4f4f4",
          padding: "20px",
          marginLeft: isSidebarOpen ? "220px" : "0", // shift content when sidebar open
          transition: "margin-left 0.3s ease",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Mobile Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            display: "inline-block",
            marginBottom: "20px",
            padding: "10px 15px",
            fontSize: "16px",
            border: "none",
            borderRadius: "6px",
            background: "#006644",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {isSidebarOpen ? "Hide Menu" : "Show Menu"}
        </button>

        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <h1 style={{ fontWeight: 600 }}>Dashboard</h1>
          <h3>Welcome 👋</h3>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {[{ title: "Users", value: 120 }, { title: "Messages", value: 58 }, { title: "New Signups", value: 8 }].map(
            (card, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  wordBreak: "break-word",
                }}
              >
                <h3>{card.title}</h3>
                <p style={{ fontSize: "22px", fontWeight: 600 }}>{card.value}</p>
              </div>
            )
          )}
        </div>

        {/* Placeholder Pages + AddProduct Side by Side */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div id="users" style={{ marginBottom: "20px" }}>
              <h2>Users</h2>
              <p>Here you can manage all users.</p>
            </div>

            <div id="messages" style={{ marginBottom: "20px" }}>
              <h2>Messages</h2>
              <p>Here you can view messages.</p>
            </div>

            <div id="settings">
              <h2>Settings</h2>
              <p>Manage admin settings here.</p>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "300px" }}>
            <AddProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
