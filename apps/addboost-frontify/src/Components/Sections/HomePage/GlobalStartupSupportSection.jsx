
import ServicesListView from "./Elements/ServicesListView";

const GlobalStartupSupportSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      id: 1,
      title: "Wholesale Product Sourcing",
      description: "Verified suppliers from China, India, UAE & more",
      image: "https://images.pexels.com/photos/5827062/pexels-photo-5827062.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Warehousing/logistics
    },
    {
      id: 2,
      title: "Escrow Payment Protection",
      description: "Funds held safely until product delivery",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Secure payment
    },
    {
      id: 3,
      title: "Shop Setup & Branding",
      description: "Full setup for physical or online stores",
      image: "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Shop branding
    },
    {
      id: 4,
      title: "1-Month Free Marketing",
      description: "Included in our launch packages",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Marketing agency
    },
  ];

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-160 5xl:px-180 6xl:px-200
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200  bg-BackgroundGradientleft ">
      <ServicesListView
        services={services}
        title="Global Startup Support"
        showAllServicesButton={true}
      />
    </div>
  );
};

export default GlobalStartupSupportSection;
