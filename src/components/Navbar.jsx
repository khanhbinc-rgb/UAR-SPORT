import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logouarsport.png";
import cartIcon from "../assets/cart white.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const { cart } = useCart();
  const cartCount = cart.length;

  const isHomePage = location.pathname === "/";
  const isBlackText = !isHomePage || mobileMenuOpen;
  const textColorClass = isBlackText ? "text-black" : "text-white";

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Background */}
      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-white shadow-md"
            : isHomePage
            ? "bg-transparent"
            : "bg-white shadow-sm"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="UAR SPORT"
            className={`w-[120px] md:w-[150px] transition duration-300 ${
              isBlackText ? "brightness-0" : "brightness-100"
            }`}
          />
        </Link>

        {/* Menu Desktop */}
        <nav
          className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${textColorClass}`}
        >
          <Link to="/" className="hover:text-red-500">
            Trang chủ
          </Link>

          <Link to="/mo-hinh-cup" className="hover:text-red-500">
            Mô hình cúp
          </Link>

          <Link to="/products" className="hover:text-red-500">
            Sale
          </Link>
        </nav>

        {/* Bên phải */}
        <div
          className={`flex items-center gap-4 transition-colors duration-300 ${textColorClass}`}
        >
          {/* Hotline Desktop */}
          <div className="hidden md:block text-left">
            <p className="font-semibold">Hotline</p>
            <p>084 578 6886</p>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <img
              id="cart-icon"
              src={cartIcon}
              alt="Cart"
              className={`w-7 h-7 ${
                isBlackText ? "brightness-0" : "brightness-100"
              }`}
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Nút 3 gạch Mobile */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`md:hidden text-3xl ${textColorClass}`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col p-5 gap-4 text-black font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trang chủ
            </Link>

            <Link
              to="/mo-hinh-cup"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mô hình cúp
            </Link>

            <Link
              to="/products"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sale
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;