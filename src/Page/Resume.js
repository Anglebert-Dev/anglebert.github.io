import React from "react";
import WorkExperience from "../Components/WorkExperience";
import Button from "../Components/Button";
import Logo from "../Images/coseke.jpeg";
import Logo1 from "../Images/emateli.jpeg";
import Logo2 from "../Images/maks..jpeg";
import Logo3 from "../Images/comp.png";
import resume from "../utils/professional_resume.pdf"

const ResumePage = () => {
  const handleDownloadResume = () => {
    const url = resume;
    window.open(url, "_blank");

  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mt-[70px]">Resume</h1>
      <hr className="mt-8 mb-8" />
      <div className="mb-8 h-screen">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <WorkExperience
          date="2024-Present"
          position="Software Engineer Intern"
          description={[
            "Actively involved in the development of core banking systems, internet banking platforms, and data warehouse solutions, ensuring their continuous improvement and functionality.",
            "Design and implement robust fraud monitoring and prevention mechanisms to uphold security standards and protect sensitive financial data.",
            "Contribute to the creation of revenue assurance tools aimed at optimizing revenue streams and enhancing operational efficiency within the banking environment.",
            "Collaborate closely with cross-functional teams to deliver exceptional customer service through the development of innovative software solutions tailored to meet client needs.",
            "Regularly conduct code reviews and provide valuable feedback to enhance and optimize banking software components, ensuring code quality and adherence to best practices.",
          ]}
          imageUrl={Logo}
        />
        <WorkExperience
          date="2023-2023"
          position="Full-stack Software Engineer (Online Education Platform)"
          description={[
            "Led the development of a comprehensive online education platform, handling both frontend and backend responsibilities",
            "Designed and implemented features for managing students, courses, teachers, and reports",
            "Developed RESTful APIs and backend services using Node.js and Express.js, and frontend interfaces using React.js",
            "Integrated authentication and authorization mechanisms to ensure secure access to platform resources",
            "Implemented real-time communication features such as chat and notifications for improved user engagement",
            "Utilized MongoDB and MySQL databases for data storage and retrieval, optimizing queries for performance",
            "Collaborated closely with UI/UX designers to create intuitive and responsive user interfaces",
            "Managed agile development processes including sprint planning, backlog grooming, and retrospectives",
          ]}
          imageUrl={Logo3}
        />
        <WorkExperience
          date="2022-2023"
          position="Backend Software Engineer"
          description={[
            "Designed and developed robust backend systems using Node.js, Java, and PHP",
            "Implemented authentication and authorization mechanisms for secure API access",
            "Performed database schema design and optimization for MySQL, MongoDB, and PostgreSQL databases",
            "Integrated third-party APIs for seamless functionality within applications",
            "Utilized CI/CD pipelines for automated testing and deployment processes",
          ]}
          imageUrl={Logo1}
        />
        <WorkExperience
          date="2021-2023"
          position="Backend Software Engineer (E-commerce)"
          description={[
            "Developed and maintained backend systems for e-commerce platforms using Node.js and PHP",
            "Implemented features such as product catalog, shopping cart, and payment gateways",
            "Integrated with third-party APIs for inventory management and shipping logistics",
            "Optimized database queries and caching strategies to improve performance and scalability",
            "Collaborated with frontend developers to ensure seamless user experiences",
            "Participated in sprint planning, daily stand-ups, and code reviews in an agile environment",
          ]}
          imageUrl={Logo2}
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
          <button className="button mb-4 text-center" onClick={handleDownloadResume}>Download Resume</button>
          <Button label="My Projects" link="/projects" />
          <Button label="Contact Me" link="/contact" />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
