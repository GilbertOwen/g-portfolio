import Footer from "./_components/Footer";
import Sidebar from "./_components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7DCB9]">
      <Sidebar></Sidebar>
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
}
