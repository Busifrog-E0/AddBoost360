import { Outlet, useLocation } from "react-router";
import { useState, useLayoutEffect } from "react";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  const location = useLocation();

  const isLoginPage = location.pathname === "/login"; // ✅ check if it's the login route

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const [activeSection, setActiveSection] = useState("service");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile overlay */}
      {!isLoginPage && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {/* Sidebar */}
      {!isLoginPage && (
        <div
          className={`${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isCollapsed={sidebarCollapsed}
            setIsCollapsed={setSidebarCollapsed}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
