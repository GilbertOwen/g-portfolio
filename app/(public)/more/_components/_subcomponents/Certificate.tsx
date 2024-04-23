import { motion } from "framer-motion";
import Image from "next/image";
export default function Certificate() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x:-300
      }}
      exit={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        x:0
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
      className="flex flex-col py-10 justify-center items-center"
      draggable={false}
      onContextMenu={(e) => e.preventDefault()}
    >
      <Image
        src={"/assets/bnsp-certificate.png"}
        alt={"certificate"}
        draggable={false}
        className="max-w-[400px] w-full select-none h-auto px-2 py-2 border-4 border-double border-[#B99470]"
        sizes="100vw"
        width={0}
        height={0}
      ></Image>
    </motion.div>
  );
}
