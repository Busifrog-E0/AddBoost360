const WhyCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 md:p-10 rounded-lg bg-black/20 border border-black/20 min-h-[240px]">
      <img src={item.icon} alt="icon" className="w-8 mb-4" />
      <h3 className="font-anton text-lg lg:text-xl text-PrimaryWhite">
        {item.title}
      </h3>
      <p className="mt-2 font-inter text-sm text-white leading-relaxed">
        {item.description}
      </p>
    </div>
  );
};

export default WhyCard;
