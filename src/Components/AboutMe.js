import React from "react";
import Button from "./Button";

function AboutMe() {
  return (
    <div className="about-me bg-white p-6 h-screen lg:ml-[25%] lg:w-[65%]">
      <h2 className="text-2xl font-bold mb-6 pl-6">About Me</h2>
      <p className="mb-6 pl-6 text-[14px]">Hi! I'm Anglebert.</p>
      <p className="mb-6 pl-6 text-[14px]">
        Experienced Software Engineer with five years of practice and a diverse
        skill set.
        Proficient in Node.js,  <br /> TypeScript, ReactJS, Java (Spring Boot),PHP(Laravel) CI/CD
        processes, Docker, embedded systems, <br /> microservices,Microsoft
        Office.
        Specializing in developing applications for advancing <br />  technology in my
        country.
      </p>
      <p className="mb-2 font-bold pl-6">🚀 Key Strengths</p>
      <div className="pl-6 mb-4 text-[14px]">
        <p>Agile and adaptable</p>
        <p>Innovation-driven mindset</p>
        <p>Strong problem-solving skills</p>
        <p>Versatility across backend development</p>
        <p>Effective communication and collaboration</p>
      </div>
      <p className="mb-2 font-bold pl-6">🏆 Achievements</p>
      <p className="mb-4 text-[14px] pl-6">
        Contributed to various initiatives aimed at improving essential systems, <br /> 
        including student management systems and healthcare management <br /> systems,
        among others.Recognized for excellence in software engineering.
      </p>
      <p className="mb-2 font-bold pl-6">🌟 Future Focus</p>
      <p className="mb-4 text-[14px] pl-6">
        Committed to continuous learning and making a substantial impact in <br /> 
        Software Engineering.
        Striving to push the boundaries of software  <br /> development while actively
        contributing to the technological  <br /> progress of my country.
      </p>
      <p className="pl-6 text-[14px]">
        Let's collaborate and innovate to drive technological advancement.
      </p>
      <div className="my-8 border-t-2 lg:w-[80%] ml-6 border-gray-200 "></div>

      <div className="mt-8 flex flex-col  lg:w-[80%] ml-6  lg:justify-between">
        <Button label="Resume" link="/resume" />
        <Button label="My Projects" link="/projects" />
        <Button label="Contact Me" link="/contact" />
      </div>
      <div className="mt-8" />
    </div>
  );
}

export default AboutMe;
