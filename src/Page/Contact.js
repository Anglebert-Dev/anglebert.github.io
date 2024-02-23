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
          <h1 className="text-2xl font-bold mt-[70px]">Contact Me</h1>
          <hr className="mt-4 mb-4" />
          <div>
            <img src={image} alt="contact" className="" />
          </div>
          <hr className="mt-4 mb-5" />
          <div>
            <h2 className="text-2xl font-bold mb-4">Infomation</h2>
            <hr className="mt-4 mb-4" />
            <div className="mb-4">
              <p className="text-1xl font-bold mb-2">
               Emails:
              </p>
              <p className="text-[12px]">anglebertsh@gmail.com</p>
              <p className="text-[12px]">anglebert.dev@gmail.com</p>
            </div>
            <div className="mb-4">
              <p className="text-1xl font-bold mb-2">
                Phone:
              </p>
              <p className="text-[12px]">+250 791746914</p>
            </div>
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
