// rrd
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import MainLayout from "../layout/MainLayout";
import ServiceSection from "../features/service/ServiceSection";

import TeamSection from "../features/team/TeamSection";
import PortfolioSection from "../features/portfolio/PortfolioSection";

import AddServicePage from "../features/service/AddServicePage";
import FormListPage from "../features/leads/FormListPage";
import ReviewSection from "../features/reviews/ReviewSection";
import LoginPage from "../features/auth/LoginPage";
import CompanySection from "../features/companies/CompanySection";
import AuthLayout from "../features/auth/layouts/AuthLayout";
import UnAuthLayout from "../features/auth/layouts/UnAuthLayout";
import CompanyLogoSection from "../features/company logo/CompanyLogoSection";

// ✅ Render LoginPage OUTSIDE MainLayout
export const router = createBrowserRouter(
  createRoutesFromElements(
    
    <>
      {/* Standalone Login page */}
      <Route path="/login" element={<UnAuthLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        {/* All other routes use MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ServiceSection />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/services/add/new" element={<AddServicePage />} />
          <Route path="/companies" element={<CompanySection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/team" element={<TeamSection />} />

          <Route path="/form" element={<FormListPage />} />
          <Route path="/review" element={<ReviewSection />} />
          <Route path="/providers" element={<CompanyLogoSection />} />
        </Route>
      </Route>
    </>
  )
);
