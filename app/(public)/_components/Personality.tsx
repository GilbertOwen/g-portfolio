"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaHiking } from "react-icons/fa";
import { FaGamepad, FaHandshake, FaLaptopCode } from "react-icons/fa6";
import { GiCycle, GiLoveMystery } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { IoBarChart } from "react-icons/io5";
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { PiCookingPotBold } from "react-icons/pi";
import { RiMovieFill } from "react-icons/ri";

type personality = {
  name: string;
  content: string;
};
type hobby = {
  name: string;
  content: string;
};

export default function Personality({
  hobby,
  personality,
}: {
  hobby: hobby[];
  personality: personality[];
}) {
  const outerModal = useRef<any>(null);
  const modal = useRef<any>(null);
  const [modalContent, setModalContent] = useState<personality>(personality[0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = (e: any) => {
    if (e.target.className === outerModal?.current?.className) {
      setModalOpen(false);
    }
  };
  const handleModalOpen = (value: personality) => {
    setModalContent(value);
    setModalOpen(true);
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".personality", // Change this to your desired trigger element
        start: "top center", // Adjust as needed
        end: "bottom center", // Adjust as needed
        scrub: true, // Smooth animation when scrolling
        toggleActions: "play restart reverse none", // Animation direction on scroll
      },
    });

    tl.from(".personality", {
      opacity: 0.5,
      x: -1400,
    }).to(".personality", {
      opacity: 1,
      x: 0,
      duration: 2,
    });
    tl.from(".hobby", {
      opacity: 0.5,
      x: -1400,
    }).to(".hobby", {
      opacity: 1,
      x: 0,
      duration: 2,
    });

    return () => {
      tl.kill(); // Kill the animation when component unmounts
    };
  });
  const handleIcon = (type: string, name: string) => {
    const theType = name.toLowerCase();
    if (type === "personality") {
      if (theType === "responsible") {
        return <MdOutlineContentPasteSearch color="#F7DCB9" size={150} />;
      } else if (theType === "credible") {
        return <IoBarChart color="#F7DCB9" size={140} />;
      } else if (theType === "adaptive") {
        return <GiCycle color="#F7DCB9" size={140} />;
      } else if (theType === "respective") {
        return <FaHandshake color="#F7DCB9" size={140} />;
      } else if (theType === "enthusiast") {
        return <GiLoveMystery color="#F7DCB9" size={140} />;
      }
    }else if(type === 'hobby'){
      if (theType === "hiking") {
        return <FaHiking color="#F7DCB9" size={150} />;
      } else if (theType === "gaming") {
        return <FaGamepad color="#F7DCB9" size={140} />;
      } else if (theType === "coding") {
        return <FaLaptopCode color="#F7DCB9" size={140} />;
      } else if (theType === "cooking") {
        return <PiCookingPotBold color="#F7DCB9" size={140} />;
      } else if (theType === "watching") {
        return <RiMovieFill color="#F7DCB9" size={140} />;
      }
    }
  };
  return (
    <section
      id="personality"
      className="2xl:container 2xl:mx-auto min-h-screen flex flex-col py-6 mt-6"
    >
      <div className="personality flex flex-col mb-4 gap-y-6">
        <h1 className="text-[40px] md:text-5xl font-semibold text-center text-[#DEAC80]">
          Personality
        </h1>
        <div className="personality-container grid place-content-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 lg:px-24 gap-4 py-8 bg-[#DEAC80] text-[#F7DCB9]">
          {personality.length > 0 &&
            personality.map((person, index) => (
              <div
                className="flex flex-col items-center justify-center gap-y-4 cursor-pointer select-none"
                key={index}
                onClick={(e) => handleModalOpen(person)}
              >
                {handleIcon('personality' ,person.name)}
                <h4 className="text-2xl md:text-3xl font-semibold">
                  {person.name}
                </h4>
              </div>
            ))}
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto hobby flex flex-col gap-y-6">
        <div className="hobby-container grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 lg:px-24 py-8 gap-4 bg-[#B5C18E] text-[#F7dCB9] select-none">
          {hobby.length > 0 &&
            hobby.map((like, index) => (
              <div
                className="flex flex-col items-center justify-center gap-y-4 cursor-pointer"
                key={index}
                onClick={(e) => handleModalOpen(like)}
              >
                {handleIcon('hobby', like.name)}
                <h4 className="text-2xl md:text-3xl font-semibold">
                  {like.name}
                </h4>
              </div>
            ))}
        </div>
        <h1 className="text-[40px] md:text-5xl font-semibold text-center text-[#B5C18E]">
          Hobby
        </h1>
      </div>
      {modalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"
          onClick={(e) => handleCloseModal(e)}
          ref={outerModal}
        >
          <motion.div
            className="rounded-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[90%] overflow-y-auto bg-[#F7dCB9] py-6 px-8 flex flex-col gap-y-4 relative"
            ref={modal}
            transition={{
              type: "spring",
              delay: 0.2,
              x: { duration: 0.5 },
              ease: "linear",
              duration: 0.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <ImCross
              className="absolute top-[20px] right-[20px] cursor-pointer"
              onClick={() => setModalOpen(false)}
              color="#DEAC80"
              size={20}
            />
            <h1 className="text-[32px] text-[#DEAC80] font-semibold">
              {modalContent.name}
            </h1>
            <p className="text-[#B99470]">{modalContent.content}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
