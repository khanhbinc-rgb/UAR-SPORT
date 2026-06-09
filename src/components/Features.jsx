function Features() {
  const items = [
    "Miễn phí vận chuyển",
    "Đổi trả 7 ngày",
    "Hỗ trợ 24/7",
    "Cam kết chất lượng",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {items.map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl text-center shadow"
          >
            <h3 className="font-bold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;