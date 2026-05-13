import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b border-green-100"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between py-5">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            {/* Logo Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-3xl">🍔</span>
            </div>

            {/* Logo Text */}
            <div>
              <h1 className="text-3xl font-black text-gray-900 leading-none">
                Se<span className="text-green-600">dap</span>
              </h1>

              <p className="text-xs text-gray-500 tracking-wide mt-1">
                Healthy Food & Fast Delivery
              </p>
            </div>
          </div>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">
            <a
              href="#home"
              className="hover:text-green-600 transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-green-600 transition duration-300"
            >
              About
            </a>

            <a
              href="#products"
              className="hover:text-green-600 transition duration-300"
            >
              Menu
            </a>

            <a
              href="#testimonials"
              className="hover:text-green-600 transition duration-300"
            >
              Reviews
            </a>

            <a
              href="#footer"
              className="hover:text-green-600 transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-5">
            {/* Sign In */}
            <Link
              to="/login"
              className="hidden md:block text-gray-700 hover:text-green-600 font-semibold transition duration-300"
            >
              Sign In
            </Link>

            {/* Sign Up Button */}
            <Link
              to="/register"
              className="bg-green-500 hover:bg-green-600 transition duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
