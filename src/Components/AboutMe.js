import React from "react";
import Button from "./Button";

function AboutMe() {
  return (
    <div className="about-me bg-white p-6 h-screen lg:ml-[25%] lg:w-[65%]">
      <h2 className="text-2xl font-bold mb-6 pl-6">About Me</h2>
      <p className="mb-6 pl-6 text-[14px]">Hi! I'm Lucy.</p>
      <p className="mb-6 pl-6 text-[14px]">
        Passionate and seasoned Product Designer with 10 years of experience
        translating ideas <br />
        into visually stunning, user-centric experiences. Proficient in Figma, I
        excel in <br />
        collaborative, cross-functional environments.
      </p>
      <p className="mb-2 font-bold pl-6">🚀 Key Strengths</p>
      <div className="pl-6 mb-4 text-[14px]">
        <p>Agile and adaptable</p>
        <p>Innovation-driven mindset</p>
        <p>Strong problem-solving skills</p>
        <p>Versatility across mobile and web design</p>
        <p>Effective communication and collaboration</p>
      </div>
      <p className="mb-2 font-bold pl-6">🏆 Achievements</p>
      <p className="mb-4 text-[14px] pl-6">
        Contributed to [mention notable projects or achievements], earning
        recognition
        <br /> for excellence and innovation in product design.
      </p>
      <p className="mb-2 font-bold pl-6">🌟 Future Focus</p>
      <p className="mb-4 text-[14px] pl-6">
        Committed to staying ahead of design trends, I aim to craft impactful
        designs that
        <br /> elevate user experiences.
      </p>
      <p className="pl-6 text-[14px]">
        Let's create design stories that resonate and inspire.
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
