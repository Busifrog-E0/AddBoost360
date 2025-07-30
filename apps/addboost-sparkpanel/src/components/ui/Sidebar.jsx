import React from "react";
import {
  Settings,
  Briefcase,
  Users,
  UserSearch,
  Building2,
  Quote,
  Home,
  LogOut,
  Image,
} from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../features/auth/context/AuthProvider";

const Sidebar = ({
  activeSection,
  setActiveSection,
  isCollapsed,
  setIsCollapsed,
  onCloseMobile, // 👈 Receive from MainLayout
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { id: "services", label: "Services", icon: Settings },
    { id: "portfolio", label: "Portfolio", icon: Briefcase },
    { id: "team", label: "Team", icon: Users },
    { id: "companies", label: "Companies", icon: Building2 },
    { id: "form", label: "Leads", icon: UserSearch },
    { id: "providers", label: "Service Providers", icon: Image },
    { id: "review", label: "Success Stories", icon: Quote },
  ];

  return (
    <div
      className={`bg-slate-900 text-white h-full transition-all duration-300 ease-in-out transform
        flex flex-col
        ${isCollapsed ? "w-16" : "w-64"}
      `}
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
                    navigate(`/${item.id}`);
                    onCloseMobile && onCloseMobile(); // 👈 Close on mobile
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

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-700">
        <button
          onClick={() => {
            logout();
            onCloseMobile && onCloseMobile(); // 👈 Close on mobile
          }}
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium text-white bg-blue-600 hover:bg-red-600 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
