import Link from "next/link";
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterXFill } from "react-icons/ri";

export default async function Hero() {
  const heroDescription = "Web Developer & Logic Enthusiast Passionate web developer, embracing challenges with logic and creativity. Thriving on problem-solving, I craft experiences that blend innovation and functionality. Let's build something extraordinary together."
  return (
    <section className="grid grid-cols-1 gap-y-6 md:grid-cols-2 min-h-screen" id="hero">
      <div className="flex-grow flex flex-col md:items-start items-center text-center md:text-left justify-center mb-4 pl-0 md:pl-10 md:order-1 order-2 md:px-0">
        <h1 className="text-8xl font-semibold text-[#B5C18E]">Hola!</h1>
        <h3 className="text-3xl md:text-5xl mt-[24px] font-semibold text-[#B5C18E]">
          My name is Gilbert Owen
        </h3>
        <p className="text-[#DEAC80] text-lg md:text-xl font-normal w-[90%] mt-[24px]">
          {heroDescription}
        </p>
        <p className="mt-[32px] text-[#B5C18E] font-medium text-lg">I would be happy if you contact me!</p>
        <div className="flex flex-row gap-x-1">
            <a href={"https://www.instagram.com/gib_tyx/"}><RiInstagramFill size={40} color="#B5C18E" /></a>
            <a href={"https://www.facebook.com/moptius.up"}><RiFacebookBoxFill size={40} color="#B5C18E" /></a>
            <a href={"https://twitter.com/home?lang=en"}><RiTwitterXFill size={40} color="#B5C18E" /></a>
        </div>
      </div>
      <div className="bg-[#B5C18E] flex flex-col items-center md:h-full h-[400px] relative overflow-hidden justify-center order-1 md:order-2">
        <img src="/assets/border-hero-image.png" alt="" />
        <img
          src="/assets/person.png"
          alt=""
          className="absolute top-[-75px] md:top-11 w-[300px] md:w-[400px]"
        />
      </div>
    </section>
  );
}
