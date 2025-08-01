import GlobalStartupSupportSection from "../Sections/HomePage/GlobalStartupSupportSection";
import HeroSubSection from "../Sections/HomePage/HeroSubSection";
import HeroSection from "../Sections/HomePage/HeroSection";
import ServicesSection from "../Sections/HomePage/ServicesSection";
import WhySection from "../Sections/HomePage/WhySection";
import JoinTalentPoolSection from "../Sections/HomePage/JoinTalentPoolSection";
import WhyItWorksSection from "../Sections/HomePage/WhyItWorksSection";
import TrustedCompaniesSection from "../Sections/HomePage/TrustedCompaniesSection";
import SuccessStoriesSection from "../Sections/HomePage/SuccessStoriesSection";
import Footer from "../Footer";
import LoaderSection from "../Sections/Loader/LoeaderSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HeroSubSection />
      <ServicesSection />
      <WhySection />
      <GlobalStartupSupportSection />
      <WhyItWorksSection />
      <JoinTalentPoolSection />
      <TrustedCompaniesSection />
      <SuccessStoriesSection />
      {/* <Subscribe /> */}
    </div>
  );
};

export default HomePage;
