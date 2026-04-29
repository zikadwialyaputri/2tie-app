export default function ErrorPage({ code, message, image }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      
      {/* Image */}
      <img src={image} className="w-96 mb-8" />

      {/* Code */}
      <h1 className="text-7xl font-bold text-gray-800">{code}</h1>

      {/* Message */}
      <p className="text-lg text-gray-500 mt-4">{message}</p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 bg-hijau text-white rounded-xl shadow">
        Back to Dashboard
      </button>
    </div>
  );
}