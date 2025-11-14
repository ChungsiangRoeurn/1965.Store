export default function DashboardHome() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-sm text-gray-500">Total Sales</h2>
          <p className="text-xl font-semibold">$12,430</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-sm text-gray-500">Orders</h2>
          <p className="text-xl font-semibold">320</p>
        </div>
        <div className="border p-4 rounded-lg shadow-sm">
          <h2 className="text-sm text-gray-500">Active Products</h2>
          <p className="text-xl font-semibold">84</p>
        </div>
      </div>
    </main>
  );
}
