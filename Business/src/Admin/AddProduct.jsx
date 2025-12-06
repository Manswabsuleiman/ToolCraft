import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { addProduct } = useContext(ProductContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName || !price || !image) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    const newProduct = { id: Date.now(), productName, price, image };
    addProduct(newProduct);

    alert("Product added successfully!");

    setProductName("");
    setPrice("");
    setImage(null);

    navigate("/product");
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        width: "90%",
        maxWidth: "500px",
        margin: "20px auto",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px", fontWeight: 600, textAlign: "center" }}>
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
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
          type="number"
          placeholder="Price (KES)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#f0f0f0",
            cursor: "pointer",
            fontSize: "14px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {image ? "Change Image" : "Upload Product Image"}
        </button>

        {image && (
          <img
            src={image}
            alt="Product Preview"
            style={{
              width: "100%",
              maxHeight: "250px",
              objectFit: "cover",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
        )}

        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#006644",
            color: "#fff",
            fontWeight: 500,
            cursor: "pointer",
            fontSize: "15px",
            marginTop: "10px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
