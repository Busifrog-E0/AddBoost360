
const WhyCard = ({ item }) => {
    return (
        <div className="flex flex-col">
            <img src={item.icon} alt="creative" className="w-8" />
            <h3 className="font-anton  mt-2 text-lg lg:text-xl">
                {item.title}
            </h3>
            <p className="mt-2 font-inter text-xs sm:text-sm leading-relaxed text-gray-700">
                {item.description}
            </p>
        </div>
    );
};

export default WhyCard;