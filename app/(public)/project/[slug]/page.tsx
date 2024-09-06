"use client";
import { Fragment } from "react";
import image1 from "@/public/assets/laptop-program.jpg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectDetailPage() {
  const project = {
    name: "To-do List Project",
    slug: "whado",
    createdAt: "31-06-2024",
    description:
      "This project is me itself. From this website, you will know about my personality, hobby, and etc. The project is this website itself though",
    image: image1.src,
    url: "https://to-do-list-project-two-ivory.vercel.app/",
  };
  const projects = [
    
  ];
  return (
    <Fragment>
      <div className="w-full flex flex-col pt-24 md:pt-28 pb-12 overflow-hidden relative gap-y-10">
        <motion.img
          initial={{
            opacity: 0,
            x: -1400,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "linear",
            },
          }}
          src={image1.src}
          className="block select-none object-cover object-center rounded-none h-[320px] md:h-[500px] w-full"
          alt=""
        />
        <div className="2xl:container 2xl:mx-auto grid grid-cols-1 px-4 md:px-20 pb-12">
          <div className="content-header w-fit mx-auto mb-10">
            <motion.h1
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: 1,
                  ease: "linear",
                },
              }}
              className="text-[36px] md:text-[48px] uppercase text-center font-semibold text-[#DEAC80] px-2 "
            >
              {project.name}
            </motion.h1>
            <motion.hr
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: 1.3,
                  ease: "linear",
                },
              }}
              className="h-1 bg-[#B5C18E] border-[#B5C18E] w-full mx-auto"
            />
            <motion.p
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  delay: 1.6,
                  ease: "linear",
                },
              }}
              className="text-[#DEAC80] text-[16px] font-medium text-center mt-1"
            >
              {project.createdAt}
            </motion.p>
          </div>
          <motion.p
            initial={{
              opacity: 0,
              x: -200,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 1.9,
                ease: "linear",
              },
            }}
            className="text-[16px] md:text-[24px] w-full md:w-[80%] lg:w-[70%] mx-auto font-medium text-[#DEAC80] text-center"
          >
            {project.description}
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.3,
              delay: 2.2,
              ease: "linear",
            },
          }}
          className="2xl:container 2xl:mx-auto mx-auto w-[90%] md:w-[80%] lg:w-[70%] place-content-center grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 md:gap-x-10"
        >
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
        </motion.div>
      </div>
    </Fragment>
  );
}
