import creative1 from "../../../assets/WhyJoinSectionIcon/creative1.png";
import creative2 from "../../../assets/WhyJoinSectionIcon/creative2.png";
import creative3 from "../../../assets/WhyJoinSectionIcon/Creative3.png";
import creative4 from "../../../assets/WhyJoinSectionIcon/creative4.png";
import creative5 from "../../../assets/WhyJoinSectionIcon/creative5.png";
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
    ]
  );

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-BackgroundGradientleft ">
      <WhySectionView items={items} title={"Driven by Talent. Defined by Vision."} subtitle={"Why Join ADD BOOST 360 LIMITED?"} />
    </div>
  );
};

export default WhyJoinSection;
