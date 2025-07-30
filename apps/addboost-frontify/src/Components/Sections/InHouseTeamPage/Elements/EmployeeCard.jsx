import Cornerchipwhite from "../../../../assets/Cornerchipwhite.svg";
import ADDBOOSTlogo from "../../../../assets/ADDBOOSTlogo.png";
const EmployeeCard = ({ employee }) => {
  const gradientMap = {
    "HR": {
      background: "from-pink-100/20 to-pink-400/20",
      textColor: "text-white"
    },
    "Team Lead": {
      background: "from-purple-100/20 to-purple-400/20",
      textColor: "text-white"
    },
    "Project Lead": {
      background: "from-indigo-100/20 to-indigo-400/20",
      textColor: "text-white"
    },
    "Mobile App": {
      background: "from-blue-100/20 to-blue-400/20",
      textColor: "text-white"
    },
    "UI/UX Design": {
      background: "from-teal-100/20 to-teal-400/20",
      textColor: "text-white"
    },
    "Marketing": {
      background: "from-green-100/20 to-green-400/20",
      textColor: "text-white"
    },
    "Business Analyst": {
      background: "from-lime-100/20 to-lime-400/20",
      textColor: "text-white"
    },
    "Backend Developer": {
      background: "from-yellow-100/20 to-yellow-400/20",
      textColor: "text-white"
    },
    "Frontend Developer": {
      background: "from-orange-100/20 to-orange-400/20",
      textColor: "text-white"
    },
    "Intern": {
      background: "from-rose-100/20 to-rose-400/20",
      textColor: "text-white"
    },
    default: {
      background: "from-slate-100/20 to-slate-400/20",
      textColor: "text-white"
    }
  };


  const typeStyles = gradientMap[employee.Description1] || gradientMap.default;
  return (
    <div className="bg-PrimaryDarkBlue ">

      <div className="transition-colors duration-300 p-4 md:p-6 lg:p-8 relative overflow-hidden h-full">
        {/* Corner Chip */}
        <div className="absolute top-0 left-0">
          <img src={Cornerchipwhite} alt="Global" className="w-6 h-6" />
        </div>

        <div className="text-center transition-colors duration-300 relative">
          <div className="relative inline-block">
            <img src={ADDBOOSTlogo} alt="Boost Logo" className="w-24 ml-6 mt-2" />
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
      <div
        className={`w-full h-8 flex items-center justify-center text-sm font-semibold uppercase bg-gradient-to-l ${typeStyles.background} ${typeStyles.textColor}`}
      >
        {employee.Description1 || "Team Member"}
      </div>

    </div>
  );
};

export default EmployeeCard;
