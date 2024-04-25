import { Fragment } from "react";
import image1 from "@/public/assets/laptop-program.jpg";
import Link from "next/link";

export default async function ProjectDetailPage() {
  const project = {
    description:
      "This project is a reflection of myself, encapsulating my personality, interests, and experiences. Through this website, visitors will gain insights into who I am, my passions, and the work I've done. Every aspect of this portfolio is meticulously crafted to showcase not just my skills but also my unique identity. From the design elements to the content, each detail is a deliberate choice that represents me authentically. This website serves as both a professional showcase and a personal statement, allowing others to connect with me on a deeper level and understand what drives me creatively and professionally.",
    name: "Portfolio Project",
    createdAt: '19-07-2000'
    };
  return (
    <Fragment>
      <div className="w-full flex flex-col pt-24 md:pt-28 pb-12 overflow-hidden relative gap-y-10">
        <img
          src={image1.src}
          className="block select-none object-cover object-center rounded-none h-[570px] w-full"
          alt=""
        />
        <div className="2xl:container 2xl:mx-auto grid grid-cols-1 px-4 md:px-20 pb-16">
          <div className="content-header w-fit mx-auto mb-10">
            <h1 className="text-[48px] uppercase font-semibold text-[#DEAC80] px-4 ">
              {project.name}
            </h1>
            <hr className="h-1 bg-[#B5C18E] border-[#B5C18E] w-full mx-auto" />
            <p className="text-[#DEAC80] text-[16px] font-medium text-center mt-2">
              {project.createdAt}
            </p>
          </div>
          <p className="text-[32px] font-medium text-[#DEAC80] text-center">
            {project.description}
          </p>
        </div>
        <div className="px-20 place-content-center grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-10">
          <Link
            target="_blank"
            href={"https://github.com/GilbertOwen/g-portfolio"}
            className="py-5 rounded-md px-4 text-lg md:text-2xl font-semibold text-[#F7DCB9] flex flex-col items-center justify-center cursor-pointer bg-[#B5C18E]"
          >
            Github
          </Link>
          <Link
            href={"http://g-portfolio-alpha.vercel.app/"}
            className="py-5 rounded-md px-4 text-lg md:text-2xl font-semibold text-[#F7DCB9] flex flex-col items-center justify-center cursor-pointer bg-[#B5C18E]"
          >
            Vercel
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
