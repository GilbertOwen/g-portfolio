"use client";
import { useState } from "react";
import { FaCaretLeft, FaCaretRight, FaCss3Alt, FaHtml5 } from "react-icons/fa6";

export default function Studied({
  lessons,
}: {
  lessons: { name: string; icon: JSX.Element; description: string }[];
}) {
  const studiedDescription = "Along my journey to go deep into technology world, i've studied things below :"
  const [order, setOrder] = useState<number>(0);
  const handleButton = (type: string) => {
    if (type === "prev") {
      if (order - 1 < 0) {
        setOrder(lessons.length - 1);
      } else {
        setOrder(order - 1);
      }
    } else if (type === "next") {
      if (order + 1 > lessons.length - 1) {
        setOrder(0);
      } else {
        setOrder(order + 1);
      }
    }
  };
  return (
    <section
      id="studied"
      className="2xl:container 2xl:mx-auto min-h-screen flex flex-col pt-28 px-4 sm:px-12 md:px-24 lg:px-40 xl:px-50"
    >
      <h1 className="text-[40px] md:text-5xl font-semibold text-center select-none text-[#B99470] mb-6">
        Studied
      </h1>
      <p className="text-center font-regular text-xl xl:text-2xl select-none text-[#B99470] mb-8">
        {studiedDescription}
      </p>
      <div className="flex flex-row items-center gap-x-1 md:gap-x-4 w-fit mx-auto mb-4">
        <FaCaretLeft
          color="#B5C18E"
          size={40}
          className="cursor-pointer"
          onClick={() => handleButton("prev")}
        />
        <div className="h-[100px] w-[200px] md:h-[200px] md:w-[300px] flex flex-col items-center justify-center bg-[#DEAC80] shadow-lg rounded-md">
          {lessons[order]?.icon}
        </div>
        <FaCaretRight
          color="#B5C18E"
          size={40}
          className="cursor-pointer"
          onClick={() => handleButton("next")}
        />
      </div>
      <div className="flex flex-col text-center gap-y-2 mx-auto">
        <h2 className="text-[#C8A682] text-2xl font-semibold select-none">
          {lessons[order]?.name}
        </h2>
        <p className="text-base md:text-lg text-[#C8A682] font-refular select-none">
          {lessons[order]?.description}
        </p>
      </div>
    </section>
  );
}
