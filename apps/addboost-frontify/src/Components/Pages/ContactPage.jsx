import React from "react";

import ContactSupportSection from "../Sections/ContactPage/ContactSupportSection";
import Formsection from "../Sections/ContactPage/Formsection";
import Button from "../Button";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-PrimaryDarkBlue
      


       px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

 

      py-10 pt-32 md:py-14 md:pt-40 lg:py-20 lg:pt-44">
        {/* Heading Section */}
        <p className="text-white font-inter text-sm 2xl:text-lg">
          Let's Unlock Your Brand's Full Potential — Together.
        </p>

        <h1 className="font-anton text-white uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2 ">
          Book a free consultation
        </h1>

        <p className="text-base font-inter text-[#C8C8C8] mt-2">
          Launching a startup, scaling up, or upgrading online? Get a free
          30-minute consultation from ADD BOOST 360 LIMITED to explore tailored
          strategies.
        </p>

        <Formsection />

        {/* Submit Button */}
      </div>
      <ContactSupportSection />
    </div>
  );
};

export default ContactPage;
