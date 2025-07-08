
import Service1 from "../../../assets/Service1.png";
import Service2 from "../../../assets/Service2.png";
import Service3 from "../../../assets/Service3.png";
import ServicesListView from "./Elements/ServicesListView";


const ServicesSection = ({ isSlideIndicatorsEnabled = false }) => {
    const services = [
        {
            id: 1,
            title: "DIGITAL MARKETING & SEO",
            description: "Drive growth with ROI-focused campaigns.",
            image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
        },
        {
            id: 2,
            title: "WEB & E-COMMERCE DEVELOPMENT",
            description: "Scalable websites & online stores.",
            image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg"
        },
        {
            id: 3,
            title: "AI & AUTOMATION",
            description: "Smarter customer experiences with tech tools.",
            image: Service3
        },
        {
            id: 4,
            title: "BRANDING & DESIGN",
            description: "Logos & visual identity that stands out.",
            image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        }
    ];

    return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24  ">
            <ServicesListView showAllServicesButton={true} services={services} title="Dedicated Digital Services" />
        </div>
    );
};

export default ServicesSection;