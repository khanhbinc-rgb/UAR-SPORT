import { useState, useEffect } from "react";
import cupSample from "../assets/hero.png"; 
import vietqrLogo from "../assets/logo vietqr.png";
import codIcon from "../assets/box.png";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();
  
  // --- CẤU HÌNH ---
  const [showQR, setShowQR] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // Thêm state này
  const BANK_BIN = "970407";
  const BANK_ACCOUNT = "7218088888";
  const ACCOUNT_NAME = "TRUONG DUY KHANH";
  // ----------------

  const [formData, setFormData] = useState({
    email: "", name: "", phone: "", address: "",
    province: "", district: "", ward: "", note: "",
    paymentMethod: "vietqr"
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce((total, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ""));
    return total + price;
  }, 0);
  const shippingFee = formData.paymentMethod === "cod" ? 30000 : 0;

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=1")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((err) => console.error(err));
  }, []);

  const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    const selectedProvince = provinces.find(p => p.code === parseInt(provinceCode));
    setFormData({ ...formData, province: selectedProvince ? selectedProvince.name : "", district: "", ward: "" });
    setDistricts([]); setWards([]);
    if (provinceCode) {
      fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        .then((res) => res.json())
        .then((data) => setDistricts(data.districts));
    }
  };

  const handleDistrictChange = (e) => {
    const districtCode = e.target.value;
    const selectedDistrict = districts.find(d => d.code === parseInt(districtCode));
    setFormData({ ...formData, district: selectedDistrict ? selectedDistrict.name : "", ward: "" });
    setWards([]);
    if (districtCode) {
      fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        .then((res) => res.json())
        .then((data) => setWards(data.wards));
    }
  };

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // --- HÀM XỬ LÝ ĐẶT HÀNG ---
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.province) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    
    if (formData.paymentMethod === "vietqr") {
      setShowQR(true);
    } else {
      setLoading(true);
      // Giả lập gửi dữ liệu...
      setTimeout(() => {
        setLoading(false);
        setShowSuccess(true);
      }, 1000);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-28 pb-12 font-sans text-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CỘT TRÁI */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h1 className="text-xl font-bold text-black tracking-wide border-b border-black pb-2 uppercase">
            UAR SPORT - MÔ HÌNH CÚP BÓNG ĐÁ
          </h1>

          <div>
            <h2 className="text-base font-bold mb-4 flex justify-between items-center">
              Thông tin nhận hàng
            </h2>
            <div className="flex flex-col gap-3">
              <input type="email" name="email" placeholder="Email (tùy chọn)" onChange={handleInputChange} className="w-full p-2.5 border border-zinc-300 rounded text-sm focus:outline-black bg-white" />
              <input type="text" name="name" placeholder="Họ và tên" onChange={handleInputChange} required className="w-full p-2.5 border border-zinc-300 rounded text-sm focus:outline-black bg-white" />
              <input type="tel" name="phone" placeholder="Số điện thoại" onChange={handleInputChange} required className="w-full p-2.5 border border-zinc-300 rounded text-sm focus:outline-black bg-white" />
              <input type="text" name="address" placeholder="Địa chỉ chi tiết" onChange={handleInputChange} required className="w-full p-2.5 border border-zinc-300 rounded text-sm focus:outline-black bg-white" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <select onChange={handleProvinceChange} required className="p-2.5 border border-zinc-300 rounded text-xs focus:outline-black bg-white">
                  <option value="">-- Tỉnh/Thành --</option>
                  {provinces.map((p) => <option key={p.code} value={p.code}>{p.name}</option>)}
                </select>
                <select onChange={handleDistrictChange} required disabled={districts.length === 0} className="p-2.5 border border-zinc-300 rounded text-xs focus:outline-black bg-white disabled:bg-zinc-100">
                  <option value="">-- Quận/Huyện --</option>
                  {districts.map((d) => <option key={d.code} value={d.code}>{d.name}</option>)}
                </select>
                <select name="ward" onChange={handleInputChange} required disabled={wards.length === 0} className="p-2.5 border border-zinc-300 rounded text-xs focus:outline-black bg-white disabled:bg-zinc-100">
                  <option value="">-- Phường/Xã --</option>
                  {wards.map((w) => <option key={w.code} value={w.name}>{w.name}</option>)}
                </select>
              </div>
              <textarea name="note" placeholder="Ghi chú (tùy chọn)" rows="3" onChange={handleInputChange} className="w-full p-2.5 border border-zinc-300 rounded text-sm focus:outline-black resize-none bg-white"></textarea>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold mb-3">Thanh toán</h2>
            <div className="border border-zinc-300 rounded divide-y divide-zinc-200 bg-white">
              <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-100">
                <div className="flex items-center gap-3">
                  <input type="radio" name="paymentMethod" value="vietqr" checked={formData.paymentMethod === "vietqr"} onChange={handleInputChange} className="accent-black w-4 h-4" />
                  <span className="text-sm">Quét mã QR chuyển khoản (Free Ship)</span>
                </div>
                <img src={vietqrLogo} alt="VietQR" className="h-4 object-contain" />
              </label>
              <label className="flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-100">
                <div className="flex items-center gap-3">
                  <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === "cod"} onChange={handleInputChange} className="accent-black w-4 h-4" />
                  <span className="text-sm">Thanh toán khi giao hàng (COD)</span>
                </div>
                <img src={codIcon} alt="COD" className="h-5 object-contain" />
              </label>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI */}
        <div className="lg:col-span-5 bg-zinc-100 p-6 rounded-lg border border-zinc-200 h-fit flex flex-col gap-5">
          <h2 className="text-base font-bold border-b border-black pb-2">Đơn hàng ({cart.length} sản phẩm)</h2>
          <div className="border-b border-zinc-300 pb-4 space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border border-zinc-300 rounded bg-white" />
                <div className="flex-1">
                  <h3 className="text-xs font-semibold leading-tight">{item.name}</h3>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-sm font-medium">{item.price}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-500 text-xs hover:underline">Xóa</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-sm border-b border-zinc-300 pb-4">
            <div className="flex justify-between text-zinc-600"><span>Tạm tính</span><span>{totalAmount.toLocaleString("vi-VN")}đ</span></div>
            <div className="flex justify-between text-zinc-600"><span>Phí vận chuyển</span><span>{formData.paymentMethod === "cod" ? "30.000đ" : "Miễn phí"}</span></div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-base font-medium">Tổng cộng</span>
            <span className="text-xl font-bold">{ (totalAmount + shippingFee).toLocaleString("vi-VN") }đ</span>
          </div>

          <div className="flex justify-between items-center mt-2 gap-4">
            <button onClick={() => window.location.href = "/"} className="text-xs text-zinc-500 hover:text-black hover:underline">‹ Quay về trang chủ</button>
            <button onClick={handleOrderSubmit} disabled={loading} className="bg-black hover:bg-zinc-800 text-white font-bold px-8 py-3 rounded text-sm transition uppercase disabled:bg-zinc-400">
              {loading ? "ĐANG XỬ LÝ..." : "ĐẶT HÀNG"}
            </button>
          </div>
        </div>
      </div>

