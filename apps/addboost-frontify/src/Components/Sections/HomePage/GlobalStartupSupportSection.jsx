
import ServicesListView from "./Elements/ServicesListView";
import branding from '../../../assets/GlobalStartupSupportSection/branding.webp'
import escrow from '../../../assets/GlobalStartupSupportSection/escrow.webp'
import month from '../../../assets/GlobalStartupSupportSection/month.webp'
import wholesale from '../../../assets/GlobalStartupSupportSection/wholesale.jpeg'

const GlobalStartupSupportSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      DocId: 1,
      Title: "Wholesale Product Sourcing",
      Description2: "Verified suppliers from China, India, UAE & more",
      ImageUrl: [
        wholesale
      ],
    },
    {
      DocId: 2,
      Title: "Escrow Payment Protection",
      Description2: "Funds held safely until product delivery",
      ImageUrl: [
        escrow
      ],
    },
    {
      DocId: 3,
      Title: "Shop Setup & Branding",
      Description2: "Full setup for physical or online stores",
      ImageUrl: [
        branding
      ],
    },
    {
      DocId: 4,
      Title: "1-Month Free Marketing",
      Description2: "Included in our launch packages",
      ImageUrl: [
        month
      ],
    },
  ];


  return (
    <div className="px-6 md:px-10 2xl:px-24 3xl:px-32
4xl:px-60 5xl:px-80 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400

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
