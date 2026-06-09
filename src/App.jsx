import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import TrophyPage from "./components/TrophyPage"; 
import ProductDetail from "./pages/ProductDetail"; 

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mo-hinh-cup" element={<TrophyPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;