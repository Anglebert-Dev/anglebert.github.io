import React from "react";
import WorkExperience from "../Components/WorkExperience";
import Button from "../Components/Button";

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
          imageUrl="https://www.jotform.com/uploads/LindaJohansson/form_files/Asset%2055%402x.63886207f05e44.36459543.png"
        />
        <WorkExperience
          date="2020-2023"
          position="Product Designer"
          description={[
            "Designed 100+ medicine box",
            "Certified Google UX Design course",
          ]}
          imageUrl="https://www.jotform.com/uploads/LindaJohansson/form_files/MonoGoogle_Drive_2023-01-09_14-37-17-removebg-preview.63bbfcd3edd054.02282576.png"
        />
        <WorkExperience
          date="2018-2020"
          position="Junior Product Designer"
          description={[
            "Helped User research projects",
            "Created graphic universe",
          ]}
          imageUrl="https://www.jotform.com/uploads/LindaJohansson/form_files/Monosnap_logo_-_Google_Drive_2023-01-09_14-38-06-removebg-preview.63bbfcfb5e7d18.57253223.png"
        />
        <hr className="mt-8 mb-8" />
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">
              Bachelor of Science in Industrial Design
            </p>
            <p className="text-[12px]">
              University of Design and Technology, 2014-2018
            </p>
          </div>
          <div className="mb-4">
            <p className="text-lg font-bold mb-2">
              Bachelor of Science in Industrial Design
            </p>
            <p className="text-[12px]">
              University of Design and Technology, 2014-2018
            </p>
          </div>
        </div>

        <hr className="mt-8 mb-8" />
        <div className="mt-8 flex flex-col  lg:w-[80%] ml-6  lg:justify-between">
          <Button label="My Projects" />
          <Button label="Contact Me" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
