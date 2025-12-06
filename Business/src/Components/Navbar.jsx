import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ openLogin }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div
        onClick={handleLogoClick}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: "100%",
          padding: "0 10px",
        }}
      >
        <img
          src="/Pictures/logo.png"
          alt="Logo"
          style={{
            height: "60px",
            width: "auto",
            objectFit: "contain",
            transition: "opacity 0.2s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        />
      </div>

      <div
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <NavLink to="/" className="link" onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/deliveries"
            className="link"
            onClick={() => setOpen(false)}
          >
            Deliveries
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/getintouch"
            className="link"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        {/* SIGN IN OPENS POPUP */}
        <li>
          <button
            className="btn-contact"
            onClick={() => {
              openLogin();
              setOpen(false);
            }}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              color: "inherit",
              fontSize: "inherit",
            }}
          >
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
