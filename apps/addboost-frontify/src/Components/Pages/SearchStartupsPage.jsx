import { useState } from "react";
import StartupCard from "../Sections/StartupsPage/Elements/StartupCard";
import Button from "../Button";

const SearchStartupsPage = () => {
  const [startups, setStartups] = useState([
    {
      id: 1,
      title: "Razorpay",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg"
    },
    {
      id: 2,
      title: "Miro",
      country: "Amsterdam, Netherlands",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg"
    },
    {
      id: 3,
      title: "Notion",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg"
    },
    {
      id: 4,
      title: "LottieFiles",
      productCategories: ["Fintech", "Payments"],
      country: "Kuala Lumpur, Malaysia",
      image: "https://images.pexels.com/photos/1181303/pexels-photo-1181303.jpeg"
    },
    {
      id: 5,
      title: "DeepL",
      country: "Cologne, Germany",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
    },
    {
      id: 6,
      title: "Copy.ai",
      country: "New York, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg"
    },
    {
      id: 7,
      title: "CRED",
      country: "Bengaluru, India",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg"
    },
    {
      id: 8,
      title: "Hopin",
      country: "London, United Kingdom",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
    },
    {
      id: 9,
      title: "Sendinblue",
      country: "Paris, France",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
    },
    {
      id: 10,
      title: "Deel",
      country: "San Francisco, United States",
      productCategories: ["Fintech", "Payments"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
    }
  ]);


  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 pt-32 md:py-20 md:pt-40 lg:py-24 lg:pt-44 bg-pastelpink ">
      <h className="font-libre text-black uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2">
        OUR Startups
      </h>
      <p className="text-sm text-black mt-2">
        At ADD BOOST 360 LIMITED, we provide end-to-end digital solutions—from marketing and web development to product sourcing and startup support—to drive global growth and impact.
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
          <div
            key={startup.id}
            className="w-full"

          >
            <StartupCard startup={startup} />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-center mt-8">
        <Button onClick={() => { }} text="View More" />
      </div>
    </div>
  );
};

export default SearchStartupsPage;
