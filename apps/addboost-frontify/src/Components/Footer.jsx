import React from "react";
import linkedin from "../assets/SocialMediaIcon/Linkedin.svg";
import instagram from "../assets/SocialMediaIcon/Instagram.svg";
import facebook from "../assets/SocialMediaIcon/Facebook.svg";
import youtube from "../assets/SocialMediaIcon/Youtube.svg";
import Ukflag from "../assets/Ukflag.png";
import ADDBOOSTlogo from "../assets/ADDBOOSTlogo.png";

import refundPDF from "../assets/docs/refund-and-cancellation.pdf";
import privacyPDF from "../assets/docs/privacy-policy.pdf";

const Footer = () => {
  const [footerData, setFooterData] = React.useState({
    email: "info@addboost360.com",
    phone: "+44 7309 651130",
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
    policies: [
      {
        label: "Privacy Policy",
        url: privacyPDF,
      },

      {
        label: "Refund Policy",
        url: refundPDF,
      },
    ]
  });

  return (
    <footer
      className="bg-gradient-to-b from-PrimaryDarkBlue to-black text-white 
      px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-xs text-gray-500 mt-2 font-inter gap-4">
          <div>
            <div className="flex flex-wrap gap-2 items-center text-xs text-gray-500 mt-4 font-inter mb-3">
              {footerData.policies.map((policy, index) => (
                <React.Fragment key={index}>
                  <a
                    href={policy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline hover:text-white transition duration-200 outline-none"
                  >
                    {policy.label}
                  </a>
                  {index < footerData.policies.length - 1 && (
                    <span className=" text-gray-500">▪</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p>{footerData.copywrite}</p>
          </div>




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
