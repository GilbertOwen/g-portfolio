"use client";
import { Carousel } from "flowbite-react";
import image1 from "@/public/assets/laptop-analyze.jpg";
import image2 from "@/public/assets/laptop-program.jpg";
import Link from "next/link";
import { Fragment, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function CarouselProject() {
  useEffect(() => {
    gsap.from(".scroll-animate", {
      opacity: 0.4,
      y: -10,
    });
    gsap.to(".scroll-animate", {
      opacity: 1,
      y: 0,
      repeat:-1,
      yoyo:true
    });
  });
  return (
    <Fragment>
      <div className="w-full h-[700px] flex flex-col pt-24 md:pt-28 pb-12 overflow-hidden relative">
        <Carousel
          slide={true}
          draggable={false}
          slideInterval={5000}
          leftControl={"<"}
          rightControl={">"}
          color="#DEAC80"
          className="rounded-none w-full h-full relative overflow-hidden bg-[#B5C18E]"
        >
          <div className="2xl:container 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full">
            <div className="md:static absolute bg-[rgba(0,0,0,0.3)] md:bg-[inherit] md:text-left text-center top-0 justify-center md:items-start items-center flex flex-col pl-4 pr-4 md:pr-0 md:pl-10 py-8 h-full select-none">
              <motion.h1
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.3 },
                }}
                className="text-4xl md:text-5xl font-semibold text-[#F7DCB9] select-none mb-4"
              >
                Portfolio Project
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, duration: 0.3 },
                }}
                className="text-xl md:text-2xl w-full md:w-[90%] font-semibold select-none mb-4 text-[#F7DCB9]"
              >
                This project is me itself. From this website, you will know
                about my personality, hobby, and etc. The project is this
                website itself though
              </motion.p>
              <motion.p
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.9, duration: 0.3 },
                }}
                className="font-semibold select-none text-[#F7DCB9] mb-8"
              >
                17-09-2006
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 1.2, duration: 0.3 },
                }}
                className="mt-8"
              >
                <Link
                  href={"/project/g-portfolio"}
                  className="text-[#F7DCB9] mb-2 bg-[#DEAC80] select-none block w-fit rounded-lg py-2 hover:bg-[#F7DCB9] hover:text-[#DEAC80] transition-all px-10 text-2xl font-semibold"
                >
                  Details
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: 600,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.9, duration: 0.6 },
              }}
              className="h-full"
            >
              <img
                src={image1.src}
                className="block select-none object-cover rounded-none h-full w-full"
                alt=""
              />
            </motion.div>
          </div>
          <div className="2xl:container 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full bg-[#DEAC80]">
            <div className="md:static absolute bg-[rgba(0,0,0,0.3)] md:bg-[inherit] md:text-left text-center top-0 justify-center md:items-start items-center flex flex-col pl-4 pr-4 md:pr-0 md:pl-10 py-8 h-full select-none">
              <motion.h1
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.3 },
                }}
                className="text-4xl md:text-5xl font-semibold text-[#F7DCB9] mb-4"
              >
                To-do List Project
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, duration: 0.3 },
                }}
                className="text-xl md:text-2xl w-[90%] font-semibold text-[#F7DCB9] mb-4"
              >
                This project is me itself. From this website, you will know
                about my personality, hobby, and etc. The project is this
                website itself though
              </motion.p>
              <motion.p className="font-semibold select-none text-[#F7DCB9] mb-8">
                17-09-2006
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.9, duration: 0.3 },
                }}
                className="mt-8"
              >
                <Link
                  href={"/project/g-portfolio"}
                  className="text-[#F7DCB9] mb-2 bg-[#B99470] select-none block w-fit rounded-lg py-2 justify-self-end hover:bg-[#F7DCB9] hover:text-[#DEAC80] transition-all px-10 text-2xl font-semibold"
                >
                  Details
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                x: 600,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.9, duration: 0.6 },
              }}
              className="h-full"
            >
              <img
                src={image2.src}
                className="block object-cover rounded-none h-full w-auto"
                alt=""
              />
            </motion.div>
          </div>
        </Carousel>
      </div>
      <span className="select-none gap-y-1 font-medium flex flex-col scroll-animate w-full text-2xl items-center text-[#DEAC80] text-center mb-4">
        Project
      <FaArrowAltCircleDown size={40} />
      </span>
    </Fragment>
  );
}
