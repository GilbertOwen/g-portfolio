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
      className="mt-20 bg-[#B99470] px-6 h-[fit] md:px-8 py-6 rounded-xl shadow-lg"
    >
      <h1 className="text-4xl font-semibold text-[#F7DCB9] text-center mb-10 drop-shadow-md">
        Form Feedback
      </h1>
      <a href="https://forms.gle/ktWexpe6RpYUKkRh6" className="text-[#F7DCB9] font-semibold capitalize">To the form response website {">>"}</a>
      <iframe src="https://forms.gle/ktWexpe6RpYUKkRh6" className="w-full h-[600px] border-2 mt-2 border-black rounded-md" frameBorder="2"></iframe>
    </motion.div>
  );
}
