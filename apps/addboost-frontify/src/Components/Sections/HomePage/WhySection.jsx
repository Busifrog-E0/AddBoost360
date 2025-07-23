import Creative1 from "../../../assets/WhySectionIcons/creative1.png"
import creative2 from "../../../assets/WhySectionIcons/creative2.png";
import creative3 from "../../../assets/WhySectionIcons/Creative3.png";
import creative4 from "../../../assets/WhySectionIcons/creative4.png";
import creative5 from "../../../assets/WhySectionIcons/creative5.png";
import { useState } from "react";
import WhySectionView from "./Elements/WhySectionView";

const WhySection = () => {
  const [items, setItems] = useState(
    [
      {
        icon: Creative1,
        title: "A reliable UK-Based, Global Service Delivery.",
        description:
          "Clear storytelling and creative flair from a trusted UK team with global reach.",
      },
      {
        icon: creative2,
        title: "Legally Protected Services & Secure Escrow Model",
        description:
          "Safe, escrow-backed services with custom video solutions for global markets.",
      },
      {
        icon: creative3,
        title: "Scalable Solutions for Startups, SMEs & Enterprises",
        description:
          "End-to-end video production tailored for startups, SMEs, and enterprises—stress-free and efficient.",
      },
      {
        icon: creative4,
        title: "Expert Freelancers from Europe, Asia & USA",
        description:
          "We engage and inspire your audience with clear and simple storytelling and a touch of creative flair.",
      },
      {
        icon: creative5,
        title: "Transparent Pricing & Fast Delivery",
        description:
          "No surprises—transparent rates and quick delivery without compromising quality.",
      },
    ]
  );

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-BackgroundGradientright">
      <WhySectionView items={items} title={"Global, Intelligent, Creative."} subtitle={"Why Add Boost 360?"} />
    </div>
  );
};

export default WhySection;
