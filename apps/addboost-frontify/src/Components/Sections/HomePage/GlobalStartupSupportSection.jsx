import Service1 from "../../../assets/Service1.png";
import Service2 from "../../../assets/Service2.png";
import Service3 from "../../../assets/Service3.png";
import Button from "../../Button";
import ServicesListView from "./Elements/ServicesListView";

const GlobalStartupSupportSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      id: 1,
      title: "Wholesale Product Sourcing",
      description: "Verified suppliers from China, India, UAE & more ",
      image: Service1,
    },
    {
      id: 2,
      title: " Escrow Payment Protection",
      description: "Funds held safely until product delivery",
      image: Service2,
    },
    {
      id: 3,
      title: "Shop Setup & Branding",
      description: "Full setup for physical or online stores ",
      image: Service3,
    },
    {
      id: 4,
      title: "1-Month Free Marketing",
      description: "Included in our launch packages",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
  ];

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  ">
      <ServicesListView
        services={services}
        title="Global Startup Support"
        showAllServicesButton={true}
      />
    </div>
  );
};

export default GlobalStartupSupportSection;
