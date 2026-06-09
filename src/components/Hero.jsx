import banner from "../assets/banner.jpg";
// 1. IMPORT LINK Ở ĐÂY
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative pt-40"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Overlay tối */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-7xl font-bold mb-4">
            UAR SPORT
          </h1>

          <p className="text-xl max-w-2xl leading-relaxed">
            Chuyên mô hình cúp bóng đá và phụ kiện thể thao chính hãng.
            Mang đến trải nghiệm tốt nhất cho người yêu thể thao.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition">
              Mua ngay
            </button>

            {/* 2. ĐÃ CHUYỂN ĐỔI NÚT NÀY THÀNH LINK */}
            <Link 
              to="/mo-hinh-cup"
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition flex items-center justify-center"
            >
              Xem sản phẩm
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;