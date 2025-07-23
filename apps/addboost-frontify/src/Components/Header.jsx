import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import ADDBOOSTlogo from "../assets/ADDBOOSTlogo.png";
import call from "../assets/call.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "STARTUPS & SOURCING", to: "/startups-and-sourcing" },
    { label: "PORTFOLIO", to: "/portfolio" },
    { label: "TALENT POOL", to: "/in-house-team" },
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
          ${
            scrolled
              ? "bg-black/30 backdrop-blur-md shadow-md "
              : "bg-black/10 backdrop-blur-md shadow-md "
          }`}
      >
        <div
          className="flex items-center justify-between px-4 md:px-10 py-3
            2xl:px-60 3xl:px-80 
            4xl:px-120 5xl:px-160 6xl:px-180
            7xl:px-220 8xl:px-240 9xl:px-260
            10xl:px-280 11xl:px-300 12xl:px-320
            13xl:px-340 14xl:px-360 15xl:px-400"
        >
          {/* Logo + Brand */}
          <div className="flex items-center gap-6">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={ADDBOOSTlogo}
                alt="Logo"
                className="w-20 object-contain"
              />
              <h1 className="text-xl font-anton leading-none">
                ADD BOOST <span className="text-[#2174bb]">360</span>
              </h1>
            </div>

            {/* Phone */}
            <div className="hidden md:flex ml-14 items-center text-sm font-inter gap-2 outline-none">
              <img
                src={call}
                alt="Phone"
                className="w-4 object-contain outline-none"
              />
              <a
                href="tel:+442012345678"
                className="hover:underline hover:text-[#2174bb] transition duration-200 outline-none"
              >
                +44 (0)20-1234-5678
              </a>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="hidden lg:flex gap-8 text-sm font-arya uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:underline transition duration-150 ${
                    isActive ? "underline " : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="lg:hidden">
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
