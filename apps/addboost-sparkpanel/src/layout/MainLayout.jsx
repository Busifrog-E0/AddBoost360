import { Outlet, useLocation } from "react-router";
import { useState, useLayoutEffect, useEffect } from "react";
import Sidebar from "../components/ui/Sidebar";
import { Menu } from "lucide-react";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  useEffect(() => {
    const BreakWheel = () => {
      function handleNumberInputWheel(event) {
        // Prevent the default behavior of the mouse wheel (scrolling) only if the event occurred on a number input
        if (event.target.type === "number") {
          event.preventDefault();
        }
      }
      // Add a non-passive event listener for the wheel event on all number input fields
      document.addEventListener("wheel", handleNumberInputWheel, {
        passive: false,
      });
    };
    return BreakWheel();
  }, []);

  const [activeSection, setActiveSection] = useState("service");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Mobile Overlay */}
      {!isLoginPage && mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      {!isLoginPage && (
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out
            bg-[#0F172A] text-white 
            ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:static lg:inset-0`}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isCollapsed={sidebarCollapsed}
            setIsCollapsed={setSidebarCollapsed}
            onCloseMobile={() => setMobileMenuOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar for Mobile */}
        {!isLoginPage && (
          <div className="lg:hidden p-4 bg-[#0F172A] text-white shadow-md flex items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="ml-4 text-lg font-semibold">Add Boost 360</h1>
          </div>
        )}

        {/* Page Outlet */}
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
