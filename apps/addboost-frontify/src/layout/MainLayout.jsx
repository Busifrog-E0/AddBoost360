import { Outlet, useLocation } from "react-router";
import { useEffect, useState, useLayoutEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { useRef } from "react";
import ScrollToTopButton from "../Components/ScrollToTopButton";

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
    </div>
  );
};

export default MainLayout;
