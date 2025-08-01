import { Outlet, useLocation } from "react-router";
import { useEffect, useState, useLayoutEffect } from "react";
import Header from "../Components/Header";

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

      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;
