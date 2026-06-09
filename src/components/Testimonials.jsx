function Testimonials() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Khách hàng nói gì?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-4">
              Mô hình rất đẹp, giao hàng nhanh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-4">
              Cúp cầm đằm tay, chắc chắn, 10đ.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-4">
              Shop tư vấn rất nhiệt tình.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;