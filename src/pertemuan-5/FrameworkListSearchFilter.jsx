import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkListSearchFilter() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");

  		/*Inisialisasi DataForm*/
		const [dataForm, setDataForm] = useState({
			searchTerm: "",
			selectedTag: "",
			/*Tambah state lain beserta default value*/
			});
		
		/*Inisialisasi Handle perubahan nilai input form*/
		const handleChange = (evt) => {
			const { name, value } = evt.target;
			setDataForm({
				...dataForm,
				[name]: value,
			});
		};

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const _selectedTag = dataForm.selectedTag.toString();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = _selectedTag
      ? framework.tags.includes(_selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Framework Explorer</h1>
        <p className="text-gray-500">Temukan tools terbaik untuk project masa depan Anda.</p>
      </div>

      {/* Filter Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="md:col-span-2 relative">
          <input
            type="text"
            placeholder="Cari nama atau deskripsi..."
            className="w-full p-3 pl-10 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            onChange={handleChange}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>

        <select
          className="w-full p-3 border border-gray-200 rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
          onChange={handleChange}
        >
          <option value="">Semua Kategori</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Grid List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFrameworks.length > 0 ? (
          filteredFrameworks.map((item) => (
            <div
              key={item.id}
              className="group border border-gray-100 p-6 rounded-2xl shadow-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h2>
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
                    {item.details.releaseYear}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="text-sm text-gray-500 mb-6">
                  <p>Dev: <span className="font-semibold text-gray-700">{item.details.developer}</span></p>
                </div>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.details.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Visit Official Website
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-400 text-lg">Tidak ada framework yang cocok dengan pencarian Anda.</p>
          </div>
        )}
      </div>
    </div>
  );
}