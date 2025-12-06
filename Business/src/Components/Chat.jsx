import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip } from "lucide-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", type: "text", text: "Hello! I'm your ToolCraft AI assistant. How can I help you today? 😊" }
  ]);

  const bottomRef = useRef(null);
  const fileInputRef = useRef(null);
  const idRef = useRef(1);

  const products = [
    { name: "Paint Brush", stock: 25, price: 1200 },
    { name: "Saw", stock: 100, price: 350 },
    { name: "Paint", stock: 50, price: 800 },
    { name: "Hammer", stock: 40, price: 600 },
    { name: "Wheelbarrow", stock: 80, price: 700 },
    { name: "Ironsheets", stock: 50, price: 150 },
    { name: "Gloves", stock: 120, price: 100 },
    { name: "G-clamp", stock: 30, price: 1500 }
  ];

  const deliveries = [
    { orderId: "A001", status: "Shipped", eta: "3-5 business days" },
    { orderId: "A002", status: "Processing", eta: "2-3 business days" }
  ];

  const contactDetails = {
    phone: "+254 700 123 456",
    email: "support@toolcraft.com",
    location: "Nairobi, Kenya"
  };

  const paymentMethods = ["Card Payments", "Mobile Money", "Bank Transfer"];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const assistantAI = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("thank")) return "You're welcome! 😊";
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I assist you today? 😊";

    const productMatch = products.find(p => lower.includes(p.name.toLowerCase()));
    if (productMatch) {
      const allProducts = products.map(p => p.name).join(", ");
      return `Yes, we have ${productMatch.name} in stock! Related products include: ${allProducts}`;
    }

    const unknownProduct = lower.match(/do you have (.+)/);
    if (unknownProduct && unknownProduct[1]) return `At the moment, ${unknownProduct[1]} is not available.`;

    if (lower.includes("product") || lower.includes("stock") || lower.includes("item") || lower.includes("available")) {
      return products.map(p => p.name + " - Price: KES " + p.price + ", Stock: " + p.stock).join("\n");
    }

    if (lower.includes("delivery") || lower.includes("order") || lower.includes("shipment") || lower.includes("tracking")) {
      return deliveries.map(d => "Order " + d.orderId + ": " + d.status + ", ETA: " + d.eta).join("\n");
    }

    if (lower.includes("contact") || lower.includes("phone") || lower.includes("email") || lower.includes("location")) {
      return `You can reach us at:\nPhone: ${contactDetails.phone}\nEmail: ${contactDetails.email}\nLocation: ${contactDetails.location}`;
    }

    if (lower.includes("pay") || lower.includes("gateway") || lower.includes("method") || lower.includes("checkout")) {
      return "You can pay through our platform via pesapal or proceed with payments on the product details page by clicking the pay button 😊";
    }

    return "Please ask about ToolCraft products, deliveries, contact info, or payments 😊";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", type: "text", text: input.trim(), id: idRef.current++ };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setSending(true);

    setTimeout(() => {
      const replyText = assistantAI(userMsg.text);
      const aiMsg = { sender: "ai", type: "text", text: replyText, id: idRef.current++ };
      setMessages(prev => [...prev, aiMsg]);
      setSending(false);
    }, 800);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    const imageMsg = { sender: "user", type: "image", image: imageURL, id: idRef.current++ };
    setMessages(prev => [...prev, imageMsg]);
  };

  return (
    <>
      {/* Floating Icon */}
      <div
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          width: "clamp(60px, 10vw, 70px)",
          height: "clamp(60px, 10vw, 70px)",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
          overflow: "hidden"
        }}
      >
        <img
          src="/Pictures/chat.png"
          alt="chatbot"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.35 }}
            style={{
              position: "fixed",
              bottom: "clamp(80px, 10vh, 120px)",
              right: "clamp(15px, 5vw, 25px)",
              width: "clamp(280px, 80vw, 400px)",
              height: "clamp(400px, 70vh, 500px)",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0px 15px 40px rgba(0,0,0,0.25)",
              padding: "clamp(10px, 2vw, 20px)",
              display: "flex",
              flexDirection: "column",
              zIndex: 99999
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <h2 style={{ fontWeight: 500, fontSize: "clamp(16px, 3vw, 20px)", textAlign: "center" }}>
                TOOL <span style={{ color: "#008e5cff" }}>Craft</span> AI
              </h2>
              <button
                onClick={() => setOpen(false)}
                style={{ background: "transparent", border: "none", fontSize: "20px", cursor: "pointer" }}
              >
                ✖
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                background: "#f0f0f0",
                borderRadius: "12px",
                padding: "10px",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "80%",
                    background: msg.sender === "user" ? "#d4ffc8" : "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    borderBottomRightRadius: msg.sender === "user" ? "0px" : "12px",
                    borderBottomLeftRadius: msg.sender === "ai" ? "0px" : "12px",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    fontSize: "clamp(12px, 2vw, 14px)",
                    whiteSpace: "pre-line",
                    wordBreak: "break-word"
                  }}
                >
                  {msg.type === "text" && msg.text}
                  {msg.type === "image" && (
                    <img
                      src={msg.image}
                      alt="uploaded"
                      style={{ width: "100%", maxWidth: "160px", borderRadius: "10px", objectFit: "cover" }}
                    />
                  )}
                </div>
              ))}

              {sending && (
                <div
                  style={{
                    alignSelf: "flex-start",
                    maxWidth: "80%",
                    background: "#ffffff",
                    padding: "8px 12px",
                    borderRadius: "12px",
                    borderBottomLeftRadius: "0px",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    fontSize: "clamp(12px, 2vw, 14px)"
                  }}
                >
                  Typing...
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input Section */}
            <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button
                onClick={() => fileInputRef.current.click()}
                style={{ border: "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                <Paperclip size={22} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                style={{
                  flex: 1,
                  minWidth: "120px",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                  fontSize: "clamp(12px, 2vw, 14px)"
                }}
              />
              <button
                onClick={handleSend}
                disabled={sending}
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                  background: "#084203ff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  width: "clamp(60px, 20%, 70px)"
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chat;
