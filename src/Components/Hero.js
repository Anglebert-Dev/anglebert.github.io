import React from "react";
import img from "../Images/me.jpg"

function Hero() {
  return (
    <div className="hero h-screen flex justify-center items-center">
      <img
        src={img}
        alt="Your Name"
        className="rounded-full lg:h-[400px] w-64 h-64 lg:w-[400px] object-cover border-8 border-white"
      />
    </div>
  );
}

export default Hero;
