import React, { useState, useEffect } from "react";
import Ukflag from "../assets/Ukflag.png";
import Button from "./Button";
import { NavLink, useNavigate } from "react-router";
import MenuIcon from "./MenuIcon";
import Sidebar from "./Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "STARTUP & SOURCING", to: "/startups-and-sourcing" },
    { label: "PORTFOLIO", to: "/protfolio" },
    { label: "IN-HOUSE TEAM", to: "/in-house-team" },
  ];

  return (
    <>
      <div
        className={`flex flex-row justify-between items-center fixed right-0 left-0 top-0 z-30 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm text-black" : "bg-transparent text-white"
          }`}
      >
        <div className="flex flex-row gap-24 items-center px-6 md:px-16">
          <div
            className="flex flex-row gap-2 cursor-pointer items-center leading-normal"
            onClick={() => navigate("/")}
          >
            <div>
              <h1
                className={`text-xl uppercase font-anton m-0 ${isScrolled ? "text-black" : "text-white"
                  }`}
              >
                ADD BOOST <span className={`${isScrolled ? "text-primary" : "text-white"
                  }`}>360</span>
              </h1>
            </div>
            <div className="mt-0">
              <img src={Ukflag} alt="Uploaded" width="30px" />
            </div>
          </div>

          <div className="hidden lg:flex flex-row gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${isScrolled ? "text-black" : "text-white"
                  } ${isActive ? "underline" : "hover:underline"} font-arya outline-none`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex flex-row items-center gap-2">
          <div className="hidden lg:flex flex-row">
            <Button
              onClick={() => navigate("/contact")}
              text="BOOK A FREE CONSULTATION"
            />
          </div>
          <div className="lg:hidden">
            <Button text="" onClick={() => navigate("/contact")} />
          </div>
          <div className="flex lg:hidden flex-row">
            <MenuIcon onClick={() => setMenuOpen(true)} />
          </div>
        </div>
      </div>

      {/* Sidebar Component in mobile view */}
      <Sidebar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navItems={navItems}
      />
    </>
  );
};

export default Header;
