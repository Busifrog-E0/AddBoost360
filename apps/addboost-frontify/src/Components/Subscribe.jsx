import React from "react";

import Email from "../assets/Email.svg";

// import { Mail } from "lucide-react";

import bgsubscribe from "../assets/bgsubscribe.png"; // your actual image
import Button from "./Button";

const Subscribe = () => {
  return (
    <div
      className="relative w-full h-[420px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgsubscribe})`,
        backgroundPosition: "top",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 text-center">
        <h1 className="text-xl md:text-3xl font-semibold font-arya text-gray-900">
          STAY UPDATED WITH DIGITAL TRENDS, OFFERS &amp; SOURCING OPPORTUNITIES
        </h1>
        <p className="text-sm text-gray-700 mt-2 font-inter">
          Subscribe to connect with what's next in tech, trade & opportunities
        </p>

        {/* Input box */}
        {/* <div className="flex mt-6 p-2 font-arya  rounded shadow w-full max-w-xl text-[#818181] overflow-hidden border bg-white/45 border-white">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL ADDRESS"
            className="flex-1 px-4 py-3 text-sm outline-none bg-transparent  placeholder-zinc-500 text-black"
          />

          <button className="flex items-center rounded-sm gap-2 px-5 text-primary hover:bg-white hover:text-primaryDark  font-medium text-sm transition-all duration-300">
            <img src={Email} alt="mail" className="w-4 h-4" />
            SUBSCRIBE
          </button>
        </div> */}
        <div className="mt-4">
          <a
            href={`mailto:info@addboost360.com?subject=Subscribe to newsletter&body=Hello, I would like to subscribe to your newsletter.%0D%0APlease send me the latest updates.`}
          >
            <Button text="Subscribe to newsletter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
