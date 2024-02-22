import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("about");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); 
  };

  return (
    <nav className="navbar bg-white border-b-2 border-t-2 border-grey-200 fixed top-0 right-0 w-full z-10 flex justify-between items-center py-6">
      <div className="container mx-auto px-4">
        {/* Toggle button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Close button */}
        

        {/* Navigation Links */}
        <ul
          className={`navbar-nav ${
            isOpen
              ? "flex flex-col items-center"
              : "hidden lg:flex lg:items-center lg:justify-end"
          } space-y-4 lg:space-y-0 lg:space-x-4`}
        >
          <li
            className={`nav-item text-gray-700 hover:text-gray-900 ${
              activeLink === "about" ? "border-b-2 border-red-500 " : ""
            }`}
          >
            <Link
              to="/about"
              onClick={() => handleLinkClick("about")}
              className="nav-link"
            >
              About Me
            </Link>
          </li>
          <li
            className={`nav-item text-gray-700 hover:text-gray-900 ${
              activeLink === "resume" ? "border-b-2 border-red-500 " : ""
            }`}
          >
            <Link
              to="/resume"
              onClick={() => handleLinkClick("resume")}
              className="nav-link"
            >
              Resume
            </Link>
          </li>
          <li
            className={`nav-item text-gray-700 hover:text-gray-900 ${
              activeLink === "projects" ? "border-b-2 border-red-500 " : ""
            }`}
          >
            <Link
              to="/projects"
              onClick={() => handleLinkClick("projects")}
              className="nav-link"
            >
              My Projects
            </Link>
          </li>
          <li
            className={`nav-item text-gray-700 hover:text-gray-900 ${
              activeLink === "contact" ? "border-b-2 border-red-500 " : ""
            }`}
          >
            <Link
              to="/contact"
              onClick={() => handleLinkClick("contact")}
              className="nav-link"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
