import { useState } from "react";
import { Link } from "react-router-dom";
import { usersAPI } from "../../services/usersAPI";

export default function Register() {
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await usersAPI.register(dataForm);

      setMessage("Registrasi berhasil, silakan login.");

      setDataForm({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setMessage("Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Create Your Account ✨
      </h2>

      {message && (
        <div className="mb-4 p-3 bg-green-100 rounded">{message}</div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Username</label>

          <input
            type="text"
            name="username"
            value={dataForm.username}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Email</label>

          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium mb-1">Password</label>

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 py-2 rounded-lg"
        >
          {loading ? "Loading..." : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        Sudah punya akun?
        <Link to="/login" className="text-green-600 ms-2">
          Login
        </Link>
      </p>
    </div>
  );
}
