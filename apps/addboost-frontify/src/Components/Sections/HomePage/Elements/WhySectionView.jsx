import { useNavigate } from "react-router";
import { useState } from "react";
import WhyCard from "./WhyCard";
import Button from "../../../Button";
import { useEffect } from "react";

const WhySectionView = ({ title, subtitle, items = [], showLearnMoreButton = false }) => {
  const navigate = useNavigate();
  const [whyItems, setWhyItems] = useState([]);

  useEffect(() => {
    setWhyItems(items);
  }, [items]);

  return (
    <>
      {/*// Global creative*/}
      <div className=" flex flex-col gap-2">
        <p className="text-primary  font-inter text-base 2xl:text-lg">
          {subtitle}
        </p>
        <h className="uppercase text-3xl 2xl:text-5xl font-arya ">
          {title}
        </h>
      </div>
      {/*//creative list*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {whyItems.map((item, index) => (
          <WhyCard key={index} item={item} />
        ))}
      </div>
      {
        showLearnMoreButton && (
          <div className="flex items-end justify-center mt-8">
            <Button
              bgColor="bg-black"
              text="LEARN MORE ABOUT US"
              onClick={() => {
                navigate("/startups-and-sourcing");
              }}
            />
          </div>
        )
      }

    </>
  );
};

export default WhySectionView;
