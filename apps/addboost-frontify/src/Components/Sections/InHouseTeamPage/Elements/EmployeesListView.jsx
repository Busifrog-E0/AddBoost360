import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";

import Arrowforward from "../../../../assets/arrowforwardwhite.svg";
import Arrowbackward from "../../../../assets/arrowbackwardwhite.svg";

import Button from "../../../Button";
import { useNavigate } from "react-router";
import SlideIndicators from "../../HomePage/Elements/SlideIndicators";

const EmployeesListView = ({
  isSlideIndicatorsEnabled = false,
  title,
  employees = [],
  showAllEmployeesButton = false,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [startX, setStartX] = useState(null);
  const [endX, setEndX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentSlide(0);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [employees]);

  const maxSlide = Math.max(0, employees.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(maxSlide, prev + 1));
  };

  const getTransformValue = () => {
    const itemWidth = 100 / itemsPerView;
    return -(currentSlide * itemWidth);
  };

  // SWIPE + DRAG support
  const handleSwipe = () => {
    if (startX === null || endX === null) return;

    const distance = startX - endX;
    const threshold = 50;

    if (distance > threshold && currentSlide < maxSlide) {
      handleNext();
    } else if (distance < -threshold && currentSlide > 0) {
      handlePrevious();
    }

    setStartX(null);
    setEndX(null);
    setIsDragging(false);
  };

  // Touch Handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  // Mouse Handlers
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setEndX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging) handleSwipe();
  };

  const handleMouseLeave = () => {
    if (isDragging) handleSwipe();
  };

  const totalSlides = maxSlide + 1;

  return (
    <div className="select-none">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h1 className="uppercase font-anton text-3xl 2xl:text-5xl text-white ">
          {title}
        </h1>
        <div className="flex items-center gap-2 flex-shrink-0 mt-2 md:mt-0">
          <button
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            className={`p-2 lg:p-3 rounded-full border-2 transition-all duration-300 ${
              currentSlide === 0
                ? "border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
                : "border-gray-400 text-gray-900 hover:bg-gray-200 hover:text-white transform hover:scale-110 flex-shrink-0"
            }`}
          >
            <img
              src={Arrowbackward}
              alt="Previous"
              className="w-3 h-3 lg:w-8 lg:h-8"
            />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === maxSlide}
            className={`p-2 lg:p-3 rounded-full border-2 transition-all duration-300 ${
              currentSlide === maxSlide
                ? "border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
                : "border-gray-400 text-gray-900 hover:bg-gray-200 hover:text-white transform hover:scale-110 flex-shrink-0"
            }`}
          >
            <img
              src={Arrowforward}
              alt="Next"
              className="w-3 h-3 lg:w-8 lg:h-8"
            />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative overflow-hidden rounded-none mt-14"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-500 gap-4 ease-in-out"
          style={{
            transform: `translateX(${getTransformValue()}%)`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {employees.slice(0, 6).map((employee) => (
            <div
              key={employee.DocId}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 "
              style={{ maxWidth: `calc(${100 / itemsPerView}% - 1rem)` }}
            >
              <EmployeeCard employee={employee} />
            </div>
          ))}
        </div>
      </div>
      {isSlideIndicatorsEnabled && totalSlides > 1 && (
        <div className="mt-12 gap-2">
          <SlideIndicators
            items={Array.from({ length: totalSlides })}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      )}
      {showAllEmployeesButton && (
        <div className="flex items-end justify-center mt-8">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            hoverBgColor="bg-gray-300"
            hoverTextColor="text-black"
            iconColor="black"
            onClick={() => {
              navigate("/in-house-team/view-team");
            }}
            text="View Full Team"
          />
        </div>
      )}
    </div>
  );
};

export default EmployeesListView;
