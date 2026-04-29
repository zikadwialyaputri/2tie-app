import {Link} from "react-router-dom"; 

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F9FBFB] px-6 py-24 sm:py-32 lg:px-8 font-primary">
      <div className="text-center">
        <p className="text-3xl font-bold text-[#0B332F]">404</p>
        
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#0B332F] sm:text-5xl">
          Halaman tidak ditemukan
        </h1>
        
        <p className="mt-6 text-base leading-7 text-[#5C5C5C] max-w-xl">
          Maaf, menu atau halaman yang Anda cari tampaknya tidak ada web kami. Mungkin kamu salah ketik alamat.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#1CCB7E] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#159e62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1CCB7E] transition-all"
          >
            Kembali ke Dashboard
          </Link>
          
          <Link href="/help" className="text-sm font-semibold text-[#0B332F] hover:text-[#1CCB7E]">
            Hubungi Dukungan <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}