import React, { useState } from "react";
import { motion } from "framer-motion";

import Arrowforward from "../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../assets/Arrowbackwardwhite.svg";
import JoinTalentPool from "../../../assets/JoinTalentPool.png";
import SlideIndicators from "./Elements/SlideIndicators";
import Button from "../../Button";
import { useNavigate } from "react-router";

// Animation Variants
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

const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
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
      duration: 0.8,
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

const JoinTalentPoolSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "highly competent professionals",
      description: "Must have 3+ years' experience, strong portfolio",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
    {
      id: 2,
      number: "02",
      title: "Intern-Level Freelancers",
      description:
        "For passionate learners ready to grow through guided real-time projects.",
      image:
        "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    },
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      handleNext(); // Swiped left
    } else if (distance < -50) {
      handlePrevious(); // Swiped right
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className=" bg-BackgroundGradientleft">
      <div className="grid lg:grid-cols-2 gap-32 items-start overflow-hidden      ">
        {/* LEFT SECTION */}
        <motion.div
          variants={blurFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-2 pl-6 md:pl-10 2xl:pl-24 3xl:pl-32
4xl:pl-60 5xl:pl-80 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400

  pr-0 xl:pr-10 2xl:pr-20 3xl:pr-52

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72"
        >
          <p className="text-[#76B0FF] font-inter text-base 2xl:text-lg">
            Talent Pool
          </p>
          <motion.h3
            variants={bounceRight}
            className="uppercase text-3xl 2xl:text-5xl font-anton text-white"
          >
            JOIN OUR GLOBAL TALENT Pool
          </motion.h3>
          <p className="mt-2 text-sm leading-loose font-inter text-white text-justify">
            We recruit only the best. Whether you're a seasoned expert or a
            passionate intern, ADD BOOST 360 offers flexible, remote freelance
            opportunities in digital design, marketing, development, and more.
          </p>

          {/* SLIDE BOX */}
          <motion.div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            variants={popIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-PrimaryDarkBlue rounded-md p-6 text-white flex flex-col justify-between mt-6"
          >
            <div className="flex-grow">
              <motion.div
                variants={bounceRight}
                className="text-lg 2xl:text-xl opacity-50 font-anton"
              >
                {currentSlideData.number}
              </motion.div>
              <h3 className="text-xl 2xl:text-2xl mb-4 leading-tight font-anton capitalize">
                {currentSlideData.title}
              </h3>
              <p className="text-xs opacity-50 font-normal font-inter">
                {currentSlideData.description}
              </p>
            </div>
            <div className="flex items-end justify-between mt-8 gap-3">
              <SlideIndicators
                items={slides}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                >
                  <img src={Arrowbackward} alt="Global" className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                >
                  <img src={Arrowforward} alt="Global" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="flex mt-8">
            <Button
              bgColor="bg-white "
              textColor="text-black"
              text="APPLY AS A FREELANCER"
              iconColor="black"
              hoverBgColor="bg-gray-300"
              hoverTextColor="text-black"
              onClick={() => navigate("/in-house-team")}
            />
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          variants={flipY}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-hidden hidden lg:block aspect-square"
        >
          <img
            src={JoinTalentPool}
            alt="Join Talent Pool"
            className="w-full h-full object-cover "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default JoinTalentPoolSection;
