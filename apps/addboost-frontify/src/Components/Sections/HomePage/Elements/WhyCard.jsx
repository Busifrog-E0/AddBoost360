import { motion } from "framer-motion";

const flipY = {
  hidden: { opacity: 0, rotateY: -90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const WhyCard = ({ item }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 md:p-10 rounded-lg bg-black/20 border border-black/20 min-h-[240px] h-full"
      variants={flipY}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <img src={item.icon} alt="icon" className="w-8 mb-4" />
      <h3 className="font-anton text-lg lg:text-xl text-PrimaryWhite">
        {item.title}
      </h3>
      <p className="mt-2 font-inter text-sm text-white leading-relaxed ">
        {item.description}
      </p>
    </motion.div>
  );
};

export default WhyCard;
