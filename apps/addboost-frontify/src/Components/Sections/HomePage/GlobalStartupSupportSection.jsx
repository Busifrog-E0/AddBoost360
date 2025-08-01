
import ServicesListView from "./Elements/ServicesListView";
import branding from '../../../assets/GlobalStartupSupportSection/branding.webp'
import escrow from '../../../assets/GlobalStartupSupportSection/escrow.webp'
import month from '../../../assets/GlobalStartupSupportSection/month.webp'
import wholesale from '../../../assets/GlobalStartupSupportSection/wholesale.jpeg'
import branding1 from '../../../assets/GlobalStartupSupportSection/branding1.webp'
import branding2 from '../../../assets/GlobalStartupSupportSection/branding2.webp'
import escrow1 from '../../../assets/GlobalStartupSupportSection/escrow1.webp'
import month1 from '../../../assets/GlobalStartupSupportSection/month1.webp'
import wholesale1 from '../../../assets/GlobalStartupSupportSection/wholesale1.webp'
import escrow2 from '../../../assets/GlobalStartupSupportSection/escrow2.webp'

const GlobalStartupSupportSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      DocId: 1,
      Title: "Wholesale Product Sourcing",
      Description2: "Verified suppliers from China, India, UAE & more",
      ImageUrl: [
        wholesale,
        wholesale1
      ],
    },
    {
      DocId: 2,
      Title: "Escrow Payment Protection",
      Description2: "Funds held safely until product delivery",
      ImageUrl: [
        escrow,
        escrow1,
        escrow2,
      ],
    },
    {
      DocId: 3,
      Title: "Shop Setup & Branding",
      Description2: "Full setup for physical or online stores",
      ImageUrl: [
        branding,
        branding1,
        branding2,
      ],
    },
    {
      DocId: 4,
      Title: "1-Month Free Marketing",
      Description2: "Included in our launch packages",
      ImageUrl: [
        month,
        month1,
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
