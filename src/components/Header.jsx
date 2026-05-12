import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="w-full flex justify-between items-center gap-4 p-4 bg-white rounded-2xl shadow-sm"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative flex-1 max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="w-full border border-gray-200 p-3 pr-10 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
        />

        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>

      {/* Right Section */}
      <div
        id="icons-container"
        className="flex items-center gap-3 flex-shrink-0"
      >
        {/* Notification */}
        <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />

          <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
            50
          </span>
        </div>

        {/* Chart */}
        <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
          <FcAreaChart />
        </div>

        {/* Settings */}
        <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
          <SlSettings />
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-l border-gray-300 pl-4">
          <span className="text-sm text-gray-700 whitespace-nowrap">
            Hello, <b>Zika Dwi Alya Putri</b>
          </span>

          <img
            src="/img/pp.jpg"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
