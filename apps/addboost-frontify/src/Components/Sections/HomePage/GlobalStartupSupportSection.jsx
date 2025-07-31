
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
    <div className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-44 5xl:px-56 6xl:px-72 7xl:px-84
8xl:px-96 9xl:px-112 10xl:px-120
11xl:px-140 12xl:px-160 13xl:px-180
14xl:px-200 15xl:px-220

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72  bg-BackgroundGradientleft ">
      <ServicesListView
        services={services}
        title="Global Startup Support"
        showAllServicesButton={true}
      />
    </div>
  );
};

export default GlobalStartupSupportSection;
