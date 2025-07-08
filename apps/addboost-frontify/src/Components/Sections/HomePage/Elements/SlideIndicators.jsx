
const SlideIndicators = ({ items, currentSlide, setCurrentSlide, activeColor = "bg-primary", inActiveColor = "bg-gray-400", hoverInActiveColor = "bg-gray-500" }) => {
    return (

        <div className="flex gap-1">
            {items.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-1 h-1  transition-all rounded-full duration-300 ${currentSlide === index
                        ? `${activeColor} w-8`
                        : `${inActiveColor} hover:${hoverInActiveColor}`
                        }`}
                />
            ))}
        </div>

    );
};

export default SlideIndicators;
