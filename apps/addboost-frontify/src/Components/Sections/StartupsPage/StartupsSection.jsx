import { useState } from "react";
import StartupsListView from "./Elements/StartupsListView";

const StartupsSection = ({ showAllStartupsButton = true }) => {
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
        // {
        //     id: 5,
        //     title: "DeepL",
        //     country: "Cologne, Germany",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
        // },
        // {
        //     id: 6,
        //     title: "Copy.ai",
        //     country: "New York, United States",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg"
        // },
        // {
        //     id: 7,
        //     title: "CRED",
        //     country: "Bengaluru, India",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg"
        // },
        // {
        //     id: 8,
        //     title: "Hopin",
        //     country: "London, United Kingdom",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
        // },
        // {
        //     id: 9,
        //     title: "Sendinblue",
        //     country: "Paris, France",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
        // },
        // {
        //     id: 10,
        //     title: "Deel",
        //     country: "San Francisco, United States",
        //     productCategories: ["Fintech", "Payments"],
        //     image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
        // }
    ]);

    return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-pastelpink ">
            <StartupsListView title="Our Startups" showAllStartupsButton={showAllStartupsButton} startups={startups} />
        </div>
    );
};

export default StartupsSection;