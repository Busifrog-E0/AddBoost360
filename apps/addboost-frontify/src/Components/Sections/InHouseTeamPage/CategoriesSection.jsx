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
            title: "Intern-Level Freelancers",
            description: "For passionate learners ready to grow through guided real-time projects. ",
            image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
        }
    ];

    return (
        <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-BackgroundGradientright ">
            <CategoriesListView title="Freelancer Categories" showAllServicesButton={true} isSlideIndicatorsEnabled={isSlideIndicatorsEnabled} services={services} />
        </div>
    );
};

export default CategoriesSection;