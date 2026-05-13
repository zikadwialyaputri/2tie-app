export default function AboutSection() {
  const services = [
    {
      icon: "🚀",
      title: "Fast Delivery",
      desc: "Pengiriman cepat langsung ke lokasi Anda dengan layanan terpercaya.",
    },
    {
      icon: "🍔",
      title: "Best Food",
      desc: "Menyediakan makanan berkualitas dari restoran terbaik pilihan pelanggan.",
    },
    {
      icon: "💳",
      title: "Easy Payment",
      desc: "Pembayaran digital mudah dan aman dengan berbagai metode transaksi.",
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      desc: "Menggunakan bahan makanan berkualitas tinggi dan fresh setiap hari.",
    },
    {
      icon: "🛒",
      title: "Easy Ordering",
      desc: "Sistem pemesanan praktis hanya dalam beberapa klik saja.",
    },
    {
      icon: "📍",
      title: "Live Tracking",
      desc: "Pantau perjalanan pesanan makanan secara real-time.",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#f8faf7] py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      {/* Blur */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute w-[450px] h-[450px] bg-green-100 rounded-full top-10"></div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
              alt="About Sedap"
              className="relative z-10 w-[450px] rounded-[40px] shadow-2xl object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-10 -left-5 bg-white px-6 py-5 rounded-3xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                🚚
              </div>

              <div>
                <h4 className="font-bold text-gray-800 text-lg">
                  Fast Delivery
                </h4>

                <p className="text-gray-500 text-sm">
                  Delivery under 30 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
              About Sedap
            </span>

            <h2 className="text-5xl lg:text-6xl font-black leading-tight text-gray-900 mt-8">
              Healthy Food
              <br />
              And Fast Delivery
              <br />
              For
              <span className="text-green-600"> Everyone</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">
              Sedap hadir sebagai platform pemesanan makanan modern yang
              membantu pelanggan menemukan makanan terbaik dengan layanan cepat,
              aman, dan praktis.
            </p>

            <p className="text-gray-500 leading-relaxed mt-5 max-w-xl">
              Kami bekerja sama dengan berbagai restoran terbaik untuk
              menghadirkan pengalaman menikmati makanan yang lebih mudah dan
              menyenangkan.
            </p>

            {/* Mini Features */}
            <div className="space-y-5 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                  ✅
                </div>

                <p className="text-lg font-medium text-gray-700">
                  Fresh ingredients every day
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                  ✅
                </div>

                <p className="text-lg font-medium text-gray-700">
                  Fast and trusted delivery service
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                  ✅
                </div>

                <p className="text-lg font-medium text-gray-700">
                  Easy payment and many promos
                </p>
              </div>
            </div>

            {/* Button */}
            <button className="mt-12 bg-green-600 hover:bg-green-700 transition text-black px-8 py-4 rounded-full shadow-xl font-semibold">
              Learn More
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-100 my-24"></div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {services.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl flex-shrink-0">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mt-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
