export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8faf7] min-h-screen flex items-center"
    >
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      {/* Blur */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-green-600 font-semibold text-lg">
              Let’s Enjoy Delicious Food
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-gray-900 mt-6">
              Fresh Food,
              <br />
              Fast Delivery
              <br />
              With
              <span className="text-green-600"> Sedap</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-xl">
              Temukan berbagai makanan favorit dengan layanan delivery cepat,
              praktis, dan berkualitas langsung ke rumah Anda.
            </p>

            {/* Rating */}
            <div className="flex flex-wrap gap-10 mt-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                  🍔
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">4.9 ⭐</h3>

                  <p className="text-gray-500">Best Food Quality</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl">
                  🚚
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">30 Min</h3>

                  <p className="text-gray-500">Fast Delivery</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-12">
              <button className="bg-green-600 hover:bg-green-700 transition text-black px-8 py-4 rounded-full shadow-xl font-semibold">
                Pesan Sekarang
              </button>

              <button className="bg-white hover:bg-gray-100 transition text-gray-800 px-8 py-4 rounded-full shadow-lg font-semibold">
                Explore Menu
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div className="absolute w-[500px] h-[500px] bg-green-100 rounded-full top-10"></div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
              alt="Food"
              className="relative z-10 w-[500px] rounded-[40px] object-cover shadow-2xl"
            />

            {/* Floating Card 1 */}
            <div className="absolute top-28 -left-5 bg-white px-5 py-4 rounded-3xl shadow-xl flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                🥗
              </div>

              <div>
                <h4 className="font-bold text-gray-800">Healthy Food</h4>

                <p className="text-sm text-gray-500">Fresh Everyday</p>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-24 -right-5 bg-white px-5 py-4 rounded-3xl shadow-xl flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                ⭐
              </div>

              <div>
                <h4 className="font-bold text-gray-800">Best Rating</h4>

                <p className="text-sm text-gray-500">Trusted by Customers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-green-600 rounded-t-[40px] mt-24 px-10 py-10 grid md:grid-cols-4 gap-10 text-white">
          <div>
            <h3 className="text-5xl font-black">230</h3>

            <p className="mt-2 text-green-100">Restaurant Partners</p>
          </div>

          <div>
            <h3 className="text-5xl font-black">7K</h3>

            <p className="mt-2 text-green-100">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-5xl font-black">68B</h3>

            <p className="mt-2 text-green-100">Food Delivered</p>
          </div>

          <div>
            <h3 className="text-5xl font-black">10+</h3>

            <p className="mt-2 text-green-100">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
