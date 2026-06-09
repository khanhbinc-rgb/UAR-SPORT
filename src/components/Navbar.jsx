import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo-uar-sport.png";
import cartIcon from "../assets/cart white.png";
import { useCart } from "../context/CartContext";

function Navbar() {
const [isHovered, setIsHovered] = useState(false);
const location = useLocation();

const { cart } = useCart();
const cartCount = cart.length;
  

  // Kiểm tra xem người dùng có đang ở Trang chủ hay không
  const isHomePage = location.pathname === "/";

  // QUY ĐỊNH MÀU CHỮ CỐ ĐỊNH:
  // - Nếu đang ở trang chủ và KHÔNG hover: chữ màu trắng (để nổi trên banner).
  // - Nếu ở trang chủ và CÓ hover, HOẶC đang ở các trang sản phẩm: chữ luôn màu đen.
  const isBlackText = !isHomePage || isHovered;
  const textColorClass = isBlackText ? "text-black" : "text-white";
  
  // Quy định màu viền và màu chữ của nút Giỏ hàng
  const cartBtnClass = isBlackText
    ? "border-black text-black hover:bg-black hover:text-white"
    : "border-white text-white hover:bg-white hover:text-black";

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    >
      {/* LỚP NỀN (BACKGROUND) CHẠY XUỐNG: Chỉ có lớp này co giãn/trượt xuống khi hover */}
      <div 
        className={`absolute top-0 left-0 w-full h-full -z-10 transition-all duration-500 ease-in-out origin-top transform ${
          isHovered 
            ? "scale-y-100 opacity-100 bg-white/95 shadow-md backdrop-blur-md" 
            : isHomePage 
              ? "scale-y-0 opacity-0 bg-transparent" 
              : "scale-y-100 opacity-100 bg-white shadow-sm" // Các trang sản phẩm luôn có nền trắng cố định
        }`}
      />

      {/* NỘI DUNG CHỮ, LOGO: Luôn cố định một chỗ, không di chuyển */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="UAR SPORT"
            className={`w-[150px] h-auto transition duration-300 ${isBlackText ? "brightness-0" : "brightness-100"}`} 
            // Tự động chuyển logo sang màu đen (brightness-0) khi nền trắng để nhìn rõ
          />
        </Link>

        {/* Menu */}
        <nav className={`flex gap-8 font-medium transition-colors duration-300 ${textColorClass}`}>
          <Link to="/" className="hover:text-red-500 transition">
            Trang chủ
          </Link>
          <Link to="/mo-hinh-cup" className="hover:text-red-500 transition">
            Mô hình cúp
          </Link>
          <Link to="/products" className="hover:text-red-500 transition">
            Giày bóng đá
          </Link>
          <Link to="/products" className="hover:text-red-500 transition">
            Áo bóng đá
          </Link>
          <Link to="/products" className="hover:text-red-500 transition">
            Phụ kiện
          </Link>
        </nav>

        {/* Bên phải - Hotline và Giỏ hàng */}
        <div className={`flex items-center gap-6 transition-colors duration-300 ${textColorClass}`}>
          <div className="text-left">
            <p className="font-semibold">Hotline</p>
            <p>084 578 6886</p>
          </div>

<Link
  to="/cart"
  className="relative transition duration-300 hover:scale-110"
>
  <img
    id="cart-icon"
    src={cartIcon}
    alt="Cart"
    className={`w-8 h-8 ${
      isBlackText ? "brightness-0" : "brightness-100"
    }`}
  />

  {cartCount > 0 && (
    <span
      className="
        absolute
        -top-2
        -right-2
        bg-red-500
        text-white
        text-[11px]
        font-bold
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {cartCount}
    </span>
  )}
</Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;