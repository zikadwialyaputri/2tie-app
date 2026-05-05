import { useState } from "react";
import PageHeader from "../components/PageHeader";

const customersData = [
  {
    customer_id: "CUST001",
    customer_name: "Rizky Maulana",
    email: "rizky@mail.com",
    phone: "081234560001",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST002",
    customer_name: "Salsa Putri",
    email: "salsa@mail.com",
    phone: "081234560002",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST003",
    customer_name: "Dimas Pratama",
    email: "dimas@mail.com",
    phone: "081234560003",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST004",
    customer_name: "Nabila Azzahra",
    email: "nabila@mail.com",
    phone: "081234560004",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST005",
    customer_name: "Farhan Akbar",
    email: "farhan@mail.com",
    phone: "081234560005",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST006",
    customer_name: "Alya Rahma",
    email: "alya@mail.com",
    phone: "081234560006",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST007",
    customer_name: "Yoga Saputra",
    email: "yoga@mail.com",
    phone: "081234560007",
    loyalty: "Gold",
  },
  {
    customer_id: "CUST008",
    customer_name: "Putri Lestari",
    email: "putri@mail.com",
    phone: "081234560008",
    loyalty: "Silver",
  },
  {
    customer_id: "CUST009",
    customer_name: "Arif Hidayat",
    email: "arif@mail.com",
    phone: "081234560009",
    loyalty: "Bronze",
  },
  {
    customer_id: "CUST010",
    customer_name: "Cahya Nugraha",
    email: "cahya@mail.com",
    phone: "081234560010",
    loyalty: "Gold",
  },
];

export default function Customers() {
  const [showForm, setShowForm] = useState(false);
  const [customers, setCustomers] = useState(customersData);

  const [form, setForm] = useState({
    customer_id: "",
    customer_name: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader
        title="Customers"
        current="Customer List"
        onAdd={() => setShowForm(true)}
      />

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 text-center">{c.customer_id}</td>
                <td className="p-3">{c.customer_name}</td>
                <td className="p-3 text-gray-600">{c.email}</td>
                <td className="p-3 text-center">{c.phone}</td>
                <td
                  className={`p-3 text-center font-semibold ${
                    c.loyalty === "Gold"
                      ? "text-yellow-500"
                      : c.loyalty === "Silver"
                      ? "text-gray-500"
                      : "text-orange-600"
                  }`}
                >
                  {c.loyalty}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-80 flex flex-col gap-3 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-center">
              Add Customer
            </h3>

            <input
              placeholder="ID"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, customer_id: e.target.value })
              }
            />
            <input
              placeholder="Name"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, customer_name: e.target.value })
              }
            />
            <input
              placeholder="Email"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            <input
              placeholder="Phone"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <select
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, loyalty: e.target.value })
              }
            >
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>

            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded">
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}