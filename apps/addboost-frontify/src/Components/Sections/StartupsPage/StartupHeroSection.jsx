import React from "react";
import { motion } from "framer-motion";
import StartupHeroImg from "../../../assets/StartupHeroImg.png";
import ScrollToBottom from "../../ScrollToBottom";
import Global from "../../../assets/Global.jpeg";

const StartupHeroSection = () => {
  const imageAnim = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <div className="bg-PrimaryDarkBlue grid grid-cols-1 lg:grid-cols-2 h-[100svh] relative">
        {/* Top Gradient to show Header clearly */}
        <div className="absolute top-0 left-0 w-full h-60 z-10 bg-gradient-to-b from-black/80 via-black/10 to-transparent pointer-events-none" />
        {/* Text Section */}
        <div className="">
          {/* Mobile Background Image */}
          <div
            className="absolute inset-0 lg:hidden bg-cover bg-center z-0 w-full h-[100svh] overflow-hidden"
            style={{
              backgroundImage: `url(${StartupHeroImg})`,
              opacity: 0.2,
            }}
          ></div>

          {/* Text Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 
             pr-6 md:pr-10 2xl:pr-24 

             pl-6 md:pl-10 2xl:pl-24 3xl:pl-32
4xl:pl-60 5xl:pl-80 6xl:pl-180
  7xl:pl-220 8xl:pl-240 9xl:pl-260
  10xl:pl-280 11xl:pl-300 12xl:pl-320
  13xl:pl-340 14xl:pl-360 15xl:pl-400

            py-6 sm:py-10 lg:py-20
            
            text-white flex flex-col items-center
            text-center justify-center min-h-screen lg:items-start lg:text-left"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-anton uppercase leading-snug">
              <motion.p variants={line}>Your Launchpad to Growth</motion.p>
            </div>
            <div className="text-base md:text-lg font-inter mt-8">
              {/* <motion.p variants={line}>
                Based in London and serving clients globally, ADD BOOST 360 LIMITED helps launch and grow brands from the ground up. Whether you're a new founder or scaling an existing business, we offer end-to-end support—from brand identity and website design to digital growth strategies and global product sourcing. Our unique blend of marketing expertise, secure escrow model, and trusted international network ensures you have the tools, talent, and protection to succeed. ADD BOOST 360 is your partner at every stage of growth.
              </motion.p> */}
              {/* <motion.p variants={line} className="mb-2">
                Based in London and serving clients worldwide, ADD BOOST 360 LIMITED doesn’t just build brands – we launch them. Whether you’re a first-time founder or an established business looking to pivot or scale, our team provides end-to-end support tailored to your journey. We help craft a compelling brand identity, develop your website, and implement a powerful digital growth strategy that sets you apart in the market.
              </motion.p>
              <motion.p variants={line} className="mb-2">
                Our services go beyond marketing—we offer a global sourcing platform and a secure escrow model to ensure you have access to the right products, trusted international suppliers, and financial protection. This unique combination gives you the tools, talent, and security needed to move forward with confidence in any market.
              </motion.p>
              <motion.p variants={line}>
                From logo and website design to social media launch campaigns and ongoing mentorship, ADD BOOST 360 partners with you at every stage of your business journey. Our mission is to help you navigate growth with clarity, creativity, and strategic insight—so you don’t just start a business, you build a lasting brand.
              </motion.p> */}
              <motion.p
                variants={line}
                className="mb-5 text-xl font-bold font-inter"
              >
                How ADD BOOST 360 Fuels Your Journey
              </motion.p>
              <motion.p variants={line} className="mb-5 font-inter">
                Based in London and serving clients globally, ADD BOOST 360
                LIMITED helps launch and grow brands from the ground up. Whether
                you're a new founder or scaling an existing business, we offer
                end-to-end support—from brand identity and website design to
                digital growth strategies and global product sourcing.
              </motion.p>
              <motion.p variants={line} className="font-inter">
                Our unique blend of marketing expertise, secure escrow model,
                and trusted international network ensures you have the tools,
                talent, and protection to succeed. ADD BOOST 360 is your partner
                at every stage of growth.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <motion.div
          variants={imageAnim}
          initial="hidden"
          animate="show"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="hidden lg:block w-full h-[100svh]"
        >
          <motion.img
            src={Global}
            alt="Hero"
            className="w-full h-full object-cover block"
            variants={imageAnim}
          />
        </motion.div>

        {/* ScrollToBottom */}
        <ScrollToBottom backgroundClassName="lg:bg-PrimaryDarkBlue/70" />
      </div>
    </div>
  );
};

export default StartupHeroSection;
