
const WhyCard = ({ item }) => {
    return (
        <div className="flex flex-col">
            <img src={item.icon} alt="creative" className="w-8" />
            <h3 className="font-arya mt-2 text-lg lg:text-xl 2xl:text-2xl">
                {item.title}
            </h3>
            <p className="mt-2 font-inter text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                {item.description}
            </p>
        </div>
    );
};

export default WhyCard;