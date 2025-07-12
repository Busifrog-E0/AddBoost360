import { useState } from "react";
import Button from "../Button";
import EmployeeCard from "../Sections/InHouseTeamPage/Elements/EmployeeCard";

const SearchEmployeesPage = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      title: "John Smith",
      designation: "CTO",
      country: "California, USA",
      image: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg" // New image for John
    },
    {
      id: 2,
      title: "Meera Varma",
      designation: "Product Manager",
      country: "New Delhi, India",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" // New image for Meera
    },
    {
      id: 3,
      title: "Carlos Ruiz",
      designation: "UX Designer",
      country: "Barcelona, Spain",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 4,
      title: "Aiko Tanaka",
      designation: "Software Engineer",
      country: "Tokyo, Japan",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    },
    {
      id: 5,
      title: "James Lee",
      designation: "Marketing Director",
      country: "New York, USA",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    },
    {
      id: 6,
      title: "Fatima Al-Fulan",
      designation: "HR Specialist",
      country: "Dubai, UAE",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 7,
      title: "Arjun Patel",
      designation: "Cloud Architect",
      country: "Bengaluru, India",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
      id: 8,
      title: "Isabella Rossi",
      designation: "Legal Advisor",
      country: "Milan, Italy",
      image: "https://images.pexels.com/photos/206452/pexels-photo-206452.jpeg"
    },
    {
      id: 9,
      title: "Sofia Nguyen",
      designation: "Data Scientist",
      country: "Ho Chi Minh City, Vietnam",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      id: 10,
      title: "Liam O'Connor",
      designation: "Finance Manager",
      country: "Dublin, Ireland",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    }
  ]);



  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 py-14 pt-32 md:py-20 md:pt-40 lg:py-24 lg:pt-44 bg-pastelpink ">
      <h className="font-anton text-black uppercase text-3xl md:text-4xl 2xl:text-5xl block mt-2 ">
        OUR Team
      </h>
      <p className="text-sm font-inter text-black mt-2">
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
          <div
            key={employee.id}
            className="w-full"
          >
            <EmployeeCard employee={employee} />
          </div>
        ))}
      </div>

      <div className="flex items-end justify-center mt-8">
        <Button onClick={() => { }} text="View More" />
      </div>
    </div>
  );
};

export default SearchEmployeesPage;
