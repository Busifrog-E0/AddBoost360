import Cornerchipwhite from "../../../../assets/Cornerchipwhite.svg";
import ADDBOOSTlogo from "../../../../assets/ADDBOOSTlogo.png";
const EmployeeCard = ({ employee }) => {
  const gradientMap = {
    "HR": {
      background: "from-white/10 to-white/15",
      textColor: "text-white"
    },
    "Team Lead": {
      background: "from-white/15 to-white/20",
      textColor: "text-white"
    },
    "Project Lead": {
      background: "from-white/20 to-white/25",
      textColor: "text-white"
    },
    "Mobile App": {
      background: "from-white/25 to-white/30",
      textColor: "text-white"
    },
    "UI/UX Design": {
      background: "from-white/30 to-white/35",
      textColor: "text-white"
    },
    "Marketing": {
      background: "from-white/35 to-white/40",
      textColor: "text-white"
    },
    "Business Analyst": {
      background: "from-white/40 to-white/45",
      textColor: "text-white"
    },
    "Backend Developer": {
      background: "from-white/45 to-white/50",
      textColor: "text-white"
    },
    "Frontend Developer": {
      background: "from-white/50 to-white/55",
      textColor: "text-white"
    },
    "Intern": {
      background: "from-white/55 to-white/60",
      textColor: "text-white"
    },
    default: {
      background: "from-white/60 to-white/70",
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
