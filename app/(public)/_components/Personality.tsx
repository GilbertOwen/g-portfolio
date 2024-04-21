"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdOutlineContentPasteSearch } from "react-icons/md";

export default function Personality() {
  const load = [1, 2, 3, 4, 5];
  const outerModal = useRef(null);
  const modal = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleCloseModal = (e: any) => {
    if (e.target.className === outerModal?.current?.className) {
      setModalOpen(false);
    }
  };
  return (
    <section id="personality" className="min-h-screen flex flex-col py-6 mt-6">
      <div className="flex flex-col mb-4 gap-y-6">
        <h1 className="text-[40px] md:text-5xl font-semibold text-center text-[#DEAC80]">
          Personality
        </h1>
        <div className="grid place-content-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 lg:px-24 gap-x-4 py-8 bg-[#DEAC80] text-[#F7DCB9]">
          {load.length > 0 &&
            load.map((i, index) => (
              <div
                className="flex flex-col items-center justify-center gap-y-4 cursor-pointer select-none"
                key={index}
                onClick={(e) => setModalOpen(true)}
              >
                <MdOutlineContentPasteSearch color="#F7DCB9" size={150} />
                <h4 className="text-2xl md:text-3xl font-semibold">Responsible</h4>
              </div>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 px-4 sm:px-8 md:px-12 lg:px-24 py-8 gap-x-4 bg-[#B5C18E] text-[#F7dCB9] select-none">
          {load.length > 0 &&
            load.map((i, index) => (
              <div
                className="flex flex-col items-center justify-center gap-y-4 cursor-pointer"
                key={index}
                onClick={(e) => setModalOpen(true)}
              >
                <MdOutlineContentPasteSearch color="#F7DCB9" size={150} />
                <h4 className="text-2xl md:text-3xl font-semibold">Responsible</h4>
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
          transition={{ duration:0.2 }}
          className="flex flex-col justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)]"
          onClick={(e) => handleCloseModal(e)}
          ref={outerModal}
        >
          <motion.div
            className="rounded-lg w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] bg-[#F7dCB9] py-6 px-8 flex flex-col gap-y-4 relative"
            ref={modal}
            transition={{ type: "spring", delay: 0.2, x: { duration: 0.5 }, ease: 'linear', duration: 0.5 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <ImCross
              className="absolute top-[20px] right-[20px] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setModalOpen(false)}
              style={{ color: `${!isHovered ? "#DEAC80" : "#B99470"}` }}
              size={20}
            />
            <h1 className="text-[32px] text-[#DEAC80] font-semibold">
              Responsible
            </h1>
            <p className="text-[#B99470]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              placeat molestias dolorum quibusdam minima aliquam doloremque
              blanditiis autem ut iusto? Et dolorem maiores nam minus nobis
              magni accusantium animi illo, deleniti porro nemo illum iusto
              mollitia, harum voluptatem ducimus impedit molestias. Quod quas
              nisi dignissimos repellat velit cupiditate, voluptatibus iusto
              cum, quisquam fuga a, facilis necessitatibus dolorum optio minus
              sed accusamus. Rerum odit totam enim! Officia beatae repudiandae
              iure cumque culpa, aperiam adipisci alias minima illo
              reprehenderit reiciendis ex impedit assumenda non voluptatum
              expedita sunt quasi quisquam commodi! Sequi architecto nisi
              eligendi aliquid nemo ipsam ipsum molestias quos dicta explicabo!
            </p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
