// 1. IMPORT LOGO Ở ĐẦU FILE (Hãy đảm bảo bạn đã bỏ file ảnh logo.png vào thư mục src/assets)
import logoWebsite from "../assets/Logo uar sport đen.png";

function Footer() {
  return (
    // Đã sửa từ mt-20 thành mt-0 để xóa bỏ khoảng trắng thừa với phần trên
    <footer className="bg-zinc-100 text-zinc-800 font-sans mt-0">


      {/* PHẦN 2: CÁC CỘT THÔNG TIN MENU CHÍNH */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-14">
        
        {/* Cột 1: Hỗ trợ */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base tracking-wider uppercase">Hỗ trợ</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600 leading-relaxed">
            <p>
              Quý khách có thể liên hệ với chúng tôi qua Hotline: 
              <span className="font-semibold text-zinc-900 block">084.578.6886</span>
              Facebook - Zalo - Gmail Hoặc các phương thức liên lạc khác.
            </p>
          </div>
        </div>

        {/* Cột 2: Dịch vụ */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base tracking-wider uppercase">Dịch vụ</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <p className="hover:text-amber-500 cursor-pointer">Dịch Vụ Bảo Hành</p>
            <p className="hover:text-amber-500 cursor-pointer">Dịch Vụ Cá Nhân Hóa</p>
            <p className="hover:text-amber-500 cursor-pointer">Nghệ Thuật Tặng Quà</p>
            <p className="hover:text-amber-500 cursor-pointer">Tải Ứng Dụng Của Chúng Tôi</p>
          </div>
        </div>

        {/* Cột 3: Về UAR SPORTS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base tracking-wider uppercase">Về UAR SPORTS</h3>
          <div className="flex flex-col gap-2 text-sm text-zinc-600">
            <p className="hover:text-amber-500 cursor-pointer">Nghệ Thuật & Thời Trang</p>
            <p className="hover:text-amber-500 cursor-pointer">Phát Triển Bền Vững</p>
            <p className="hover:text-amber-500 cursor-pointer">Tin Mới Nhất</p>
            <p className="hover:text-amber-500 cursor-pointer">Nghề Nghiệp</p>

          </div>
        </div>

        {/* Cột 4: Kết nối */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-base tracking-wider uppercase">Kết nối với chúng tôi</h3>
          <div className="flex flex-col gap-3 text-sm text-zinc-600">
            <p>Đăng ký nhận thư điện tử để cập nhật những tin tức mới nhất từ Uar Sports.</p>
            <p className="font-medium text-zinc-900 hover:text-amber-500 cursor-pointer mt-1">
              Theo Dõi Chúng Tôi
            </p>
          </div>
        </div>

      </div>

      {/* PHẦN 3: ĐỊA CHỈ & THƯƠNG HIỆU LỚN DƯỚI CÙNG */}
      <div className="bg-zinc-200/60 py-10 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Khối thông tin địa chỉ bên trái */}
          <div className="text-xs text-zinc-600 flex flex-col gap-1">
            <h4 className="font-bold text-zinc-800 text-sm mb-1">Địa Chỉ</h4>
            <p>460/44 Đ. Khương Đình, Hạ Đình, Thanh Xuân, Hà Nội</p>
            <p>SĐT: 084.578.6886</p>
            <p>Gmail: uarsport@gmail.com</p>
          </div>

          {/* ĐÃ THAY THẾ: Chỗ chữ UAR SPORTS cũ giờ là thẻ hiện ảnh logo của bạn */}
          <div className="flex items-center justify-center">
            <img 
              src={logoWebsite} 
              alt="Logo Uar Sports" 
              className="h-16 w-auto object-contain max-w-[200px]" 
              // Bạn có thể chỉnh h-16 thành h-12 hoặc h-20 để logo to/nhỏ lại tùy ý nhé
            />
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;