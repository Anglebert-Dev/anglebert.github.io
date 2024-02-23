import React from "react";
import Button from "../Components/Button";
import image from "../Images/compp.jpg";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:anglebertsh@gmail.com";
};

  const handlePhoneClick = () => {
    window.location.href = "tel:+250791746914";
  };

  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/ishimwe-shumbusho-anglebert-922275254/"
    );
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8 h-screen">
        <div className="mt-4 flex flex-col  lg:w-[62%] ml-[12%]  lg:justify-between">
          <h1 className="text-3xl font-bold mt-[70px]">Contact Me</h1>
          <hr className="mt-4 mb-4" />
          <div>
            <img src={image} alt="contact" className="" />
          </div>
          <hr className="mt-4 mb-4" />
          <button
            className="button mb-3 text-center"
            onClick={handleEmailClick}
          >
            E-mail
          </button>
          <button
            className="button mb-3 text-center"
            onClick={handlePhoneClick}
          >
            Phone
          </button>
          <button
            className="button mb-3 text-center"
            onClick={handleLinkedInClick}
          >
            LinkedIn
          </button>
          <Button label="Home" link="/" />
          <hr className="mt-4 mb-4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
