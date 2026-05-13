import products from "../../data/products.json";

export default function ProductSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-white py-32">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      {/* Blur */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-green-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-green-600 font-semibold text-lg">
            Popular Menu
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 leading-tight">
            Delicious Food
            <br />
            For Your Daily
            <span className="text-green-600"> Mood</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
            Nikmati berbagai pilihan makanan favorit dengan kualitas premium,
            rasa terbaik, dan layanan cepat langsung ke rumah Anda.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
          {products.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[35px] overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                {/* Badge */}
                <div className="absolute top-5 left-5 z-20 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Best Seller
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category */}
                <span className="text-green-600 font-semibold text-sm">
                  Fresh Food
                </span>

                {/* Title */}
                <h3 className="text-3xl font-black text-gray-900 mt-3">
                  {item.name}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 leading-relaxed mt-5">
                  Makanan lezat dengan bahan berkualitas tinggi dan rasa yang
                  memuaskan setiap hari.
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-10">
                  {/* Price */}
                  <div>
                    <p className="text-sm text-gray-400">Price</p>

                    <h4 className="text-3xl font-black text-green-600">
                      Rp {item.price}
                    </h4>
                  </div>

                  {/* Button */}
                  <button className="bg-green-600 hover:bg-green-700 transition duration-300 text-black px-6 py-4 rounded-full shadow-xl font-semibold">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-20">
          <button className="bg-white border border-green-200 hover:bg-green-600 hover:text-white transition duration-300 text-gray-800 px-10 py-5 rounded-full shadow-lg font-semibold">
            Explore More Menu
          </button>
        </div>
      </div>
    </section>
  );
}
