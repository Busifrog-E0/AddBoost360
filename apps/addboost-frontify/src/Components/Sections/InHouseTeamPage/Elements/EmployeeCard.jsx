import Cornerchipwhite from "../../../../assets/Cornerchipwhite.svg";
import ADDBOOSTlogo from "../../../../assets/ADDBOOSTlogo.png";

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-PrimaryDarkBlue transition-colors duration-300 p-4 md:p-6 lg:p-8 relative overflow-hidden h-full ">
      {/* Corner Chip */}
      <div className="absolute top-0 left-0">
        <img src={Cornerchipwhite} alt="Global" className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="text-center transition-colors duration-300 relative">
        {/* Wrapper to position logo above employee image */}
        <div className="relative inline-block">
          {/* Boost Logo Positioned on Top */}
          <img src={ADDBOOSTlogo} alt="Boost Logo" className="w-24 ml-6 mt-2" />

          {/* Employee Image */}
          <img
            src={employee.ImageUrl}
            alt={employee.FullName}
            className="w-24 h-24 mt-2 mx-auto rounded-full object-cover border-4 border-white"
          />
        </div>

        <h3 className="mt-4 text-sm sm:text-lg md:text-xl text-white font-arya capitalize">
          {employee.FullName}
        </h3>

        <p className="text-[#76B0FF] font-medium text-xs sm:text-base md:text-lg font-inter capitalize">
          {employee.Designation}
        </p>

        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-inter mb-5 capitalize">
          {employee.State}, {employee.Country}
        </p>
      </div>
    </div>
  );
};

export default EmployeeCard;
