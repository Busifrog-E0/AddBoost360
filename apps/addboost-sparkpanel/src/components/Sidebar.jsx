import React, { useState } from "react";
import {
  Settings,
  Briefcase,
  User,
  ChevronLeft,
  Home,
  Menu,
  Building2,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";

const Sidebar = ({
  activeSection,
  setActiveSection,
  isCollapsed,
  setIsCollapsed,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false); // For mobile toggle
  const navigate = useNavigate();
  const menuItems = [
    { id: "services", label: "Services", icon: Settings },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "team", label: "Team", icon: Users },
    { id: "companies", label: "Companies", icon: Building2 },
    { id: "form", label: "Leads", icon: Building2 },
    { id: "about", label: "About Us", icon: User },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden p-2 bg-slate-900 text-white flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span className="font-bold text-lg">Add Boost 360</span>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-40 bg-slate-900 text-white h-full transition-all duration-300 ease-in-out ${isCollapsed ? "w-16" : "w-64"
          } ${mobileOpen ? "block" : "hidden"} md:flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Add Boost 360</span>
              </div>
            )}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-1.5 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <ChevronLeft
                className={`w-5 h-5 transition-transform ${isCollapsed ? "rotate-180" : ""
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileOpen(false); // Close on mobile tap


                      navigate(`/${item.id}`);


                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "hover:bg-slate-700 text-slate-300 hover:text-white"
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-white"
                        }`}
                    />
                    {!isCollapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-slate-700">
            <div className="flex items-center space-x-3 px-3 py-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  Admin User
                </p>
                <p className="text-xs text-slate-400 truncate">
                  admin@company.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
