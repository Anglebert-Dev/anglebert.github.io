import React from "react";

const WorkExperience = ({ date, position, description, imageUrl }) => {
  return (
    <div className="container mx-auto lg:ml-[100px] ">
      <div className="grid grid-cols-2 items-center experiences mb-8">
        <div className="max-w-64 max-h-64 m-2">
          <img
            src={imageUrl}
            alt={position}
            className="w-28 h-28 object-contain b-1 border-2  border-grey-500 border-grey-100 rounded-full mr-2 image"
          />
        </div>
        <div className="desc">
          <p className="text-lg font-bold">{position}</p>
          <p className="text-sm">{date}</p>
          <ul className=" list-inside text-[12px]">
            {description.map((item, index) => (
              <li key={index} className="text-left mb-2">
                - {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
