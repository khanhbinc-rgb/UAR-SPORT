import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const productImageRef = useRef(null);
  
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="py-32 text-center text-xl font-bold">Không tìm thấy sản phẩm!</div>;
  }

  // Logic: Nếu là cúp (dựa theo tên) thì ẩn size
  const isCup = product.name.toLowerCase().includes("cúp");
  const handleAddToCart = () => {
  const img = productImageRef.current;
  const cartIcon = document.getElementById("cart-icon");

  if (!img || !cartIcon) {
    addToCart(product);
    return;
  }

  const imgRect = img.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  const flyingImg = img.cloneNode(true);

  flyingImg.style.position = "fixed";
  flyingImg.style.left = `${imgRect.left}px`;
  flyingImg.style.top = `${imgRect.top}px`;
  flyingImg.style.width = `${imgRect.width}px`;
  flyingImg.style.height = `${imgRect.height}px`;
  flyingImg.style.zIndex = "9999";
  flyingImg.style.pointerEvents = "none";
  flyingImg.style.transition = "all 0.8s ease-in-out";

  document.body.appendChild(flyingImg);

  requestAnimationFrame(() => {
    flyingImg.style.left = `${cartRect.left}px`;
    flyingImg.style.top = `${cartRect.top}px`;
    flyingImg.style.width = "30px";
    flyingImg.style.height = "30px";
    flyingImg.style.opacity = "0.3";
    flyingImg.style.transform = "scale(0.2)";
  });

  setTimeout(() => {
    document.body.removeChild(flyingImg);
    addToCart(product);
  }, 800);
};

  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <div className="flex flex-col md:flex-row gap-16">
        
        {/* CỘT TRÁI: Ảnh */}
        <div className="flex-1">
          <img
  ref={productImageRef}
  src={product.image}
  alt={product.name}
  className="w-full rounded-2xl shadow-sm"
/>
        </div>

        {/* CỘT PHẢI: Thông tin (Đã giới hạn độ rộng bằng max-w-lg) */}
        <div className="flex-1 max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-3 -mt-10">{product.name}</h1>
          <p className="text-xl text-black-600 mb-8"> Giá bán: <span className="font-semibold">{product.price}</span> </p>
          
          <div className="mb-8 p-5 bg-gray-50 rounded-xl border border-gray-100">
            <h3 className="font-bold mb-2">Thông tin sản phẩm:</h3>
            <p className="text-gray-600 leading-relaxed">
              {isCup 
                ? "Sản phẩm mô hình cúp được đúc nguyên khối, mạ vàng sang trọng, phù hợp để làm quà tặng hoặc trưng bày trong không gian làm việc chuyên nghiệp."
                : "Sản phẩm mục đích sưu tầm hoặc tặng bạn bè & người thân. Chất liệu: Hộp mica trong suốt cao cấp, cúp được làm bằng kim loại, mốt số resin, thích hợp trưng bày và sưu tầm."}
            </p>
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>

      {/* SẢN PHẨM LIÊN QUAN */}
      <div className="mt-24 border-t pt-16">
        <h2 className="text-2xl font-bold mb-10">Sản phẩm có thể bạn quan tâm</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products
            .filter((item) => item.id !== Number(id))
            .slice(0, 4)
            .map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="group block">
                <div className="overflow-hidden rounded-xl bg-gray-100 mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-500">{item.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;