import React, { useState } from 'react';

import Arrowforward from "../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../assets/Arrowbackwardwhite.svg";
import Cornerchip from "../../../assets/Cornerchip.svg";
import Quote from "../../../assets/Quote.svg";
import JoinTalentPool from "../../../assets/JoinTalentPool.png";
import SlideIndicators from './Elements/SlideIndicators';
import Button from '../../Button';
import { useNavigate } from 'react-router';


const JoinTalentPoolSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const slides = [
    {
      id: 1,
      number: "01",
      title: "HIGHLY COMPETENT PROFESSIONALS",
      description: "Must have 3+ years' experience, strong portfolio",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      number: "02",
      title: "FLEXIBLE REMOTE OPPORTUNITIES",
      description: "Work from anywhere with competitive rates and project-based assignments",
      image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;

    // Swipe threshold
    if (distance > 50) {
      handleNext(); // Swiped left
    } else if (distance < -50) {
      handlePrevious(); // Swiped right
    }

    // Reset
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  ">
      <div className="grid lg:grid-cols-2 gap-32 items-start">
        <div className=" flex flex-col gap-2">
          <p className="text-primary  font-inter text-base 2xl:text-lg">In-House Team</p>
          <h className="uppercase text-3xl 2xl:text-5xl font-arya">
            JOIN OUR GLOBAL TALENT Pool
          </h>
          <p className="mt-2 text-sm leading-loose font-inter">
            We recruit only the best. Whether you're a seasoned expert or a passionate intern, ADD BOOST 360 offers flexible, remote freelance opportunities in digital  design, marketing, development, and more.
          </p>
          <div onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className="bg-primary rounded-md p-6 text-white flex flex-col justify-between">
              <div className="flex-grow">
                <div className="text-lg 2xl:text-xl  opacity-50 font-arya">
                  {currentSlideData.number}
                </div>
                <h3 className="text-xl 2xl:text-2xl  mb-4 leading-tight font-arya">
                  {currentSlideData.title}
                </h3>
                <p className="text-xs opacity-50 font-normal font-inter">
                  {currentSlideData.description}
                </p>
              </div>
              <div className="flex items-end justify-between mt-8 gap-3">
                <SlideIndicators items={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} activeColor='bg-white' />
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  >
                    <img src={Arrowbackward} alt="Global" className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 flex-shrink-0"
                  >
                    <img src={Arrowforward} alt="Global" className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  mt-8">
            <Button
              bgColor="bg-white "
              textColor="text-black"
              border="border border-black"
              text="APPLY AS A FREELANCER"
              iconColor="black"
              hoverBgColor="bg-gray-300"
              hoverTextColor="text-black"
              onClick={() => navigate("/in-house-team")}
            />
          </div>
        </div>
        <div className="relative overflow-hidden hidden lg:block">
          <img src={JoinTalentPool} alt="Join Talent Pool" className="w-full h-full object-cover rounded-md" />
        </div>
      </div>
    </div>
  )

};

export default JoinTalentPoolSection;