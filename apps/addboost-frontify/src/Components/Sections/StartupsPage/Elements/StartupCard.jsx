import Cornerchip from "../../../../assets/Cornerchip.svg";

const StartupCard = ({ startup }) => {
  return (
    <div className="bg-white transition-colors duration-300  p-5 md:p-6 lg:p-8 relative overflow-hidden h-full">
      <div className="absolute top-0 left-0">
        <img src={Cornerchip} alt="Global" className="w-6 h-6" />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 w-full transition-colors duration-300">
        <div className="flex-shrink-0 md:aspect-square w-full h-32 md:h-auto md:w-32 lg:w-40 rounded-none overflow-hidden">
          <img
            src={startup.image}
            alt={startup.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-start gap-2 w-full">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold uppercase font-arya text-black ">
            {startup.title}
          </h3>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg font-inter ">
            {startup.country}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {startup.productCategories?.map((tag, index) => (
              <span
                key={index}
                className="text-xs sm:text-sm md:text-base px-3 py-1 bg-gray-100 border border-gray-300 rounded-none font-inter"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default StartupCard;