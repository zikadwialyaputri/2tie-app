import PageHeader from "../components/PageHeader";

export default function Customers() {
  return (
    <div className="p-4">
      <PageHeader title="Customers" breadcrumb={["Dashboard", "Customers"]}>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Add Customer
        </button>
      </PageHeader>

      <h1>Ini halaman Customers</h1>
    </div>
  );
}