import { FaCopyright } from "react-icons/fa6";

export default async function Footer() {
  return (
    <footer className="bg-[#DEAC80] px-2 py-6">
      <div className="flex flex-row gap-x-2 items-center justify-center">
        <FaCopyright color="#F7DCB9" />
        <span className="text-[#F7DCB9] text-base font-semibold">Copyright by Gilbert Owen</span>
      </div>
    </footer>
  );
}
