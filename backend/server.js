const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"]
}));

app.use(express.json());

// 1. ĐƯA CÁC API VÀO TRƯỚC
app.post("/create-vietqr", (req, res) => {
  try {
    const { amount, orderId } = req.body;
    if (!amount || !orderId) {
      return res.status(400).json({ success: false, message: "Missing amount or orderId" });
    }

    const bank = "VCB";
    const account = "0123456789";
    const accountName = "NGUYEN VAN A";
    const qrUrl = `https://img.vietqr.io/image/${bank}-${account}-compact.png?amount=${amount}&addInfo=${orderId}&accountName=${encodeURIComponent(accountName)}`;

    return res.json({ success: true, orderId, amount, qr: qrUrl });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Create VietQR failed" });
  }
});

// 2. CHỈ KHI KHÔNG KHỚP API NÀO, MỚI PHỤC VỤ REACT (Nằm ở cuối)
// Kiểm tra đường dẫn này: nếu server nằm trong folder 'backend', dùng '..' để thoát ra ngoài
app.use(express.static(path.join(__dirname, "..", "build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`VietQR Server running on port ${PORT}`);
});