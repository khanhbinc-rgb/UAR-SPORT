const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(express.json());

/* =========================================
   API TẠO VIETQR
========================================= */
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

    const qrUrl = `https://img.vietqr.io/image/${bank}-${account}-compact.png?amount=${amount}&addInfo=${orderId}&accountName=${encodeURIComponent(
      accountName
    )}`;

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

/* =========================================
   API LƯU GOOGLE SHEET
========================================= */
app.post("/save-order", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzjssxF1uU42m083ajTztJiD1pH5zW3LM98Qz13IFIxtdXpl9ETJ_gr4mygk4yJweBo/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.text();

    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("SAVE ORDER ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* =========================================
   FRONTEND DIST
========================================= */
app.use(express.static(path.join(__dirname, "dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

/* =========================================
   SERVER
========================================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});