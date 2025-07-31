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
    <div className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 bg-BackgroundGradientright">
      <WhySectionView items={items} title={"Global, Intelligent, Creative."} subtitle={"Why Add Boost 360?"} />
    </div>
  );
};

export default WhySection;
