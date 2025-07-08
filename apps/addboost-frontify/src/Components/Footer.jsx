import React from "react";
import linkedin from "../assets/SocialMediaIcon/Linkedin.svg";
import instagram from "../assets/SocialMediaIcon/Instagram.svg";
import facebook from "../assets/SocialMediaIcon/Facebook.svg";
import youtube from "../assets/SocialMediaIcon/Youtube.svg";

const Footer = () => {
  const [footerData, setFooterData] = React.useState({
    email: "info@addboost360.com",
    phone: "+44 (0)20-1234-5678",
    website: "www.addboost360.com",
    description:
      "Empowering Your Digital Future - Globally. Intelligently. Creatively.",
    company: "ADD BOOST 360",
    address: {
      country: "United Kingdom",
      city: "London",
      street: "24 City Road",
      zip: "EC1V 2NX",
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/your-page",
      instagram: "https://www.instagram.com/your-page",
      facebook: "https://www.facebook.com/your-page",
      youtube: "https://www.youtube.com/your-page",
    },
    copywrite: "© 2025 ADD BOOST 360 LIMITED. All Rights Reserved.",
  });
  return (
    <footer className="bg-[#1E1E1E] text-white px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
          <div className="flex-1">
            <h2 className="text-lg  font-arya font-bold tracking-wide">
              {footerData.company}
            </h2>
            <p className="text-sm font-inter text-gray-400 mt-2 max-w-md leading-relaxed">
              {footerData.description}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <a
              href={footerData.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-4 cursor-pointer"
              />
            </a>
            <a
              href={footerData.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={instagram}
                alt="Instagram"
                className="w-4 cursor-pointer"
              />
            </a>
            <a
              href={footerData.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-2 cursor-pointer"
              />
            </a>
            <a
              href={footerData.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" className="w-6 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-20 justify-between lg:gap-96 text-sm text-gray-300">
          <div className="">
            <p className="text-white font-semibold  font-arya">
              {footerData.address.city}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1 ">
              {footerData.address.street}, {footerData.address.city}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1">
              {footerData.address.country}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1">
              {footerData.address.zip}
            </p>
          </div>

          <div className="md:ml-60 space-y-2">
            <p className="text-white font-arya text-lg">
              <a
                href={`mailto:${footerData.email}`}
                className="hover:underline"
              >
                {footerData.email}
              </a>
            </p>
            <p className="text-white font-arya text-lg">
              <a href={`tel:${footerData.phone}`} className="hover:underline">
                {footerData.phone}
              </a>
            </p>
            <p className="text-white font-arya text-lg">{footerData.website}</p>
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2 font-inter">
          {footerData.copywrite}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
