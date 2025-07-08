import GlobalStartupSupportSection from "../Sections/HomePage/GlobalStartupSupportSection";
import HeroSubSection from "../Sections/HomePage/HeroSubSection";
import HeroSection from "../Sections/HomePage/HeroSection";
import ServicesSection from "../Sections/HomePage/ServicesSection";
import WhySection from "../Sections/HomePage/WhySection";
import JoinTalentPoolSection from "../Sections/HomePage/JoinTalentPoolSection";
import WhyItWorksSection from "../Sections/HomePage/WhyItWorksSection";

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
    </div>
  );
};

export default HomePage;
