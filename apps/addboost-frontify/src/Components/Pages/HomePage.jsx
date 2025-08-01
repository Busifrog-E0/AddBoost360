// import GlobalStartupSupportSection from "../Sections/HomePage/GlobalStartupSupportSection";
// import HeroSubSection from "../Sections/HomePage/HeroSubSection";
// import HeroSection from "../Sections/HomePage/HeroSection";
// import ServicesSection from "../Sections/HomePage/ServicesSection";
// import WhySection from "../Sections/HomePage/WhySection";
// import JoinTalentPoolSection from "../Sections/HomePage/JoinTalentPoolSection";
// import WhyItWorksSection from "../Sections/HomePage/WhyItWorksSection";
// import TrustedCompaniesSection from "../Sections/HomePage/TrustedCompaniesSection";
// import SuccessStoriesSection from "../Sections/HomePage/SuccessStoriesSection";
// import Footer from "../Footer";
// import LoaderSection from "../Sections/Loader/LoeaderSection";

// const HomePage = () => {
//   return (
//     <div>
//       <HeroSection />
//       <HeroSubSection />
//       <ServicesSection />
//       <WhySection />
//       <GlobalStartupSupportSection />
//       <WhyItWorksSection />
//       <JoinTalentPoolSection />
//       <TrustedCompaniesSection />
//       <SuccessStoriesSection />
//       {/* <Subscribe /> */}
//     </div>
//   );
// };

// export default HomePage;


import { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("../Sections/HomePage/HeroSection"));
const HeroSubSection = lazy(() => import("../Sections/HomePage/HeroSubSection"));
const ServicesSection = lazy(() => import("../Sections/HomePage/ServicesSection"));
const WhySection = lazy(() => import("../Sections/HomePage/WhySection"));
const GlobalStartupSupportSection = lazy(() => import("../Sections/HomePage/GlobalStartupSupportSection"));
const JoinTalentPoolSection = lazy(() => import("../Sections/HomePage/JoinTalentPoolSection"));
const WhyItWorksSection = lazy(() => import("../Sections/HomePage/WhyItWorksSection"));
const TrustedCompaniesSection = lazy(() => import("../Sections/HomePage/TrustedCompaniesSection"));
const SuccessStoriesSection = lazy(() => import("../Sections/HomePage/SuccessStoriesSection"));


const HomePage = () => {
  return (
    <Suspense fallback={<div></div>}>
      <HeroSection />
      <HeroSubSection />
      <ServicesSection />
      <WhySection />
      <GlobalStartupSupportSection />
      <JoinTalentPoolSection />
      <WhyItWorksSection />
      <TrustedCompaniesSection />
      <SuccessStoriesSection />
    </Suspense>
  );
};

export default HomePage;
