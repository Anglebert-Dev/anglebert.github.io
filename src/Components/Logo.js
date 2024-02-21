import React from "react";
import img from "../Images/me.jpg";

const Logo = () => {
  return (
    <img
      src={img}
      alt="Company Logo"
      className="mb-8"
      style={{ width: "100px", height: "auto" }}
    />
  );
};

export default Logo;
