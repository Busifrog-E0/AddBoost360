import { Outlet, useLocation } from "react-router";
import { useLayoutEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTopButton from "../Components/ScrollToTopButton";
import GoogleTranslateButton from "../Components/GoogleTranslateButton";

const MainLayout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <GoogleTranslateButton />
    </div>
  );
};

export default MainLayout;