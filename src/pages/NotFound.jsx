import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-100 px-6">

            <div className="max-w-2xl w-full text-center relative">

                {/* Decorative Blur */}
                <div className="absolute -top-16 -left-10 w-40 h-40 bg-emerald-300 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-16 -right-10 w-40 h-40 bg-teal-300 opacity-20 blur-3xl rounded-full"></div>

                {/* Main Card */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl px-8 py-14">

                    {/* 404 */}
                    <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent tracking-tight">
                        404
                    </h1>

                    {/* Title */}
                    <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800">
                        Halaman Tidak Ditemukan
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-gray-500 leading-relaxed max-w-lg mx-auto">
                        Maaf, halaman yang Anda tuju tidak tersedia atau mungkin telah dipindahkan.
                        Silakan kembali ke halaman utama untuk melanjutkan aktivitas Anda.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <Link
                            to="/"
                            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-emerald-200 transition-all duration-300"
                        >
                            Kembali ke Dashboard
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-3 border border-emerald-400 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-2xl transition-all duration-300"
                        >
                            Halaman Sebelumnya
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}