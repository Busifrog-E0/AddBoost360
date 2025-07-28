
import ServicesListView from "./Elements/ServicesListView";

const GlobalStartupSupportSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      DocId: 1,
      Title: "Wholesale Product Sourcing",
      Description2: "Verified suppliers from China, India, UAE & more",
      ImageUrl: [
        "https://images.pexels.com/photos/5827062/pexels-photo-5827062.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
    {
      DocId: 2,
      Title: "Escrow Payment Protection",
      Description2: "Funds held safely until product delivery",
      ImageUrl: [
        "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
    {
      DocId: 3,
      Title: "Shop Setup & Branding",
      Description2: "Full setup for physical or online stores",
      ImageUrl: [
        "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
    {
      DocId: 4,
      Title: "1-Month Free Marketing",
      Description2: "Included in our launch packages",
      ImageUrl: [
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
  ];


  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200   bg-BackgroundGradientleft ">
      <ServicesListView
        services={services}
        title="Global Startup Support"
        showAllServicesButton={true}
      />
    </div>
  );
};

export default GlobalStartupSupportSection;
