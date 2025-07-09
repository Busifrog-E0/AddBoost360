import { useState } from "react";
import Sidebar from "./components/Sidebar";

import ServiceSection from "./components/ServiceSection";

import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import TeamSection from "./components/TeamSection";
import CompanySection from "./components/CompanySection";

import FormListPage from "./components/FormListPage";

function App() {
  const [activeSection, setActiveSection] = useState("service");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "service":
        return <ServiceSection />;
      case "portfolio":
        return <PortfolioSection />;
      case "teams":
        return <TeamSection />;
      case "about":
        return <AboutSection />;
      case "companies":
        return <CompanySection />;
      case "form":
        return <FormListPage />;
      default:
        <ServiceSection />;
        return;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      )}

      {/* Sidebar */}
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

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Optional Header can go here */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
