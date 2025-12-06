import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { icon: <Linkedin />, link: "https://linkedin.com" },
    { icon: <Youtube />, link: "https://youtube.com" },
    { icon: <Facebook />, link: "https://facebook.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: "#03140eff",
        color: "#EDEDED",
        fontFamily: "Inter, sans-serif",
        padding: "clamp(2rem, 5vw, 4rem) 2rem 2rem 2rem",
      }}
    >
      {/* Top CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: 700,
            marginBottom: "1rem",
          }}
        >
          From Idea to Production in Days
        </h2>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            color: "#C7D2D6",
            marginBottom: "1.5rem",
          }}
        >
          Accelerate your production with our technology. Reduce downtime and
          optimize costs. Get a special offer now!
        </p>

        <motion.button
          style={{
            backgroundColor: "#E1F0D3",
            color: "#1B2B34",
            border: "none",
            borderRadius: "20px",
            padding: "0.75rem 2rem",
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            cursor: "pointer",
            fontWeight: 600,
          }}
          whileHover={{ scale: 1.05 }}
        >
          Work With Us
        </motion.button>
      </motion.div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          borderTop: "1px solid #2C3B45",
          paddingTop: "2rem",
          gap: "2rem",
        }}
      >
        {/* Company Info */}
        <div
          style={{
            flex: "1",
            minWidth: "200px",
            marginBottom: "2rem",
          }}
        >
          <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>ToolCraft</h3>
          <p style={{ color: "#A0B0B8", fontSize: "clamp(0.8rem, 2vw, 0.9rem)" }}>
            Our solutions make production faster and cheaper. Contact us for more information.
          </p>
        </div>

        {/* Links */}
        <div
          style={{
            flex: "1",
            minWidth: "150px",
            marginBottom: "2rem",
          }}
        >
          <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Company</h4>
          {["About Us", "Customers", "Newsroom", "Events"].map((link, i) => (
            <p
              key={i}
              style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", marginBottom: "0.3rem" }}
            >
              {link}
            </p>
          ))}
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "150px",
            marginBottom: "2rem",
          }}
        >
          <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Industries</h4>
          {[
            "Precision Metalforming",
            "Industrial Manufacturing",
            "High Tech & Electronics",
            "Aerospace",
          ].map((link, i) => (
            <p
              key={i}
              style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", marginBottom: "0.3rem" }}
            >
              {link}
            </p>
          ))}
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "150px",
            marginBottom: "2rem",
          }}
        >
          <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Products</h4>
          {[
            "Manufacturing Execution System",
            "Enterprise Resource Planning",
            "Quality Management System",
            "Supply Chain Planning",
          ].map((link, i) => (
            <p
              key={i}
              style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", marginBottom: "0.3rem" }}
            >
              {link}
            </p>
          ))}
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "150px",
            marginBottom: "2rem",
          }}
        >
          <h4 style={{ fontWeight: 600, marginBottom: "0.5rem" }}>Get In Touch</h4>
          <p style={{ fontSize: "clamp(0.8rem, 2vw, 0.9rem)", marginBottom: "0.5rem" }}>
            hallo@toolcract.com
          </p>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "35px",
                  height: "35px",
                  borderRadius: "50%",
                  backgroundColor: "#2C3B45",
                  color: "#EDEDED",
                  textDecoration: "none",
                  fontSize: "18px",
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          borderTop: "1px solid #2C3B45",
          marginTop: "2rem",
          paddingTop: "1rem",
          fontSize: "clamp(0.7rem, 2vw, 0.8rem)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          color: "#A0B0B8",
          gap: "1rem",
        }}
      >
        <span>© 2026 ToolCraft, All rights reserved</span>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
