function Categories() {
  const categories = [
    "Giày bóng đá",
    "Áo bóng đá",
    "Găng tay",
    "Phụ kiện",
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">
        Danh mục sản phẩm
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <div
            key={item}
            className="h-40 bg-gray-100 rounded-xl flex items-center justify-center text-xl font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;