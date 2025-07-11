import CategoriesListView from "./Elements/CategoriesListView";

const CategoriesSection = ({ isSlideIndicatorsEnabled = false }) => {
    const services = [
        {
            id: 1,
            number: "01",
            title: "highly competent professionals",
            description: "Must have 3+ years' experience, strong portfolio",
            image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        },
        {
            id: 2,
            number: "02",
            title: "flexible remote opportunities",
            description: "Work from anywhere with competitive rates and project-based assignments",
            image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        }
    ];

    return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-pastelpink ">
            <CategoriesListView title="Freelancer Categories" showAllServicesButton={true} isSlideIndicatorsEnabled={isSlideIndicatorsEnabled} services={services} />
        </div>
    );
};

export default CategoriesSection;