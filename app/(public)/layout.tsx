import { Fragment } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F7DCB9]">
      {/* <Navbar></Navbar> */}
      <div className="min-h-screen">{children}</div>
      <Footer></Footer>
    </div>
  );
}
