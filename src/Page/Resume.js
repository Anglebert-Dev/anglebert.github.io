import React from "react";
import WorkExperience from "../Components/WorkExperience";
import Button from "../Components/Button";
import Logo from "../Images/comp.png";

const ResumePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mt-[70px]">Resume</h1>
      <hr className="mt-8 mb-8" />
      <div className="mb-8 h-screen">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <WorkExperience
          date="2023-Present"
          position="Senior Product Designer"
          description={[
            "Designed 200+ wood products",
            "Launched design system",
          ]}
          imageUrl={Logo}
        />
        <WorkExperience
          date="2020-2023"
          position="Product Designer"
          description={[
            "Designed 100+ medicine box",
            "Certified Google UX Design course",
          ]}
          imageUrl={Logo}
        />
        <WorkExperience
          date="2018-2020"
          position="Junior Product Designer"
          description={[
            "Helped User research projects",
            "Created graphic universe",
          ]}
          imageUrl={Logo}
        />
        <hr className="mt-8 mb-8" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">Ordinary National Diploma</p>
            <p className="text-[12px]">Lycee De Kigali, 2017-2019</p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">
              Advanced National Diploma in Software Engineering Systems
            </p>
            <p className="text-[12px]">Rwanda Coding Academy, 2020-2023</p>
          </div>
        </div>

        <hr className="mt-8 mb-8" />
        <div className="mt-8 flex flex-col  lg:w-[80%] ml-6  lg:justify-between">
          <Button label="Download Resume" />
          <Button label="My Projects" />
          <Button label="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
