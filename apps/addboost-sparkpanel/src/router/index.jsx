// rrd
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import MainLayout from "../layout/MainLayout";
import ServiceSection from "../components/ServiceSection";
import CompanySection from "../components/CompanySection";
import TeamSection from "../components/TeamSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import AddServicePage from "../components/AddServicePage";
import FormListPage from "../components/FormListPage";
import ReviewSection from "../components/ReviewSection";
import LoginPage from "../components/LoginPage";

// ✅ Render LoginPage OUTSIDE MainLayout
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Standalone Login page */}
      <Route path="/login" element={<LoginPage />} />

      {/* All other routes use MainLayout */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ServiceSection />} />
        <Route path="/services" element={<ServiceSection />} />
        <Route path="/services/add/new" element={<AddServicePage />} />
        <Route path="/companies" element={<CompanySection />} />
        <Route path="/portfolio" element={<PortfolioSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/form" element={<FormListPage />} />
        <Route path="/review" element={<ReviewSection />} />
      </Route>
    </>
  )
);

