"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="bg-[#DEAC80]">
      <nav className="w-full px-4 py-4 flex flex-col">
        <GiHamburgerMenu
          size={36}
          color="#F7DCB9"
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden hover:opacity-60 mr-1 cursor-pointer flex self-end"
        />
        <ul
          className={`${
            isOpen
              ? "flex top-0 duration-300 rounded-md w-full self-end bg-[#B99470] px-4 py-4 mt-4"
              : "hidden top-[-999px] duration-300"
          } gap-y-4 sm:w-full sm:bg-inherit sm:px-0 text-2xl sm:mt-0 sm:py-0 sm:flex flex-col relative sm:static sm:flex-row items-end gap-x-24 transition-all duration-300 ease-in justify-center`}
        >
          <li className="order-2 sm:order-1 w-full h-full sm:w-fit">
            <Link
              href={"/"}
              className="text-[#F7DCB9] text-end w-full block font-semibold hover:text-opacity-60 duration-200 ease-in-out"
            >
              Project
            </Link>
          </li>
          <li className="order-1 sm:order-2 w-full sm:w-fit">
            <Link
              href={"/"}
              className="text-[#F7DCB9] text-end w-full block sm:flex font-semibold hover:text-opacity-60 duration-200 ease-in-out"
            >
              Main
            </Link>
          </li>
          <li className="order-3 w-full sm:w-fit">
            <Link
              href={"/"}
              className="text-[#F7DCB9] text-end w-full block font-semibold hover:text-opacity-60 duration-200 ease-in-out"
            >
              More
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
