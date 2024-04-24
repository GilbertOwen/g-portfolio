import { Carousel } from "flowbite-react";
import image1 from "@/public/assets/laptop-analyze.jpg";
import image2 from "@/public/assets/laptop-program.jpg";
import Link from "next/link";

export default function CarouselProject() {
  return (
    <div className="w-full h-[550px]">
      <Carousel slide={false} draggable={false} slideInterval={2000} className="rounded-none">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-[#B5C18E] relative">
          <div className="md:static absolute bg-[rgba(0,0,0,0.3)] md:bg-[inherit] md:text-left text-center top-0 md:items-start items-center flex flex-col pl-4 pr-4 md:pr-0 md:pl-10 py-8 h-full select-none">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F7DCB9] select-none mb-8">
              Portfolio Project
            </h1>
            <p className="text-xl md:text-2xl w-[100%] md:w-[90%] font-semibold select-none mb-4 text-[#F7DCB9]">
              This project is me itself. From this website, you will know about
              my personality, hobby, and etc. The project is this website itself
              though
            </p>
            <p className="font-semibold select-none text-[#F7DCB9]">17-09-2006</p>
            <Link
              href={"/project/g-portfolio"}
              className="text-[#F7DCB9] mb-2 bg-[#DEAC80] select-none block w-fit rounded-lg py-2 mt-auto hover:bg-[#F7DCB9] hover:text-[#DEAC80] transition-all px-10 text-2xl font-semibold"
            >
              Details
            </Link>
          </div>
          <img
            src={image1.src}
            className="block select-none object-cover rounded-none h-full w-auto"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full bg-[#DEAC80] relative">
          <div className="md:static absolute bg-[rgba(0,0,0,0.3)] md:bg-[inherit] md:text-left text-center top-0 md:items-start items-center flex flex-col pl-4 pr-4 md:pr-0 md:pl-10 py-8 h-full select-none">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F7DCB9] mb-8">
              To-do List Project
            </h1>
            <p className="text-xl md:text-2xl w-[90%] font-semibold text-[#F7DCB9] mb-4">
              This project is me itself. From this website, you will know about
              my personality, hobby, and etc. The project is this website itself
              though
            </p>
            <p className="font-semibold select-none text-[#F7DCB9]">17-09-2006</p>
            <Link
              href={"/project/g-portfolio"}
              className="text-[#F7DCB9] mb-2 bg-[#B99470] select-none block w-fit rounded-lg py-2 mt-auto hover:bg-[#F7DCB9] hover:text-[#DEAC80] transition-all px-10 text-2xl font-semibold"
            >
              Details
            </Link>
          </div>
          <img
            src={image2.src}
            className="block object-cover rounded-none h-full w-auto"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}
