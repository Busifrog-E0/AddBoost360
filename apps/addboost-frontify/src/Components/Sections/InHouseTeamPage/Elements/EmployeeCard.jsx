import { motion } from "framer-motion";
import Cornerchipwhite from "../../../../assets/Cornerchipwhite.svg";
import ADDBOOSTlogo from "../../../../assets/ADDBOOSTlogo.png";

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const EmployeeCard = ({ employee }) => {
  const gradientMap = {
    "Branding & Creative Design": {
      background: "from-pink-100/10 to-pink-200/20",
      textColor: "text-white",
    },
    "Web & App Development": {
      background: "from-indigo-100/10 to-indigo-200/20",
      textColor: "text-white",
    },
    "Search Engine Optimization (SEO)": {
      background: "from-green-100/10 to-green-200/20",
      textColor: "text-white",
    },
    "Content Marketing": {
      background: "from-orange-100/10 to-orange-200/20",
      textColor: "text-white",
    },
    "Social Media Marketing": {
      background: "from-blue-100/10 to-blue-200/20",
      textColor: "text-white",
    },
    "Search Engine Marketing (SEM/PPC)": {
      background: "from-yellow-100/10 to-yellow-200/20",
      textColor: "text-white",
    },
    "Email & SMS Marketing": {
      background: "from-rose-100/10 to-rose-200/20",
      textColor: "text-white",
    },
    "Affiliate & Referral Marketing": {
      background: "from-purple-100/10 to-purple-200/20",
      textColor: "text-white",
    },
    "Marketing Automation & CRM": {
      background: "from-teal-100/10 to-teal-200/20",
      textColor: "text-white",
    },
    "Analytics & Data Intelligence": {
      background: "from-slate-100/10 to-slate-200/20",
      textColor: "text-white",
    },
    "Business Formation & Strategy": {
      background: "from-emerald-100/10 to-emerald-200/20",
      textColor: "text-white",
    },
    "Finance & Accounting": {
      background: "from-lime-100/10 to-lime-200/20",
      textColor: "text-white",
    },
    "Legal & Compliance": {
      background: "from-red-100/10 to-red-200/20",
      textColor: "text-white",
    },
    "Human Resources & Talent": {
      background: "from-cyan-100/10 to-cyan-200/20",
      textColor: "text-white",
    },
    "IT Infrastructure & Security": {
      background: "from-zinc-100/10 to-zinc-200/20",
      textColor: "text-white",
    },
    "Sales & Business Development": {
      background: "from-fuchsia-100/10 to-fuchsia-200/20",
      textColor: "text-white",
    },
    "Customer Support & Experience": {
      background: "from-sky-100/10 to-sky-200/20",
      textColor: "text-white",
    },
    "Training & Capacity Building": {
      background: "from-violet-100/10 to-violet-200/20",
      textColor: "text-white",
    },
    default: {
      background: "from-gray-100/10 to-gray-200/60",
      textColor: "text-black",
    },
  };

  const typeStyles = gradientMap[employee.Description1] || gradientMap.default;

  return (
    <motion.div
      className={`bg-gradient-to-l ${typeStyles.background} shadow-md overflow-hidden`}
      variants={cardAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative p-6">
        <div className="absolute top-0 left-0">
          <img src={Cornerchipwhite} alt="Global" className="w-6 h-6" />
        </div>
        <div className="relative text-center flex flex-col gap-2 items-center">
          {/* Logo fixed at top-left corner */}
          <img
            src={ADDBOOSTlogo}
            alt="Boost Logo"
            className="absolute top-0 left-0 w-28"
          />

          {/* Centered employee image */}
          <div className="mt-6">
            <img
              src={employee.ImageUrl}
              alt={employee.FullName}
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
          </div>

          <h3 className="mt-4 text-sm sm:text-lg md:text-xl text-white font-arya capitalize">
            {employee.FullName}
          </h3>

          <span className="text-xs sm:text-sm md:text-base text-center px-3 py-1 bg-white/10 border border-white/20 text-white/80 rounded-md font-inter">
            {employee.ID}
          </span>

          <p className="text-[#76B0FF] font-medium text-xs sm:text-base md:text-lg font-inter capitalize">
            {employee.Designation}
          </p>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base font-inter mb-5 capitalize">
            {employee.State}, {employee.Country}
          </p>
        </div>
      </div>

      <div
        className={`w-full px-2 py-2.5 flex items-center justify-center text-center text-sm font-arya uppercase bg-gradient-to-l ${typeStyles.background} ${typeStyles.textColor}`}
      >
        {employee.Description1 || "Team Member"}
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
