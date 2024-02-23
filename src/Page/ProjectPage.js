import React from "react";
import Project from "../Components/Projects";
import { projectsData } from "../utils/objects";
import Button from "../Components/Button";

const ProjectPage = () => {


  const handleGithubClick = () => {
    window.open(
      "https://github.com/Anglebert-Dev"
    );
  };

  return (
    <div className="container mx-auto mt-12 p-8  ">
      <h1 className="text-3xl font-bold mt-8 md:mt-16">Projects</h1>
      <div className="">
        <hr className="mt-4 md:mt-8 mb-8" />
        <div className="mb-8 md:w-3/4 mt-12 lg:w-full  ">
          {/* <div className="mb-8 md:w-3/4 lg:w-1/2 xl:w-2/3"> */}
          {projectsData.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col  lg:w-[80%] ml-6  lg:justify-between">
        <button className="button mb-3 text-center" onClick={handleGithubClick}>
          Check My Github
        </button>
        <Button label="Contact Me" link="/contact" />
        <Button label="Home" link="/" />
      </div>
    </div>
  );
};

export default ProjectPage;
