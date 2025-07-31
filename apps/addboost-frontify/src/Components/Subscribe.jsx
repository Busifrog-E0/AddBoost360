import React from "react";

import Email from "../assets/Email.svg";

// import { Mail } from "lucide-react";

import bgsubscribe from "../assets/bgsubscribe.png"; // your actual image
import Button from "./Button";

const Subscribe = () => {
  return (
    <div
      className="relative w-full h-[420px] bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgsubscribe})`,
        backgroundPosition: "top",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full 
      px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72
      text-center">
        <h1 className="text-xl md:text-3xl font-anton text-white">
          STAY UPDATED WITH DIGITAL TRENDS, OFFERS &amp; SOURCING OPPORTUNITIES
        </h1>
        <p className="text-sm text-white mt-2 font-inter">
          Subscribe to connect with what's next in tech, trade & opportunities
        </p>

        {/* Input box */}
        {/* <div className="flex mt-6 p-2 font-anton  rounded shadow w-full max-w-xl text-[#818181] overflow-hidden border bg-white/45 border-white">
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
