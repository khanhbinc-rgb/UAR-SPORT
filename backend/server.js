const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { PayOS } = require("@payos/node");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ PayOS init đúng chuẩn SDK v2
const payOS = new PayOS({
  clientId: process.env.PAYOS_CLIENT_ID,
  apiKey: process.env.PAYOS_API_KEY,
  checksumKey: process.env.PAYOS_CHECKSUM_KEY,
});

app.post("/create-payment-link", async (req, res) => {
  try {
    const { amount } = req.body;

    // ⚡ body tạo payment link
    const body = {
      orderCode: Number(Date.now()),
      amount: Number(amount),
      description: "UAR SPORT",
      returnUrl: "http://localhost:5173/payment-success",
      cancelUrl: "http://localhost:5173/cart",
    };

    // ✅ SDK v2 đúng function
    const paymentLink = await payOS.paymentRequests.create(body);

    res.json(paymentLink);
  } catch (error) {
    console.error("PayOS Error:", error);
    res.status(500).json({
      message: "Create payment link failed",
      error: error,
    });
  }
});

app.listen(3000, () => {
  console.log("PayOS Server Running...");
});