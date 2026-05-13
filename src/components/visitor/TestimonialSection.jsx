import testimonials from "../../data/testimonials.json";

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#f8faf7] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </span>

          <h2 className="text-5xl font-black text-gray-900 mt-8">
            What Our Happy
            <span className="text-green-600"> Customer Says</span>
          </h2>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Ribuan pelanggan telah mempercayai Sedap untuk menikmati makanan
            favorit mereka setiap hari.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-24">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex gap-6">
                {/* Avatar */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-32 h-32 rounded-3xl object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1">
                  {/* Name */}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <span className="text-gray-400">|</span>

                    <p className="text-gray-500">{item.role}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-4 mt-3">
                    <h4 className="text-3xl font-black text-green-600">
                      {item.rating}
                    </h4>

                    <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 leading-relaxed mt-5 text-lg">
                    {item.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
