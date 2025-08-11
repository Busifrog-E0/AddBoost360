import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import ADDBOOSTlogo from "../assets/ADDBOOSTlogo.png";
import email from "../assets/email.png";
import call from "../assets/call.png";

const Header = () => {
  const [headerData, setHeaderData] = React.useState({
    email: "info@addboost360.com",
    phone: "+44 7309 651130",
  });

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "STARTUPS & SOURCING", to: "/startups-and-sourcing" },
    { label: "PORTFOLIO", to: "/portfolio" },
    { label: "TALENT POOL", to: "/in-house-team" },

    { label: "Supplier's Hub", to: "/companies" },
    { label: "STUDIO", to: "/studio" },
    { label: "CONTACT", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // true if scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <header
        className={`fixed top-0 left-0 right-0 z-[999] text-white transition-all duration-300
          ${scrolled
            ? "bg-black/30 backdrop-blur-md shadow-md "
            : "bg-transparent"
          }`}
      >
        {/* 2xl:px-60 3xl:px-80  */}
        <div
          className="select-none flex items-center justify-between gap-3 
            px-6 md:px-8 py-3 md:py-4"
        >
          {/* Logo + Brand */}
          <div className="flex items-center gap-6 ">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={ADDBOOSTlogo}
                alt="Logo"
                className="w-20 object-contain"
              />
              <h1 className="text-lg 2xl:text-xl font-anton leading-none">
                ADD BOOST <span className="">360</span>
              </h1>
            </div>
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-6 2xl:gap-12">
            <div className="flex flex-nowrap items-center text-sm font-inter gap-2 outline-none">
              <img
                src={call}
                alt="Phone"
                className="w-4 object-contain outline-none"
              />
              <a
                href={`tel:${headerData.phone}`}
                className="text-xs 2xl:text-sm hover:underline hover:text-[#2174bb] transition duration-200 outline-none"
              >
                {headerData.phone}
              </a>
            </div>
            <div className="flex flex-nowrap items-center text-sm font-inter gap-2 outline-none">
              <img
                src={email}
                alt="Email"
                className="w-4 object-contain outline-none"
              />
              <a
                href={`mailto:${headerData.email}`}
                className="text-xs 2xl:text-sm hover:underline hover:text-[#2174bb] transition duration-200 outline-none"
              >
                {headerData.email}
              </a>
            </div>
          </div>


          {/* Nav Items */}
          <nav className="hidden xl:flex gap-8 text-sm font-arya uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-xs 2xl:text-sm hover:underline transition duration-150 ${isActive ? "underline " : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="xl:hidden">
            <MenuIcon onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </header>

      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
