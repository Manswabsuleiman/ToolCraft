const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();


app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://toolcraft-qkw7.onrender.com", // frontend URL in production
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("PesaPal Backend is running ✅");
});


const CONSUMER_KEY = process.env.PESAPAL_KEY || "qkio1BGGYAXTu2JOfm7XSXNruoZsrqEW";
const CONSUMER_SECRET = process.env.PESAPAL_SECRET || "osGQ364R49cXKeOYSpaOnT++rHs=";
const CALLBACK_URL =
  process.env.PESAPAL_CALLBACK ||
  "https://proarmy-tammara-thermogenic.ngrok-free.dev/api/pesapal/callback";
const IPN_ID = "61a27b0c-0ab9-418f-ac30-db0135783448";

// Sandbox Base URL
const PESAPAL_BASE_URL = "https://cybqa.pesapal.com/pesapalv3";

// Endpoints
const AUTH_ENDPOINT = `${PESAPAL_BASE_URL}/api/Auth/RequestToken`;
const SUBMIT_ENDPOINT = `${PESAPAL_BASE_URL}/api/Transactions/SubmitOrderRequest`;
const STATUS_ENDPOINT = `${PESAPAL_BASE_URL}/api/Transactions/GetTransactionStatus`;


async function getToken() {
  try {
    const body = { consumer_key: CONSUMER_KEY, consumer_secret: CONSUMER_SECRET };
    const resp = await axios.post(AUTH_ENDPOINT, body, {
      headers: { "Content-Type": "application/json" },
    });
    return resp.data.token;
  } catch (err) {
    console.error("AUTH TOKEN ERROR:", err.response?.data || err.message);
    throw new Error("Failed to get auth token");
  }
}

// =========================
// Initiate Payment
// =========================
app.post("/api/pesapal/initiate", async (req, res) => {
  try {
    const { amount, email, phoneNumber, firstName, lastName, description } = req.body;

    if (!amount || !email || !phoneNumber || !firstName || !lastName || !description) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const token = await getToken();
    const merchantReference = `ORDER-${Date.now()}`;

    const requestBody = {
      id: merchantReference,
      currency: "KES",
      amount,
      description,
      callback_url: CALLBACK_URL,
      notification_id: IPN_ID,
      billing_address: {
        email_address: email,
        phone_number: phoneNumber,
        first_name: firstName,
        last_name: lastName,
        country_code: "KE",
      },
    };

    const resp = await axios.post(SUBMIT_ENDPOINT, requestBody, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    });

    const iframeUrl = resp.data.iframe_url || resp.data.redirect_url || null;

    if (!iframeUrl) {
      return res.status(500).json({ success: false, error: "No iframeUrl returned", raw: resp.data });
    }

    res.json({
      success: true,
      iframeUrl,
      orderTrackingId: resp.data.orderTrackingId,
      merchantReference,
    });
  } catch (err) {
    console.error("PESAPAL INIT ERROR:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      error: "Transaction initiation failed",
      details: err.response?.data || err.message,
    });
  }
});

app.get("/api/pesapal/callback", (req, res) => {
  console.log("Pesapal callback received:", req.query);
  res.send("Pesapal callback received successfully");
});


app.get("/api/pesapal/status/:orderTrackingId", async (req, res) => {
  try {
    const token = await getToken();
    const url = `${STATUS_ENDPOINT}?OrderTrackingId=${req.params.orderTrackingId}`;

    const resp = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/json" },
    });

    res.json({ success: true, data: resp.data });
  } catch (err) {
    console.error("STATUS ERROR:", err.response?.data || err.message);
    res.status(500).json({
      success: false,
      error: "Status check failed",
      details: err.response?.data || err.message,
    });
  }
});

// =========================
// Start Server
// =========================
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`PesaPal Backend running on port ${PORT}`));
