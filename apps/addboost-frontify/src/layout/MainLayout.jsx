// import { Outlet, useLocation } from "react-router";
// import { useEffect, useState, useLayoutEffect } from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";

// import { useRef } from "react";
// import ScrollToTopButton from "../Components/ScrollToTopButton";

// const MainLayout = () => {
//   const location = useLocation();

//   useLayoutEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [location]);

//   return (
//     <div>
//       <Header />
//       <Outlet />
//       <Footer />

//       <ScrollToTopButton />
//     </div>
//   );
// };

// export default MainLayout;
import { lazy, Suspense, useLayoutEffect, } from "react";
import { Outlet, useLocation } from "react-router";

const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../Components/Footer"));
const ScrollToTopButton = lazy(() => import("../Components/ScrollToTopButton"));

const MainLayout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div>
      <Suspense fallback={<div />}>
        <Header />
      </Suspense>

      <Outlet />

      <Suspense fallback={<div />}>
        <Footer />
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
};

export default MainLayout;
