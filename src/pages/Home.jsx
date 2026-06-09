import Hero from "../components/Hero";
// Ẩn cả 2 mục Features và Categories theo ý bạn
// import Features from "../components/Features";
// import Categories from "../components/Categories";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      
      {/* Đã ẩn hẳn cả hàng Features (Chính sách) */}
      {/* <Features /> */}
      
      {/* Đã ẩn hẳn cả hàng Categories (Danh mục sản phẩm) */}
      {/* <Categories /> */}
      
      <Products />
      <Testimonials />
    </>
  );
}

export default Home;