// rrd
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router"; // use react-router-dom, not just react-router

import HomePage from "../Components/Pages/HomePage";
import ServicesPage from "../Components/Pages/ServicesPage";

import Inhousepage from "../Components/Pages/Inhousepage";
import MainLayout from "../layout/MainLayout";
import StartupPage from "../Components/Pages/StartupPage";
import ContactPage from "../Components/Pages/ContactPage";
import SearchEmployeesPage from "../Components/Pages/SearchEmployeesPage";
import SearchStartupsPage from "../Components/Pages/SearchStartupsPage";
import PortfolioPage from "../Components/Pages/PortfolioPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />{" "}
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/startups-and-sourcing" element={<StartupPage />} />
      <Route
        path="/startups-and-sourcing/view-startups"
        element={<SearchStartupsPage />}
      />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/in-house-team" element={<Inhousepage />} />
      <Route
        path="/in-house-team/view-team"
        element={<SearchEmployeesPage />}
      />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  )
);
