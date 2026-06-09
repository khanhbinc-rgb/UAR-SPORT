const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"]
}));

app.use(express.json());
const path = require("path");

// 1. Chỉ định thư mục chứa file build của React (thường tên là build hoặc dist)
// Giả sử bạn đặt folder build trong cùng thư mục với server.js
app.use(express.static(path.join(__dirname, "build")));

// 2. Mọi đường dẫn không phải API thì trả về file index.html của React
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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