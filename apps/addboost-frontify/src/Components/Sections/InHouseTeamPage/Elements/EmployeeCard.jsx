import Cornerchip from "../../../../assets/Cornerchip.svg";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white  transition-colors duration-300 p-4 md:p-6 lg:p-8 relative overflow-hidden h-full ">
      {/* Corner Chip */}
      <div className="absolute top-0 left-0">
        <img src={Cornerchip} alt="Global" className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="text-center transition-colors duration-300">
        <img
          src={employee.image}
          alt={employee.title}
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-white transition-colors duration-300"
        />

        <h3 className="mt-4 font-semibold text-sm sm:text-lg md:text-xl text-black font-arya ">
          {employee.title}
        </h3>

        <p className="text-primary font-medium text-xs sm:text-base md:text-lg font-inter ">
          {employee.designation}
        </p>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base font-inter mb-5 ">
          {employee.country}
        </p>
      </div>
    </div>

  );
};

export default EmployeeCard;