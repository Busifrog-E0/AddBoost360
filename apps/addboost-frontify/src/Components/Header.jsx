import React from "react";
import Ukflag from "../assets/Ukflag.png";
import Button from "./Button";
import { Link, NavLink, useNavigate } from "react-router";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "STARTUP & SOURCING", to: "/startups-and-sourcing" },
    { label: "PORTFOLIO", to: "/protfolio" },
    { label: "IN-HOUSE TEAM", to: "/in-house-team" },
  ];
  return (
    <>
      {/* px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  */}
      <div className="flex flex-row justify-between items-center fixed right-0 left-0 top-0 bg-white z-30 shadow-sm">
        <div className="flex flex-row gap-24 ml-6 lg:ml-10  items-center">
          <div className="flex flex-row gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <div >
              <h className="text-xl uppercase font-arya  ">
                ADD BOOST <span className="text-primary">360</span>
              </h>
            </div>
            <div className="mt-0">
              <img src={Ukflag} alt="Uploaded" width="40" />
            </div>
          </div>

          <div className="hidden lg:flex flex-row gap-6 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "font-arya tracking-widest underline outline-none"
                    : "text-black hover:underline font-arya tracking-widest outline-none"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="hidden lg:flex flex-row">
            <Button
              onClick={() => navigate("/contact")}
              text="BOOK A FREE CONSULTATION"
            />
          </div>
          <div className=" lg:hidden">
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
