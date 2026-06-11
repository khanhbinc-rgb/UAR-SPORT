import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logouarsport.png";
import cartIcon from "../assets/cart white.png";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // MOBILE MENU
  const location = useLocation();

  const { cart } = useCart();
  const cartCount = cart.length;

  const isHomePage = location.pathname === "/";
  const isBlackText = !isHomePage || isHovered;
  const textColorClass = isBlackText ? "text-black" : "text-white";

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      {/* BACKGROUND */}
      <div
        className={`absolute top-0 left-0 w-full h-full -z-10 transition-all duration-500 ease-in-out origin-top transform ${
          isHovered
            ? "scale-y-100 opacity-100 bg-white/95 shadow-md backdrop-blur-md"
            : isHomePage
            ? "scale-y-0 opacity-0 bg-transparent"
            : "scale-y-100 opacity-100 bg-white shadow-sm"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative z-10">
        
        {/* LOGO */}
        <Link to="/">
          <img
            src={logo}
            alt="UAR SPORT"
            className={`w-[110px] sm:w-[130px] lg:w-[150px] transition ${
              isBlackText ? "brightness-0" : "brightness-100"
            }`}
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav
          className={`hidden md:flex gap-6 lg:gap-8 text-sm lg:text-base font-medium transition-colors ${textColorClass}`}
        >
          <Link to="/">Trang chủ</Link>
          <Link to="/mo-hinh-cup">Mô hình cúp</Link>
          <Link to="/products">Giày bóng đá</Link>
          <Link to="/products">Áo bóng đá</Link>
          <Link to="/products">Phụ kiện</Link>
        </nav>

        {/* RIGHT SIDE DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`text-xs lg:text-base ${textColorClass}`}>
            <p className="font-semibold">Hotline</p>
            <p>084 578 6886</p>
          </div>

          {/* CART */}
          <Link to="/cart" className="relative">
            <img
              src={cartIcon}
              alt="cart"
              className={`w-6 h-6 lg:w-8 lg:h-8 ${
                isBlackText ? "brightness-0" : "brightness-100"
              }`}
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)}>Trang chủ</Link>
          <Link to="/mo-hinh-cup" onClick={() => setIsOpen(false)}>Mô hình cúp</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Giày bóng đá</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Áo bóng đá</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Phụ kiện</Link>

          <div className="pt-2 border-t">
            Hotline: 084 578 6886
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;