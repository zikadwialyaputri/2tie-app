import PageHeader from "../components/PageHeader";

export default function Orders() {
  return (
    <div className="p-4">
      <PageHeader title="Orders" breadcrumb={["Dashboard", "Orders"]}>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Add Order
        </button>
      </PageHeader>

      <h1>Ini halaman Orders</h1>
    </div>
  );
}