import Quote from "../../../../assets/Quote.svg";
import Profile from "../../../../assets/profile.png";
import React from "react";

const TestimonialCard = ({ currentTestimonial }) => {
  return (
    <div className="relative z-10 space-y-8 ">
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white  rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
            <img
              src={
                currentTestimonial.image ? currentTestimonial.image : Profile
              }
              alt="Client"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 lg:w-16 lg:h-16 p-2 lg:p-4 bg-primary rounded-full flex items-center justify-center flex-col">
            <img src={Quote} alt="Global" className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="text-center space-y-6 ">
        <p className="font-inter text-sm lg:text-base text-white">
          {currentTestimonial.quote}
        </p>
        <div className="pt-4 border-t border-black">
          <p className=" font-anton uppercase text-white text-base lg:text-lg ">
            {currentTestimonial.designation +
              ", " +
              currentTestimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
