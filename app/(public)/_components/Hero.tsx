"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

export default function Hero() {
  const heroContent = useRef(null);
  const heroImageBorder = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const [widthSize, setWidthSize] = useState<number>(0);
  useEffect(() => {
    const handleResize = () => {
      setWidthSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    let ctx = gsap.context(() => {
      const content = heroContent.current;
      const imageBorder = heroImageBorder.current;
      // const imageContent = heroImageBorder.current;
      if (window.innerWidth > 768) {
        gsap.from(content, { x: -500, opacity: 0 });
        gsap.delayedCall(0.5, () => {
          gsap.to(content, {
            x: 0,
            opacity: 1,
            duration: 1,
          });
        });
      } else {
        gsap.from(content, { y: 100, opacity: 0 });
        gsap.delayedCall(0.5, () => {
          gsap.to(content, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
          });
        });
      }
      gsap.from(imageBorder, { y: 100, opacity: 0 });
      gsap.delayedCall(0.5, () => {
        gsap.to(imageBorder, {
          y: 0,
          opacity: 1,
          duration: 0.5,
        });
      });
      gsap.from(".hero-image-content", { opacity: 0 });
      gsap.delayedCall(1.5, () => {
        gsap.to(".hero-image-content", {
          opacity: 1,
          duration: 0.7,
        });
      });
      return () => ctx.kill();
    });
  }, [widthSize]);
  const heroDescription =
    "Web Developer & Logic Enthusiast Passionate web developer, embracing challenges with logic and creativity. Thriving on problem-solving, I craft experiences that blend innovation and functionality. Let's build something extraordinary together.";
  return (
    <section
      className="2xl:container 2xl:mx-auto grid grid-cols-1 gap-y-6 md:grid-cols-2 min-h-screen"
      id="hero"
    >
      <div
        id="hero-content"
        ref={heroContent}
        className="hero-content flex-grow flex flex-col md:items-start items-center text-center md:text-left justify-center mb-4 pl-0 md:pl-10 md:order-1 order-2 md:px-0"
      >
        <h1 className="text-8xl font-semibold text-[#B5C18E]">Hola!</h1>
        <h3 className="text-3xl md:text-5xl mt-[24px] font-semibold text-[#B5C18E]">
          My name is Gilbert Owen
        </h3>
        <p className="text-[#DEAC80] text-lg md:text-xl font-normal w-[90%] md:px-0 px-2 mt-[24px]">
          {heroDescription}
        </p>
        <p className="mt-[32px] text-[#B5C18E] font-medium text-lg">
          I would be happy if you contact me!
        </p>
        <div className="flex flex-row gap-x-1">
          <a href={"https://www.instagram.com/gib_tyx/"}>
            <RiInstagramFill size={40} color="#B5C18E" />
          </a>
          <a href={"https://www.facebook.com/moptius.up"}>
            <RiFacebookBoxFill size={40} color="#B5C18E" />
          </a>
          <a href={"https://twitter.com/home?lang=en"}>
            <RiTwitterXFill size={40} color="#B5C18E" />
          </a>
        </div>
      </div>
      <div
        id="hero-image"
        className="bg-[#B5C18E] flex flex-col items-center md:h-full h-[400px] relative overflow-hidden justify-center order-1 md:order-2"
      >
        <img
          ref={heroImageBorder}
          src="/assets/border-hero-image.png"
          className="hero-image-border"
          alt=""
          id="hero-image-border"
        />
        <img
          src="/assets/person.png"
          alt=""
          // id="hero-image-content"
          className="hero-image-content absolute top-[-75px] md:top-[-20px] w-[300px] md:w-[400px]"
        />
      </div>
    </section>
  );
}
