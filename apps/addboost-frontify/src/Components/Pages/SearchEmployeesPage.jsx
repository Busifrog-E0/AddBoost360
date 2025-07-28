import { useState } from "react";
import Button from "../Button";
import EmployeeCard from "../Sections/InHouseTeamPage/Elements/EmployeeCard";
import useGetList from "../../hooks/api/useGetList";
import LoaderSection from "../Sections/Loader/LoeaderSection";

const SearchEmployeesPage = () => {
  const {
    data: employees,
    isLoading,
    isLoadingMore,
    isPageDisabled,
    getList,
  } = useGetList({ endpoint: "employees" });


  if (isLoading) {
    return <LoaderSection />
  }
  return (
    <div className=" px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-36 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200  pt-32 md:pt-40 lg:pt-44 bg-BackgroundGradientleft ">
      <h className="font-anton text-white uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2 ">
        OUR Team
      </h>
      <p className="text-sm font-inter text-gray-400 mt-2">
        View Our Global Talent Network & Empower the Digital Future
      </p>

      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search here"
          className="p-3 bg-white border border-gray-300 rounded-md text-black placeholder-gray-400 outline-none mt-5"
        />
      </div>

      <div className="mt-4 md:mt-6 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <div key={employee.DocId} className="w-full">
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-center mt-8">
        <Button
          bgColor="bg-white"
          textColor="text-black"
          hoverBgColor="bg-gray-300"
          hoverTextColor="text-black"
          iconColor="black"
          onClick={() => { }}
          text="View More"
        />
      </div>
    </div>
  );
};

export default SearchEmployeesPage;
