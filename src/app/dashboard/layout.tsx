import Sidebar from "../components/Sidebar";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (<div className="flex">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      {children}
    </div>
  </div>
);
  }