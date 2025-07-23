import { useState } from "react";
import EmployeesListView from "./Elements/EmployeesListView";

const EmployeesSection = ({ showAllEmployeesButton = true }) => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      title: "John Smith",
      designation: "CTO",
      country: "California, USA",
      image:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg", // New image for John
    },
    {
      id: 2,
      title: "Meera Varma",
      designation: "Product Manager",
      country: "New Delhi, India",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg", // New image for Meera
    },
    {
      id: 3,
      title: "Carlos Ruiz",
      designation: "UX Designer",
      country: "Barcelona, Spain",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 4,
      title: "Aiko Tanaka",
      designation: "Software Engineer",
      country: "Tokyo, Japan",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    },
    // {
    //     id: 5,
    //     title: "James Lee",
    //     designation: "Marketing Director",
    //     country: "New York, USA",
    //     image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
    // },
    // {
    //     id: 6,
    //     title: "Fatima Al-Fulan",
    //     designation: "HR Specialist",
    //     country: "Dubai, UAE",
    //     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    // },
    // {
    //     id: 7,
    //     title: "Arjun Patel",
    //     designation: "Cloud Architect",
    //     country: "Bengaluru, India",
    //     image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    // },
    // {
    //     id: 8,
    //     title: "Isabella Rossi",
    //     designation: "Legal Advisor",
    //     country: "Milan, Italy",
    //     image: "https://images.pexels.com/photos/206452/pexels-photo-206452.jpeg"
    // },
    // {
    //     id: 9,
    //     title: "Sofia Nguyen",
    //     designation: "Data Scientist",
    //     country: "Ho Chi Minh City, Vietnam",
    //     image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    // },
    // {
    //     id: 10,
    //     title: "Liam O'Connor",
    //     designation: "Finance Manager",
    //     country: "Dublin, Ireland",
    //     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    // }
  ]);

  return (
    <div className="px-6 md:px-14 2xl:px-60 3xl:px-80 
  4xl:px-120 5xl:px-160 6xl:px-180
  7xl:px-220 8xl:px-240 9xl:px-260
  10xl:px-280 11xl:px-300 12xl:px-320
  13xl:px-340 14xl:px-360 15xl:px-400
   py-14 md:py-20 lg:py-24 
  4xl:py-48 5xl:py-56 6xl:py-64 7xl:py-72 
8xl:py-80 9xl:py-96 10xl:py-112 
11xl:py-128 12xl:py-144 13xl:py-160 
14xl:py-180 15xl:py-200 bg-BackgroundGradientleft ">
      <EmployeesListView
        title="Our Team"
        showAllEmployeesButton={showAllEmployeesButton}
        employees={employees}
      />
    </div>
  );
};

export default EmployeesSection;
