const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"]
}));

app.use(express.json());

app.post("/create-vietqr", (req, res) => {
  try {
    const { amount, orderId } = req.body;

    if (!amount || !orderId) {
      return res.status(400).json({
        success: false,
        message: "Missing amount or orderId",
      });
    }

    const bank = "VCB";
    const account = "0123456789";
    const accountName = "NGUYEN VAN A";

    const qrUrl =
      `https://img.vietqr.io/image/${bank}-${account}-compact.png?amount=${amount}&addInfo=${orderId}&accountName=${encodeURIComponent(accountName)}`;

    return res.json({
      success: true,
      orderId,
      amount,
      qr: qrUrl,
    });

  } catch (error) {
    console.error("VietQR Error:", error);
    return res.status(500).json({
      success: false,
      message: "Create VietQR failed",
    });
  }
});

// ✅ CHỈ ĐƯỢC KHAI BÁO 1 LẦN
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`VietQR Server running on port ${PORT}`);
});