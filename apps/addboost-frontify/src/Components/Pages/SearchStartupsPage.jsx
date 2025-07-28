import { useState } from "react";
import StartupCard from "../Sections/StartupsPage/Elements/StartupCard";
import Button from "../Button";
import ADDBOOSTlogo from "../../assets/ADDBOOSTlogo.png"

const SearchStartupsPage = () => {
  const [startups, setStartups] = useState([
    {
      id: 1,
      title: "Razorpay",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg",
    },
    {
      id: 2,
      title: "Miro",
      country: "Amsterdam, Netherlands",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg",
    },
    {
      id: 3,
      title: "Notion",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg",
    },
    {
      id: 4,
      title: "LottieFiles",
      productCategories: ["Fintech", "Payments"],
      country: "Kuala Lumpur, Malaysia",
      image:
        "https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg",
    },
    {
      id: 5,
      title: "DeepL",
      country: "Cologne, Germany",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
    },
    {
      id: 6,
      title: "Copy.ai",
      country: "New York, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg",
    },
    {
      id: 7,
      title: "CRED",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg",
    },
    {
      id: 8,
      title: "Hopin",
      country: "London, United Kingdom",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg",
    },
    {
      id: 9,
      title: "Sendinblue",
      country: "Paris, France",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
    },
    {
      id: 10,
      title: "Deel",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    },
  ]);

  return (
    <div
      className=" px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200  pt-32 md:pt-40 lg:pt-44 
 bg-BackgroundGradientleft "
    >
      <img src={ADDBOOSTlogo} alt="Logo" className="w-32 object-contain" />
      <h className="font-anton text-white uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2 ">
        OUR Startups
      </h>
      <p className="text-sm font-inter text-gray-400 mt-2">
        At ADD BOOST 360 LIMITED, we provide end-to-end digital solutions—from
        marketing and web development to product sourcing and startup support—to
        drive global growth and impact.
      </p>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search here"
          className="p-3 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 outline-none mt-5"
        />
      </div>

      <div className="mt-4 md:mt-6 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {startups.map((startup) => (
          <div key={startup.id} className="w-full">
            <StartupCard startup={startup} />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-center mt-8">
        <Button
          bgColor="bg-white"
          textColor="text-black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          iconColor="black"
          onClick={() => { }}
          text="View More"
        />
      </div>
    </div>
  );
};

export default SearchStartupsPage;
