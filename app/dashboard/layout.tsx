import Sidebar from "@/components/layout/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      <Sidebar currentPath="" />
      <main className="flex-1 p-6 ml-64">{children}</main>
    </div>
  );
}
