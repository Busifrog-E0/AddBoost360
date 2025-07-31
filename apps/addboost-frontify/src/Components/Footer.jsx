import React from "react";
import linkedin from "../assets/SocialMediaIcon/Linkedin.svg";
import instagram from "../assets/SocialMediaIcon/Instagram.svg";
import facebook from "../assets/SocialMediaIcon/Facebook.svg";
import youtube from "../assets/SocialMediaIcon/Youtube.svg";
import Ukflag from "../assets/Ukflag.png";
import ADDBOOSTlogo from "../assets/ADDBOOSTlogo.png";

const Footer = () => {
  const [footerData, setFooterData] = React.useState({
    email: "info@addboost360.com",
    phone: "+44 (0)20-1234-5678",
    website: "www.addboost360.com",
    description:
      "Empowering Your Digital Future – Globally. Intelligently. Creatively.",
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
    <footer
      className="bg-black text-white 
      px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72"
    >
      <div className="flex flex-col gap-12">
        {/* Top: Logo & Description + Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6">
          <div className="flex-1">
            <div className="flex flex-row gap-2 items-center leading-normal cursor-pointer">
              <img
                src={ADDBOOSTlogo}
                alt="Logo"
                className="w-40 object-contain"
              />
              <div></div>
            </div>
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

        {/* Middle: Address & Contact Info */}
        <div className="flex flex-row gap-20 justify-between lg:gap-96 text-sm text-gray-300">
          <div>
            <div className="mt-0">
              <img src={Ukflag} alt="UK Flag" width="30px" />
            </div>
            <p className="text-white text-lg font-arya mt-1">
              {footerData.address.city}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1">
              {footerData.address.street}, {footerData.address.city}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1">
              {footerData.address.country}
            </p>
            <p className="font-inter text-gray-400 text-xs mt-1">
              {footerData.address.zip}
            </p>
          </div>

          <div className="md:ml-60 ">
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

        {/* Bottom: Copyright & Subscribe */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-gray-500 mt-2 font-inter gap-4">
          <p>{footerData.copywrite}</p>

          <p className="text-gray-500 font-inter text-xs">
            Want to stay updated with digital trends, offers and sourcing
            opportunities?{" "}
            <a
              href={`mailto:info@addboost360.com?subject=Subscribe to newsletter&body=Hello, I would like to subscribe to your newsletter.%0D%0APlease send me the latest updates.`}
              className="text-white hover:underline hover:text-[#2174bb] transition duration-200 outline-none"
            >
              Subscribe now.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
