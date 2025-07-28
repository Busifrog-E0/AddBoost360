




import React, { useEffect, useState } from "react";
import noice from '../../../../assets/noice.png'

const ServiceCard = ({ service, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showNoise, setShowNoise] = useState(false);
  useEffect(() => {
    if (!service.ImageUrl || service.ImageUrl.length <= 1) return;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setIsFading(true);
        setShowNoise(true);

        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % service.ImageUrl.length
          );
          setIsFading(false);
          setTimeout(() => setShowNoise(false), 300);
        }, 400);
      }, 3000);

      return () => clearInterval(interval);
    }, index * 800); // 🔁 Increased lag between cards

    return () => clearTimeout(startDelay);
  }, [service.ImageUrl, index]);


  return (
    <div className="h-full">
      <div className="h-full flex flex-col">
        <div className="relative rounded-xl h-28 md:h-36 lg:h-44 xl:h-64 overflow-hidden flex-shrink-0">
          {
            service.ImageUrl &&
            <img
              src={service.ImageUrl[currentImageIndex]}
              alt={service.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"
                }`}
            />
          }


          {showNoise && (
            <div
              className="absolute inset-0 pointer-events-none bg-repeat opacity-20 animate-pulse"
              style={{
                backgroundImage: `url(${noice})`,
                backgroundSize: "150px",
                mixBlendMode: "soft-light",
              }}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="pt-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="font-anton text-xl lg:text-2xl text-PrimaryWhite mb-2 uppercase">
              {service.title}
            </h3>
            <p className="font-inter text-sm lg:text-base text-white leading-relaxed m-0">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

