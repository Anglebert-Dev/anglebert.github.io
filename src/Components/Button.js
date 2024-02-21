import React from "react";
import { Link } from "react-router-dom";

function Button({ label, link }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link className="button mb-4 text-center " to={link} onClick={handleClick}>
      {label}
    </Link>
  );
}

export default Button;
