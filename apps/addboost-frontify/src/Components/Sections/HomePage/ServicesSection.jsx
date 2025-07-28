import ServicesListView from "./Elements/ServicesListView";

const ServicesSection = ({ isSlideIndicatorsEnabled = false }) => {
  const services = [
    {
      id: 1,
      title: "DIGITAL MARKETING & SEO",
      description: "Drive growth with ROI-focused campaigns.",
      ImageUrl: [
        "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
        "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
      ],
    },
    {
      id: 2,
      title: "WEB & E-COMMERCE DEVELOPMENT",
      description: "Scalable websites & online stores.",
      ImageUrl: [
        "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
    {
      id: 3,
      title: "AI & AUTOMATION",
      description: "Smarter customer experiences with tech tools.",
      ImageUrl: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
      ],
    },
    {
      id: 4,
      title: "BRANDING & DESIGN",
      description: "Logos, packaging, and complete identity kits.",
      ImageUrl: [
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      ],
    },
    {
      id: 5,
      title: "DIGITAL TRAINING",
      description: "Masterclasses for entrepreneurs & teams.",
      ImageUrl: [
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
        "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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
        showAllServicesButton={true}
        services={services}
        title="Dedicated Digital Services"

      />
    </div>
  );
};

export default ServicesSection;
