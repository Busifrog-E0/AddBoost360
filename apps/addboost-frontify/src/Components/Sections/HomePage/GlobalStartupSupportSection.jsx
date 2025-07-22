
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
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  bg-BackgroundGradientleft ">
      <ServicesListView
        services={services}
        title="Global Startup Support"
        showAllServicesButton={true}
      />
    </div>
  );
};

export default GlobalStartupSupportSection;
