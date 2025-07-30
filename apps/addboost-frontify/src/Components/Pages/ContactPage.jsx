import React from "react";

import ContactSupportSection from "../Sections/ContactPage/ContactSupportSection";
import Formsection from "../Sections/ContactPage/Formsection";
import Button from "../Button";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-PrimaryDarkBlue px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 pt-32 md:py-20 md:pt-40 lg:py-24 lg:pt-44">
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
