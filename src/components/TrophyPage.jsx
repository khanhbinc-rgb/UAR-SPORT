import { useState } from "react";
import { products } from "../data/products"; // Đọc file data chuẩn 4 sản phẩm của bạn
import logoBlack from "../assets/Logo-uar-sport-đen.png";
import addToCartIcon from "../assets/Icon thêm vào giỏ hàng.png"; 
// ĐÃ THÊM: Import thẻ Link để chạy định tuyến trang chi tiết
import { Link } from "react-router-dom";

function TrophyPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Tất cả", "URF", "UR5", "UR1", "Cúp lẻ"];

  // BỘ LỌC ĐÃ SỬA: Nhận diện chính xác 100% thuộc tính category từ file của bạn
  const filteredProducts = products.filter((product) => {
    // 1. Lọc theo Tab danh mục đang chọn
    const matchesTab = 
      selectedCategory === "Tất cả" || 
      (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());
    
    // 2. Lọc theo từ khóa tìm kiếm
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const addToCart = (product) => {
    alert(`Đã thêm "${product.name}" vào giỏ hàng thành công!`);
  };

  return (
    <div className="bg-white min-h-screen pb-12 font-sans pt-24">
      
      {/* Logo thương hiệu lớn ở đầu trang */}
      <div className="flex justify-center py-6">
        <img 
          src={logoBlack} 
          alt="UAR SPORTS" 
          className="h-16 w-auto object-contain max-w-[250px]"
        />
      </div>

      {/* Thanh menu phân loại danh mục */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 md:gap-4 px-6 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-sm font-semibold transition rounded-md ${
              selectedCategory === cat
                ? "bg-black text-white" 
                : "text-zinc-600 hover:text-black bg-zinc-100 hover:bg-zinc-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Ô tìm kiếm sản phẩm */}
      <div className="max-w-md mx-auto relative px-6 mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-2.5 border border-zinc-300 rounded-full text-sm focus:outline-none focus:border-zinc-500 shadow-sm"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">🔍</span>
        </div>
      </div>

      {/* LƯỚI HIỂN THỊ 5 SẢN PHẨM/HÀNG */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-5 px-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white text-center group"
          >
            {/* Khung ảnh sản phẩm */}
            <div className="h-64 w-full bg-white flex items-center justify-center overflow-hidden relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-102 transition duration-300"
              />
            </div>

            {/* Khối thông tin chi tiết */}
            <div className="pt-1 flex flex-col flex-1 items-center">
              
              {/* Tên sản phẩm */}
              <h3 className="font-bold text-base text-black px-1 leading-snug tracking-wide">
                {product.name}
              </h3>
              
              {/* Giá tiền */}
              <p className="text-black font-semibold text-base mt-1">
                {product.price}
              </p>

              {/* Số lượng đã bán */}
              <div className="text-zinc-500 text-xs mt-0.5 mb-3">
                Đã bán 8.9K
              </div>

              {/* Khối nút bấm dưới đáy */}
              <div className="w-full flex items-center border border-zinc-200 overflow-hidden rounded shadow-sm mt-auto">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-12 h-10 bg-zinc-100 flex items-center justify-center border-r border-zinc-200 hover:bg-zinc-200 transition active:scale-95"
                  title="Thêm vào giỏ hàng"
                >
                  <img 
                    src={addToCartIcon} 
                    alt="Giỏ hàng" 
                    className="w-5 h-5 object-contain"
                  />
                </button>
                
                {/* ĐÃ SỬA: Thay thế từ <button> sang <Link> để kích hoạt hành động chuyển hướng */}
                <Link 
                  to={`/product/${product.id}`}
                  className="flex-1 h-10 bg-black text-white font-medium text-sm hover:bg-zinc-800 transition active:scale-[0.99] flex items-center justify-center"
                >
                  Buy now
                </Link>
              </div>

            </div>
          </div>
        ))}
        
        {/* Trường hợp tìm kiếm trống */}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-zinc-400 py-10">
            Không tìm thấy sản phẩm mô hình cúp nào phù hợp.
          </div>
        )}
      </div>

    </div>
  );
}

export default TrophyPage;