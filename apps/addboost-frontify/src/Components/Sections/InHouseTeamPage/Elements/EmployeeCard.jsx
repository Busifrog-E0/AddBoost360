import Cornerchipwhite from "../../../../assets/Cornerchipwhite.svg";
import ADDBOOSTlogo from "../../../../assets/ADDBOOSTlogo.png";
const EmployeeCard = ({ employee }) => {
  const gradientMap = {
    // Existing
    "Branding & Creative Design": {
      background: "from-pink-100/10 to-pink-200/20",
      textColor: "text-white"
    },
    "Web & App Development": {
      background: "from-indigo-100/10 to-indigo-200/20",
      textColor: "text-white"
    },
    "Search Engine Optimization (SEO)": {
      background: "from-green-100/10 to-green-200/20",
      textColor: "text-white"
    },
    "Content Marketing": {
      background: "from-orange-100/10 to-orange-200/20",
      textColor: "text-white"
    },
    "Social Media Marketing": {
      background: "from-blue-100/10 to-blue-200/20",
      textColor: "text-white"
    },
    "Search Engine Marketing (SEM/PPC)": {
      background: "from-yellow-100/10 to-yellow-200/20",
      textColor: "text-white"
    },
    "Email & SMS Marketing": {
      background: "from-rose-100/10 to-rose-200/20",
      textColor: "text-white"
    },
    "Affiliate & Referral Marketing": {
      background: "from-purple-100/10 to-purple-200/20",
      textColor: "text-white"
    },
    "Marketing Automation & CRM": {
      background: "from-teal-100/10 to-teal-200/20",
      textColor: "text-white"
    },
    "Analytics & Data Intelligence": {
      background: "from-slate-100/10 to-slate-200/20",
      textColor: "text-white"
    },

    // Newly added
    "Business Formation & Strategy": {
      background: "from-emerald-100/10 to-emerald-200/20",
      textColor: "text-white"
    },
    "Finance & Accounting": {
      background: "from-lime-100/10 to-lime-200/20",
      textColor: "text-white"
    },
    "Legal & Compliance": {
      background: "from-red-100/10 to-red-200/20",
      textColor: "text-white"
    },
    "Human Resources & Talent": {
      background: "from-cyan-100/10 to-cyan-200/20",
      textColor: "text-white"
    },
    "IT Infrastructure & Security": {
      background: "from-zinc-100/10 to-zinc-200/20",
      textColor: "text-white"
    },
    "Sales & Business Development": {
      background: "from-fuchsia-100/10 to-fuchsia-200/20",
      textColor: "text-white"
    },
    "Customer Support & Experience": {
      background: "from-sky-100/10 to-sky-200/20",
      textColor: "text-white"
    },
    "Training & Capacity Building": {
      background: "from-violet-100/10 to-violet-200/20",
      textColor: "text-white"
    },

    // Fallback
    default: {
      background: "from-gray-100/10 to-gray-200/60",
      textColor: "text-black"
    }
  };

  const typeStyles = gradientMap[employee.Description1] || gradientMap.default;
  return (
    <div className={`bg-gradient-to-l ${typeStyles.background}`}>

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
        {/* {typeStyles.textColor} */}
      </div>

    </div>
  );
};

export default EmployeeCard;
