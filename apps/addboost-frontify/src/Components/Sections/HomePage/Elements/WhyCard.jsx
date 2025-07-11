
const WhyCard = ({ item }) => {
    return (
        <div className="flex flex-col">
            <img src={item.icon} alt="creative" className="w-8" />
            <h3 className="font-inter font-bold mt-2 text-base lg:text-lg">
                {item.title}
            </h3>
            <p className="mt-2 font-inter text-sm sm:text-base leading-relaxed text-gray-700">
                {item.description}
            </p>
        </div>
    );
};

export default WhyCard;