import { FiPhone, FiMail } from "react-icons/fi";

const ContactSection = () => {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden py-28 bg-[#f8faf7]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      {/* Blur Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-200 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* TOP TITLE */}
        <div className="text-center mb-20">
          <span className="text-green-600 font-semibold text-lg">
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mt-6 leading-tight">
            Get In Touch
            <br />
            With
            <span className="text-green-600"> Sedap</span>
          </h2>

          <p className="text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed text-lg">
            Kami siap membantu Anda untuk pertanyaan, dukungan layanan, maupun
            kerja sama bersama Sedap.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            {/* PHONE CARD */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-10 rounded-[35px] shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-white text-green-600 p-4 rounded-2xl">
                  <FiPhone className="text-2xl" />
                </div>

                <h3 className="text-3xl font-bold">Call Us Directly</h3>
              </div>

              <p className="text-4xl font-black tracking-wide">
                +62 812-3456-7890
              </p>

              <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg">
                Contact Us
              </button>
            </div>

            {/* EMAIL CARD */}
            <div className="bg-white p-10 rounded-[35px] shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 text-green-600 p-4 rounded-2xl">
                  <FiMail className="text-2xl" />
                </div>

                <h3 className="text-3xl font-bold text-gray-800">
                  Chat With Team
                </h3>
              </div>

              <p className="text-xl text-gray-700 font-semibold">
                support@sedap.com
              </p>

              <button className="mt-10 bg-green-500 hover:bg-green-600 transition duration-300 text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-10 rounded-[35px] shadow-xl hover:shadow-2xl transition duration-300">
            <h3 className="text-4xl font-black text-gray-900 mb-10">
              Send Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-200 rounded-2xl px-5 py-4 w-full outline-none focus:border-green-500 transition"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-200 rounded-2xl px-5 py-4 w-full outline-none focus:border-green-500 transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-200 rounded-2xl px-5 py-4 w-full outline-none focus:border-green-500 transition"
              />

              <textarea
                rows="7"
                placeholder="Write your message..."
                className="border border-gray-200 rounded-2xl px-5 py-4 w-full outline-none focus:border-green-500 transition"
              />

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 transition duration-300 text-black px-10 py-4 rounded-full font-semibold shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
