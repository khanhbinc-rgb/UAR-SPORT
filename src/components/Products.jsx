import { useEffect, useRef } from "react";
import { products } from "../data/products"; 
import addToCartIcon from "../assets/Icon thêm vào giỏ hàng.png"; 
import { Link, useNavigate } from "react-router-dom";

function Products() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const trophyCategories = ["URF", "UR5", "UR1", "Cúp lẻ"];
  const featuredTrophies = products.filter(
    (product) =>
      product.category &&
      trophyCategories.map((c) => c.toLowerCase()).includes(product.category.toLowerCase())
  );

  const handleAddToCart = (product) => {
    // Logic thêm vào giỏ hàng của bạn ở đây
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  };

  const handleBuyNow = (product) => {
    localStorage.setItem("buyingProduct", JSON.stringify(product));
    navigate("/cart");
  };

  return (
    <div className="w-full bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-2xl font-bold text-black uppercase tracking-wider">
          Sản phẩm nổi bật
        </h2>
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 pb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {featuredTrophies.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-white text-center border border-zinc-200 rounded-lg overflow-hidden group"
          >
            {/* VÙNG BẤM VÀO ĐỂ VÀO CHI TIẾT */}
            <Link to={`/product/${product.id}`} className="block">
              <div className="h-40 md:h-72 w-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-lg text-black px-2 mt-2 leading-snug line-clamp-2 min-h-[44px]">
                {product.name}
              </h3>
            </Link>

            {/* VÙNG THÔNG TIN VÀ NÚT BẤM (ĐỂ TÁCH BIỆT VỚI LINK) */}
            <div className="pt-2 flex flex-col flex-1 items-center p-4">
              <p className="text-black font-semibold text-sm md:text-lg mt-1">
                {product.price}
              </p>
              <div className="text-zinc-500 text-xs mt-0.5 mb-4">
  Đã bán {Math.floor(Math.random() * 9000) + 1000}
</div>

              <div className="w-full flex items-center border border-zinc-200 overflow-hidden rounded-md shadow-sm mt-auto">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-14 h-11 bg-zinc-100 flex items-center justify-center border-r border-zinc-200 hover:bg-zinc-200 transition"
                >
                  <img 
                    src={addToCartIcon} 
                    alt="Giỏ hàng" 
                    className="w-5 h-5 object-contain" 
                  />
                </button>
                
                <button 
                  onClick={() => handleBuyNow(product)}
                  className="flex-1 h-11 bg-black text-white font-bold text-sm hover:bg-zinc-800 transition"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;