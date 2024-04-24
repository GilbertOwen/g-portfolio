import { motion } from "framer-motion";
import { useState } from "react";

export default function FeedBack() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 400 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      exit={{
        opacity: 0,
      }}
      className="mt-20 bg-[#B99470] px-6 md:px-8 py-6 rounded-xl shadow-lg"
    >
      <h1 className="text-4xl font-semibold text-[#F7DCB9] text-center mb-10 drop-shadow-md">
        Form Feedback
      </h1>
      <form action="" className="flex flex-col gap-y-10 w-full">
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="suggestion"
            className="text-lg md:text-2xl font-semibold text-[#F7DCB9]"
          >
            Suggestion
          </label>
          <textarea
            name="suggestion"
            id="suggestion"
            maxLength={255}
            placeholder="Text your suggestion about my website at this form"
            className="border-[#F7DCB9] min-h-32 p-2 border-[1px] focus:outline-[#F7DCB9] text-opacity-60 rounded-xl shadow-lg"
          ></textarea>
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="rating1"
            className="text-lg md:text-2xl font-semibold text-[#F7DCB9]"
          >
            Rating
          </label>
          <div className="flex flex-row items-center gap-x-4 text-[#F7DCB9]">
            <div className="flex flex-col items-center gap-y-1">
              <input
                type="radio"
                radioGroup="rating"
                className="border-[#DEAC80] w-[16px] h-[16px]"
                id="rating1"
                name="rating"
              />
              <label htmlFor="rating1">1</label>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <input
                type="radio"
                radioGroup="rating"
                className="border-[#DEAC80] w-[16px] h-[16px]"
                id="rating2"
                name="rating"
              />
              <label htmlFor="rating2">2</label>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <input
                type="radio"
                radioGroup="rating"
                className="border-[#DEAC80] w-[16px] h-[16px]"
                id="rating3"
                name="rating"
              />
              <label htmlFor="rating3">3</label>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <input
                type="radio"
                radioGroup="rating"
                className="border-[#DEAC80] w-[16px] h-[16px]"
                id="rating4"
                name="rating"
              />
              <label htmlFor="rating4">4</label>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <input
                type="radio"
                radioGroup="rating"
                className="border-[#DEAC80] w-[16px] h-[16px]"
                id="rating5"
                name="rating"
              />
              <label htmlFor="rating5">5</label>
            </div>
          </div>
        </div>
        <button
          className="flex flex-col px-8 py-2 bg-[#F7DCB9] hover:bg-[#DEAC80] hover:text-[#F7DCB9] duration-200 text-[#B99470] rounded-lg font-semibold w-fit"
          type="submit"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
}
