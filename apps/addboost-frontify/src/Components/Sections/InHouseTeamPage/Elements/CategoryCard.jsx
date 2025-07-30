import Skills from '../../../../assets/skills.png'

const CategoryCard = ({ service }) => {
  return (
    <div className="relative bg-transparent">
      {/* Image */}
      <div className="h-full aspect-square rounded-md overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlapping Text Box */}
      <div className="absolute -bottom-6 left-0 right-6 md:right-8 xl:right-16">
        <div className='w-10 h-10 lg:w-14 lg:h-14 p-2 lg:p-3 bg-primary'>
          <img
            src={Skills}
            alt={"skills"}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex bg-white  ">
          {/* Text content */}
          <div className="p-2 md:p-3 lg:p-4">
            <h3 className="text-base sm:text-lg md:text-xl uppercase font-anton text-PrimaryDarkBlue">
              {service.title}
            </h3>
            <p className="text-sm sm:text-sm md:text-base font-inter text-gray-500 mt-1">
              {service.description}
              {service.link && (
                <a
                  href={service.link}
                  className="text-blue-700 font-medium ml-1 underline"
                >
                  View skills
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
