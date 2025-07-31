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
        <div className="px-4 md:px-8 2xl:px-20 3xl:px-28
4xl:px-36 5xl:px-48 6xl:px-60 7xl:px-72
8xl:px-80 9xl:px-96 10xl:px-100
11xl:px-120 12xl:px-140 13xl:px-160
14xl:px-180 15xl:px-200

py-10 md:py-14 lg:py-20
4xl:py-24 5xl:py-28 6xl:py-32 7xl:py-36
8xl:py-40 9xl:py-44 10xl:py-48
11xl:py-52 12xl:py-56 13xl:py-60
14xl:py-64 15xl:py-72  bg-BackgroundGradientright overflow-hidden ">
            <CategoriesListView title="Freelancer Categories" showAllServicesButton={true} isSlideIndicatorsEnabled={isSlideIndicatorsEnabled} services={services} />
        </div>
    );
};

export default CategoriesSection;