import creative1 from "../../../assets/WhyJoinSectionIcon/creative1.png";
import creative2 from "../../../assets/WhyJoinSectionIcon/creative2.png";
import creative3 from "../../../assets/WhyJoinSectionIcon/Creative3.png";
import creative4 from "../../../assets/WhyJoinSectionIcon/creative4.png";
import creative5 from "../../../assets/WhyJoinSectionIcon/creative5.png";
import creative6 from "../../../assets/WhyJoinSectionIcon/creative6.png";
import { useState } from "react";
import WhySectionView from "../HomePage/Elements/WhySectionView";

const WhyJoinSection = () => {
  const [items, setItems] = useState(
    [
      {
        icon: creative1,
        title: "Global Exposure",
        description:
          "Work with international clients from the UK, Europe, Asia, Middle East, and the USA.",
      },
      {
        icon: creative2,
        title: "Flexible Remote Work",
        description:
          "Set your schedule and work from anywhere.",
      },
      {
        icon: creative3,
        title: "Continuous Learning",
        description:
          "Access internal workshops, tools training, and live project mentoring.",
      },
      {
        icon: creative4,
        title: "Reliable Payouts",
        description:
          "Transparent task-based compensation with on-time payments.",
      },
      {
        icon: creative5,
        title: "Cultural Training",
        description:
          "Training on working with diverse clients and managing cultural sensitivities.",
      },
      {
        icon: creative6,
        title: "Career Growth Path",
        description:
          "Clear growth plans and performance-based progression across roles and departments.",

      }
    ]
  );

  return (
    <div className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72 bg-BackgroundGradientleft ">
      <WhySectionView items={items} title={"Driven by Talent. Defined by Vision."} subtitle={"Why Join ADD BOOST 360 LIMITED?"} />
    </div>
  );
};

export default WhyJoinSection;
