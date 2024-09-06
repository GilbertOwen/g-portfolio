"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { useEffect } from "react";

type project = {
  name: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  url: string;
};

export default function ProjectList({ projects }: { projects: project[] }) {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".project-list",
  //       scrub: true,
  //       start: "top center",
  //       end: "+=30%",
  //       toggleActions: "play restart reverse none",
  //     },
  //   });
  //   tl.from(".project-list", {
  //     opacity: 0,
  //     x: -1000,
  //   });
  //   tl.to(".project-list", {
  //     opacity: 1,
  //     x: 0,
  //     duration: 2,
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      exit={{ opacity: 0, y: 100 }}
      className="project-list 2xl:container 2xl:mx-auto grid grid-cols-1 px-4 md:px-20 pb-16 gap-y-20"
    >
      {projects.map((project, index) => (
        <div className="grid grid-cols-1 relative md:grid-cols-2" key={index}>
          <div className="md:static w-full absolute bg-[rgba(0,0,0,0.3)] md:bg-[#DEAC80] md:text-left text-center top-0 md:items-start items-center flex flex-col pl-4 pr-4 md:pr-0 md:pl-10 py-4 md:py-8 h-full select-none">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#F7DCB9] select-none mb-2 sm:mb-4 md:mb-8">
              {project.name}
            </h1>
            <p className="text-xl hidden md:block md:text-2xl w-[100%] md:w-[90%] font-semibold select-none mb-4 text-[#F7DCB9]">
              {project.description}
            </p>
            <p className="font-semibold select-none text-[#F7DCB9]">
              {project.date}
            </p>
            <Link
              href={"/project/" + project.slug}
              className="text-[#F7DCB9] bg-[#B99470] select-none block w-fit rounded-lg py-2 mt-auto hover:bg-[#F7DCB9] hover:text-[#DEAC80] transition-all px-10 text-xl md:text-2xl font-semibold"
            >
              Details
            </Link>
          </div>
          <img
            src={project.image}
            className="block select-none object-cover rounded-none h-full w-full"
            alt=""
          />
        </div>
      ))}
    </motion.div>
  );
}
