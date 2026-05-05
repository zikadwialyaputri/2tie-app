import { useState } from "react";
import PageHeader from "../components/PageHeader";

const ordersData = [
  {
    order_id: "ORD001",
    customer_name: "Rizky Maulana",
    status: "Completed",
    total_price: 1250000,
    order_date: "2026-05-01",
  },
  {
    order_id: "ORD002",
    customer_name: "Salsa Putri",
    status: "Pending",
    total_price: 899000,
    order_date: "2026-05-02",
  },
  {
    order_id: "ORD003",
    customer_name: "Dimas Pratama",
    status: "Cancelled",
    total_price: 450000,
    order_date: "2026-05-03",
  },
  {
    order_id: "ORD004",
    customer_name: "Nabila Azzahra",
    status: "Completed",
    total_price: 2300000,
    order_date: "2026-05-04",
  },
  {
    order_id: "ORD005",
    customer_name: "Farhan Akbar",
    status: "Pending",
    total_price: 1750000,
    order_date: "2026-05-05",
  },
  {
    order_id: "ORD006",
    customer_name: "Alya Rahma",
    status: "Completed",
    total_price: 650000,
    order_date: "2026-05-06",
  },
  {
    order_id: "ORD007",
    customer_name: "Yoga Saputra",
    status: "Cancelled",
    total_price: 320000,
    order_date: "2026-05-07",
  },
  {
    order_id: "ORD008",
    customer_name: "Putri Lestari",
    status: "Completed",
    total_price: 5400000,
    order_date: "2026-05-08",
  },
  {
    order_id: "ORD009",
    customer_name: "Arif Hidayat",
    status: "Pending",
    total_price: 780000,
    order_date: "2026-05-09",
  },
  {
    order_id: "ORD010",
    customer_name: "Cahya Nugraha",
    status: "Completed",
    total_price: 2990000,
    order_date: "2026-05-10",
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    order_id: "",
    customer_name: "",
    status: "Pending",
    total_price: "",
    order_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      ...form,
      order_id: `ORD${orders.length + 1}`,
    };

    setOrders([...orders, newOrder]);
    setShowForm(false);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <PageHeader
        title="Orders"
        current="Order List"
        onAdd={() => setShowForm(true)}
      />

      {/* TABLE */}
      <div className="mt-6 bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.order_id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3 text-center">{order.order_id}</td>
                <td className="p-3">{order.customer_name}</td>

                {/* STATUS BADGE */}
                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-3 text-center font-medium">
                  Rp {Number(order.total_price).toLocaleString()}
                </td>
                <td className="p-3 text-center text-gray-600">
                  {order.order_date}
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
              Add Order
            </h3>

            <input
              placeholder="Customer Name"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, customer_name: e.target.value })
              }
            />

            <select
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, status: e.target.value })
              }
            >
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <input
              type="number"
              placeholder="Total Price"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, total_price: e.target.value })
              }
            />

            <input
              type="date"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, order_date: e.target.value })
              }
            />

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