import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1">
      {/* header */}
      <Header />
      <div className="flex flex-col lg:flex-row bg-[#201f1f] flex-1">
        {/* Siderbar */}
        <Sidebar />
        <div className="flex-1 justify-center flex lg:justify-start items-start max-w-5xl mx-auto w-full ">
          {children}
        </div>
      </div>
    </div>
  );
}
export default AdminLayout;
