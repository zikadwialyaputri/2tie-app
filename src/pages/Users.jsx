import { usersAPI } from "../services/usersAPI";
import { useState, useEffect } from "react";
import AlertBox from "../components/AlertBox";
import EmptyState from "../components/EmptyState";
import GenericTable from "../components/GenericTable";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete } from "react-icons/ai";

export default function Users() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([]);

  const [dataForm, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const data = await usersAPI.fetchUsers();
      setUsers(data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data user");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await usersAPI.createUser(dataForm);

      setSuccess("User berhasil ditambahkan!");
      setDataForm({ username: "", email: "", password: "" });

      await loadUsers();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error(err);
      setError("Gagal menambahkan user");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      await usersAPI.deleteUser(id);

      setSuccess("User berhasil dihapus!");
      await loadUsers();

      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error(err);
      setError("Gagal menghapus user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Users App</h2>
      </div>

      {error && <AlertBox type="error">{error}</AlertBox>}
      {success && <AlertBox type="success">{success}</AlertBox>}

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Tambah User Baru</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={dataForm.username}
            onChange={handleChange}
            placeholder="Username"
            disabled={loading}
            required
            className="w-full p-3 border rounded-2xl"
          />

          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Email"
            disabled={loading}
            required
            className="w-full p-3 border rounded-2xl"
          />

          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="Password"
            disabled={loading}
            required
            className="w-full p-3 border rounded-2xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 text-white rounded-2xl"
          >
            {loading ? "Mohon Tunggu..." : "Tambah User"}
          </button>
        </form>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold">
            Daftar User ({users.length})
          </h3>
        </div>

        {loading && <LoadingSpinner text="Memuat user..." />}

        {!loading && users.length === 0 && (
          <EmptyState text="Belum ada user." />
        )}

        {!loading && users.length > 0 && (
          <GenericTable
            columns={["#", "Username", "Email", "Password", "Aksi"]}
            data={users}
            renderRow={(user, index) => (
              <tr key={user.id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{user.username}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.password}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => handleDelete(user.id)}
                  >
                    <AiFillDelete className="text-red-500 text-xl" />
                  </button>
                </td>
              </tr>
            )}
          />
        )}
      </div>
    </div>
  );
}