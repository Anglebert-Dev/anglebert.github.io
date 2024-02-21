import React from "react";

const Projects = ({ project }) => {
  const { title, images, clientHistory, problem, outcome } = project;

  return (
    <div className="mb-8">
      <h2 className="text-xl   font-bold mb-2">{title}</h2>
      <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-4">
        <div>
          <img src={images[0]} alt={title} className="w-full h-auto mb-4" />
        </div>
        <div className="hidden md:block">
          <img src={images[1]} alt={title} className="w-full h-auto mb-4" />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">{clientHistory.title}</h3>
        <p className="text-sm">{clientHistory.description}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">{problem.title}</h3>
        <p className="text-sm">{problem.description}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold mb-2">{outcome.title}</h3>
        <p className="text-sm">{outcome.description}</p>
      </div>
      <hr className="mt-5 md:mt-8 mb-8" />
    </div>
  );
};

export default Projects;
