// rrd
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; // use react-router-dom, not just react-router
import MainLayout from "../layout/MainLayout";
import ServiceSection from "../components/ServiceSection";
import CompanySection from "../components/CompanySection";
import TeamSection from "../components/TeamSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import AddServicePage from "../components/AddServicePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<ServiceSection />} />
      <Route path="/services" element={<ServiceSection />} />
      <Route path="/services/add/new" element={<AddServicePage />} />
      <Route
        path="/companies"
        element={<CompanySection />}
      />
      <Route path="/portfolio" element={<PortfolioSection />} />
      <Route
        path="/teams"
        element={<TeamSection />}
      />
      <Route
        path="/about"
        element={<AboutSection />}
      />
    </Route>
  )
);
