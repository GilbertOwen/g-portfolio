"use client";
import { useEffect, useState } from "react";
import FeedBack from "./_subcomponents/Feedback";
import Certificate from "./_subcomponents/Certificate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Anything() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [comp, setComp] = useState<JSX.Element | null>(null);
  const handleOpen = (section: string) => {
    setIsOpen(true);
    if (section === "feedback") {
      setComp(<FeedBack />);
    } else if (section === "certificate") {
      setComp(<Certificate />);
    }
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".studied",
        start: "top center",
        end: "+=70%",
        scrub: true,
        toggleActions: "play restart reverse none",
      },
    });

    tl.from(".anything-container", {
      opacity: 0,
      x: -2000,
    });
    tl.to(".anything-container", {
      opacity: 1,
      x: 0,
      duration: 3,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="anything"
      className={`${
        !isOpen ? "h-fit" : "min-h-screen"
      } pb-6 px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 anything`}
    >
      <div className="anything-container grid grid-cols-2 gap-y-4 md:grid-cols-3 gap-x-4 md:gap-x-10">
        <button
          onClick={() => handleOpen("feedback")}
          className="py-5 rounded-md px-4 text-lg md:text-2xl font-semibold text-[#F7DCB9] flex flex-col items-center justify-center cursor-pointer bg-[#B5C18E]"
        >
          Give a Response
        </button>
        <button
          onClick={() => handleOpen("certificate")}
          className="py-5 px-4 rounded-md text-lg md:text-2xl font-semibold text-[#F7DCB9] flex flex-col items-center justify-center cursor-pointer bg-[#DEAC80]"
        >
          Certificate
        </button>
        <button
          onClick={() => {
            if (confirm("Go to LinkedIn?")) {
              location.href = "http://www.linkedin.com";
            } else {
              return;
            }
          }}
          className="py-5 px-4 rounded-md text-lg md:text-2xl font-semibold text-[#F7DCB9] flex flex-col items-center justify-center cursor-pointer bg-[#B5C18E]"
        >
          My LinkedIn
        </button>
      </div>
      {comp}
    </section>
  );
}
