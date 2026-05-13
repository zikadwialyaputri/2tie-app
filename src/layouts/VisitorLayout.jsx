import { Outlet } from "react-router-dom";

export default function VisitorLayout() {
  return (
    <div className="relative bg-[#f8faf7] text-gray-800 overflow-x-hidden">
      {/* Global Background Pattern */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="grid grid-cols-6 h-full">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="border border-green-100/40"></div>
          ))}
        </div>
      </div>

      {/* Global Blur */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-green-200 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-200 opacity-20 blur-3xl rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
