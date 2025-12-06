import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductContext } from "../context/ProductContext";

const ProductSection = () => {
  const navigate = useNavigate();
  const { products: uploadedProducts, setProducts: setUploadedProducts } =
    useContext(ProductContext);

  const staticProducts = [
    { id: 1, name: "House Sheet", img: "/Pictures/HouseSheet.png" },
    { id: 2, name: "House Sheet 2", img: "/Pictures/Housesheet2.png" },
    { id: 3, name: "House Sheet 3", img: "/Pictures/Housesheet3.png" },
    { id: 4, name: "House Sheet 4", img: "/Pictures/HouseSheet4.png" },
    { id: 5, name: "House Sheet 5", img: "/Pictures/HouseSheet5.png" },
    { id: 6, name: "House Sheet 6", img: "/Pictures/HouseSheet6.png" },
    { id: 7, name: "House Paint", img: "/Pictures/housepaint2.png" },
    { id: 8, name: "Painting Brush", img: "/Pictures/Paintingbrush.png" },
    { id: 9, name: "Paint Roller", img: "/Pictures/Paintroller.png" },
    { id: 10, name: "Paint Roller II", img: "/Pictures/Paintroller2.png" },
    { id: 11, name: "Road Paint", img: "/Pictures/Roadpaint.png" },
    { id: 12, name: "Roof Paint", img: "/Pictures/Roofpaint.png" },
    { id: 13, name: "Metal Sheets", img: "/Pictures/Sheets2.png" },
    { id: 14, name: "Metal Sheets III", img: "/Pictures/Sheets3.png" },
    { id: 15, name: "Metal Sheets IV", img: "/Pictures/Sheets4.png" },
    { id: 16, name: "Super Gloss", img: "/Pictures/Supergloss.png" },
    { id: 17, name: "Weather Paint", img: "/Pictures/Weatherpaint.png" },
    { id: 18, name: "Hammer", img: "/Pictures/hammer.png" },
    { id: 19, name: "Handsaw", img: "/Pictures/Handsaw.png" },
    { id: 20, name: "Gloves", img: "/Pictures/Gloves.png" },
    { id: 21, name: "Plascon", img: "/Pictures/Plascon.png" },
    { id: 22, name: "Racing Car Oil", img: "/Pictures/Oil.png" },
    { id: 23, name: "G - Clamp", img: "/Pictures/Clamp.png" },
    { id: 24, name: "Wheelbarrow", img: "/Pictures/Wheelbarrow.png" },
  ];

  const allProducts = [
    ...staticProducts,
    ...uploadedProducts.map((p) => ({
      ...p,
      id: p.id,
      img: p.image || p.img || p.productImage,
    })),
  ];

  const handleDelete = (id) => {
    const filtered = uploadedProducts.filter((p) => p.id !== id);
    setUploadedProducts(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));
  };

  // ------------------------ Responsive Inline Styles ------------------------
  const pageStyle = {
    padding: "4rem 2rem",
    fontFamily: "Inter, sans-serif",
    background: "#f8f9fa",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // responsive font size
    fontWeight: "700",
    color: "#0f4c3c",
    marginBottom: "40px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    textAlign: "center",
    padding: "15px 10px 25px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s",
  };

  const imgWrapperStyle = {
    position: "relative",
    width: "100%",
    minHeight: "180px",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "15px",
  };

  const imgStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    display: "block",
    borderRadius: "8px",
  };

  const nameStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#0f4c3c",
  };

  const btnPrimaryStyle = {
    padding: "10px 20px",
    background: "#0f4c3c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
    fontSize: "clamp(12px, 2vw, 14px)",
    transition: "transform 0.2s, background 0.3s",
  };

  const btnDeleteStyle = {
    padding: "10px 20px",
    background: "#ff0004ff",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    marginTop: "10px",
    width: "100%",
    fontSize: "clamp(12px, 2vw, 14px)",
    cursor: "pointer",
    transition: "transform 0.2s, background 0.3s",
  };

  return (
    <section style={pageStyle}>
      <motion.h1
        style={titleStyle}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Browse Our Products
      </motion.h1>

      <div style={gridStyle}>
        {allProducts.map((item) => (
          <motion.div
            key={item.id}
            style={cardStyle}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ImageWithLoader src={item.img} alt={item.name} imgStyle={imgStyle} wrapperStyle={imgWrapperStyle} />

            <h3 style={nameStyle}>{item.name || item.productName}</h3>

            <motion.button
              onClick={() => navigate(`/product/${item.id}`)}
              style={btnPrimaryStyle}
              whileTap={{ scale: 0.95 }}
            >
              View Details
            </motion.button>

            {uploadedProducts.some((p) => p.id === item.id) && (
              <button
                onClick={() => handleDelete(item.id)}
                style={btnDeleteStyle}
              >
                Delete
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ---------------------- Image Loader Component ----------------------
const ImageWithLoader = ({ src, alt, imgStyle, wrapperStyle }) => {
  const [loaded, setLoaded] = useState(false);

  const loaderStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const spinnerStyle = {
    width: "40px",
    height: "40px",
    border: "5px solid #ccc",
    borderTop: "5px solid #0f4c3c",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={wrapperStyle}>
      {!loaded && (
        <div style={loaderStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        style={{ ...imgStyle, display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      />

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default ProductSection;