{/* MODAL QR */}
      {showQR && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center relative">
            {/* NÚT THOÁT X */}
            <button 
              onClick={() => setShowQR(false)} 
              className="absolute top-2 right-2 text-zinc-400 hover:text-black text-2xl font-bold px-3 py-1"
            >
              ×
            </button>
            
            <h2 className="font-bold mb-4">Quét mã QR thanh toán</h2>
            <img 
              src={`https://img.vietqr.io/image/${BANK_BIN}-${BANK_ACCOUNT}-compact.png?amount=${totalAmount + shippingFee}&addInfo=THANH TOAN DH&accountName=${encodeURIComponent(ACCOUNT_NAME)}`} 
              alt="QR" 
              className="w-full mb-4" 
            />
            <button 
              onClick={() => { setShowQR(false); setShowSuccess(true); }} 
              className="w-full bg-black text-white py-2 rounded text-sm uppercase font-bold"
            >
              Đã thanh toán
            </button>
          </div>
        </div>
      )}

      {/* MODAL THÀNH CÔNG */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-2">Đặt hàng thành công!</h2>
            <p className="text-sm text-zinc-600 mb-6">Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ sớm nhất.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="w-full bg-black text-white py-2 rounded text-sm uppercase font-bold"
            >
              Quay Lại
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;