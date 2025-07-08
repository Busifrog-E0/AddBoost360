import CategoriesListView from "./Elements/CategoriesListView";

const CategoriesSection = ({ isSlideIndicatorsEnabled = false }) => {
    const services = [
        {
            id: 1,
            title: "Highly Competent Professionals",
            description: "For professionals with solid experience and proven skillsets.",
            image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
            skills: ["JavaScript", "React", "Node.js", "Python", "Django", "Ruby on Rails"]
        },
        {
            id: 2,
            title: "Intern-Level Freelancers",
            description: "For passionate learners ready to grow through guided real-time projects.",
            image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg",
            skills: ["JavaScript", "React", "Node.js", "Python", "Django", "Ruby on Rails"]
        },
    ];

    return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 md:py-20 lg:py-24 bg-pastelpink ">
            <CategoriesListView title="Freelancer Categories" showAllServicesButton={true} isSlideIndicatorsEnabled={isSlideIndicatorsEnabled} services={services} />
        </div>
    );
};

export default CategoriesSection;