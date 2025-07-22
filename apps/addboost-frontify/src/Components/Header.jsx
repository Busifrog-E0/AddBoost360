import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";
import ADDBOOSTlogo from "../assets/ADDBOOSTlogo.png";
import call from "../assets/call.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "STARTUPS & SOURCING", to: "/startups-and-sourcing" },
    { label: "PORTFOLIO", to: "/portfolio" },
    { label: "TALENT POOL", to: "/in-house-team" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-black text-white shadow-sm">
        <div className="flex items-center justify-between px-4 md:px-10 py-3">
          {/* Left: Logo + Brand + Phone */}
          <div className="flex items-center gap-6">
            {/* Logo & Brand */}
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

            {/* Phone (clickable) */}
            <div className="hidden md:flex ml-14 items-center text-sm font-inter gap-2">
              <img src={call} alt="Phone" className="w-4 object-contain" />
              <a
                href="tel:+442012345678"
                className="hover:underline hover:text-[#2174bb] transition duration-200"
              >
                +44 (0)20-1234-5678
              </a>
            </div>
          </div>

          {/* Right: Nav Items */}
          <nav className="hidden lg:flex gap-8 text-sm font-arya uppercase">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `hover:underline transition duration-150 ${
                    isActive ? "underline font-bold" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <MenuIcon onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Sidebar for mobile */}
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
