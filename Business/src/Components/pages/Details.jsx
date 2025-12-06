import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Chat from "../Chat";

// FULL PRODUCT LIST
const defaultProducts = [
  { id: 1, name: "House Sheet", img: "/Pictures/HouseSheet.png", desc: "Strong durable sheet for roofing.", price: 1200 },
  { id: 2, name: "House Sheet 2", img: "/Pictures/Housesheet2.png", desc: "Premium quality roof sheet.", price: 1500 },
  { id: 3, name: "House Sheet 3", img: "/Pictures/Housesheet3.png", desc: "High-grade metal sheet.", price: 1800 },
  { id: 4, name: "House Sheet 4", img: "/Pictures/HouseSheet4.png", desc: "Durable roofing solution.", price: 2300 },
  { id: 5, name: "House Sheet 5", img: "/Pictures/HouseSheet5.png", desc: "Affordable and strong sheet.", price: 3100 },
  { id: 6, name: "House Sheet 6", img: "/Pictures/HouseSheet6.png", desc: "Premium grade roofing.", price: 2700 },
  { id: 7, name: "House Paint", img: "/Pictures/housepaint2.png", desc: "High-quality paint for home.", price: 1800 },
  { id: 8, name: "Painting Brush", img: "/Pictures/Paintingbrush.png", desc: "Durable brush for all paints.", price: 2250 },
  { id: 9, name: "Paint Roller", img: "/Pictures/Paintroller.png", desc: "Smooth finish roller.", price: 3100 },
  { id: 10, name: "Paint Roller II", img: "/Pictures/Paintroller2.png", desc: "Premium paint roller.", price: 750 },
  { id: 11, name: "Road Paint", img: "/Pictures/Roadpaint.png", desc: "Durable road marking paint.", price: 900 },
  { id: 12, name: "Roof Paint", img: "/Pictures/Roofpaint.png", desc: "Protective roof paint.", price: 950 },
  { id: 13, name: "Metal Sheets", img: "/Pictures/Sheets2.png", desc: "Strong metal sheets.", price: 2000 },
  { id: 14, name: "Metal Sheets III", img: "/Pictures/Sheets3.png", desc: "Premium metal sheets.", price: 2200 },
  { id: 15, name: "Metal Sheets IV", img: "/Pictures/Sheets4.png", desc: "High-quality sheets.", price: 2500 },
  { id: 16, name: "Super Gloss", img: "/Pictures/Supergloss.png", desc: "Glossy finish paint.", price: 700 },
  { id: 17, name: "Weather Paint", img: "/Pictures/Weatherpaint.png", desc: "Weather-resistant paint.", price: 1000 },
  { id: 18, name: "Hammer", img: "/Pictures/hammer.png", desc: "Hammer tool box.", price: 1800 },
  { id: 19, name: "Handsaw", img: "/Pictures/Handsaw.png", desc: "Handsaw.", price: 700 },
  { id: 20, name: "Gloves", img: "/Pictures/Gloves.png", desc: "Construction Gloves", price: 600 },
  { id: 21, name: "Plascon", img: "/Pictures/Plascon.png", desc: "Plascon.", price: 2550 },
  { id: 22, name: "Racing Car Oil", img: "/Pictures/Oil.png", desc: "Racing Car Oil", price: 1000 },
  { id: 23, name: "G - Clamp", img: "/Pictures/Clamp.png", desc: "G - Clamp", price: 13500 },
  { id: 24, name: "Wheelbarrow", img: "/Pictures/Wheelbarrow.png", desc: "Construction Wheelbarrow", price: 13500 },
  { id: 26, name: "LOGO", img: "./Pictures/ManswabLogo.png", desc: "LOGO", price: 13500 },
];

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({ phone: "", amount: "" });
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Track window resize for responsiveness
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load product
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const allProducts = [...defaultProducts, ...storedProducts];
    const foundProduct = allProducts.find((p) => p.id.toString() === id);

    if (foundProduct) {
      setProduct(foundProduct);
      setFormData({ phone: "", amount: foundProduct.price });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatPhone = (phone) => {
    let formatted = phone.replace(/\D/g, "");
    if (formatted.startsWith("07") || formatted.startsWith("01")) {
      formatted = "254" + formatted.substring(1);
    }
    return formatted;
  };

  const handlePay = async () => {
    const formattedPhone = formatPhone(formData.phone);

    if (!formattedPhone) return alert("Enter a valid phone number.");
    if (!formData.amount) return alert("Amount is required.");

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/pesapal/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: formData.amount,
          phoneNumber: formattedPhone,
          firstName: "Customer",
          lastName: "User",
          email: "customer@example.com",
          description: `Payment for ${product.name}`,
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (!data.success) {
        alert("Payment failed: " + (data.error || "Unknown error"));
        return;
      }

      if (data.iframeUrl) {
        window.location.href = data.iframeUrl;
      } else {
        alert("Missing payment link from server.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Error initiating payment.");
    }
  };

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  // Responsive styles
  const isMobile = windowWidth < 768;

  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
  };

  const imgStyle = {
    flex: "1 1 300px",
    maxWidth: isMobile ? "90%" : "400px",
    width: "100%",
    borderRadius: "12px",
  };

  const descStyle = {
    flex: "1 1 300px",
    maxWidth: isMobile ? "90%" : "500px",
    width: "100%",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const btnStyle = {
    padding: "12px 20px",
    background: "#0f4c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    width: isMobile ? "100%" : "auto",
    fontSize: "16px",
  };

  const backBtnStyle = {
    marginBottom: "20px",
    padding: "8px 16px",
    background: "#0f4c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div>
      <Navbar />

      <div style={{ padding: isMobile ? "20px" : "40px" }}>
        <button onClick={() => navigate(-1)} style={backBtnStyle}>Back</button>

        <h1 style={{ textAlign: "center", color: "#0f4c3c" }}>{product.name}</h1>

        <div style={containerStyle}>
          <img src={product.img} alt={product.name} style={imgStyle} />

          <div style={descStyle}>
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>{product.desc}</p>
            <p style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "20px" }}>
              Price: Ksh {product.price}
            </p>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              style={inputStyle}
            />

            <button onClick={handlePay} style={btnStyle} disabled={loading}>
              {loading ? "Processing Payment..." : "Pay Now"}
            </button>
          </div>
        </div>
      </div>

      <Chat />
      <Footer />
    </div>
  );
};

export default Details;
