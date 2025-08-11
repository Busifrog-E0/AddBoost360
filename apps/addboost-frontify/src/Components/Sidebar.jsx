import { NavLink, useNavigate } from "react-router";
import Button from "./Button";
import { useEffect } from "react";

const Sidebar = ({ menuOpen, setMenuOpen, navItems }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <div
      className={`
    fixed inset-0 bg-black z-[1000] transform transition-transform duration-300 ease-in-out
    ${menuOpen ? "translate-x-0" : "translate-x-full"}
    overflow-y-auto h-screen
  `}
    >
      <div className="flex justify-end p-6">
        <button
          className="text-xl text-white"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-xl font-medium font-arya h-[80%]">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-primary underline outline-none uppercase"
                : "text-white hover:text-primary transition outline-none uppercase"
            }
          >
            {item.label}
          </NavLink>
        ))}
        <div className="flex flex-row">
          <Button
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
            text="BOOK A FREE CONSULTATION"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
