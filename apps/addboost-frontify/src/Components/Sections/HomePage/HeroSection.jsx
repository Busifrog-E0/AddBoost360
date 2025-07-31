import { useNavigate } from "react-router";
import Button from "../../Button";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollToBottom from "../../ScrollToBottom";

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
const blurFade = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const bounceRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const HeroSection = () => {
  const [homePageData, setHomePageData] = useState({
    title: "Digital Solutions That Empower Your Brand.",
    description:
      "Transform your brand with full-service digital marketing, AI-powered web solutions, global product sourcing, and startup empowerment—powered by experts across the world.",
    videoSrc:
      "https://static.videezy.com/system/resources/previews/000/018/776/original/solution-wei_C3_9F.mp4",
    buttonText: "BOOK A FREE CONSULTATION",
    buttonLink: "/contact",
  });

  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      {/* Top Gradient to show Header clearly */}
      <div className="absolute top-0 left-0 w-full h-60 z-10 bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" />

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={homePageData.videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-zinc-800 via-zinc-800/60 to-transparent" />

      {/* Content */}
      <div
        className="relative z-10 w-full h-full grid xl:grid-cols-2 items-center 
        px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72"
      >
        <div className="flex flex-col gap-8 text-white overflow-hidden">
          {/* Animated Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-anton uppercase"
            variants={popIn}
            initial="hidden"
            animate="show"
            custom={0}
          >
            {homePageData.title}
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-lg font-inter"
            variants={blurFade}
            initial="hidden"
            animate="show"
            custom={1}
          >
            {homePageData.description}
          </motion.p>

          {/* Animated Button */}
          <motion.div
            variants={bounceRight}
            initial="hidden"
            animate="show"
            custom={2}
            className="flex"
          >
            <Button
              onClick={() => navigate(homePageData.buttonLink)}
              text={homePageData.buttonText}
            />
          </motion.div>
        </div>
      </div>

      {/* ScrollToBottom */}
      <ScrollToBottom />
    </div>
  );
};

export default HeroSection;
