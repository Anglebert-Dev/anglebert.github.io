import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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

        {/* Navigation Links */}
        <ul
          className={`navbar-nav ${
            isOpen
              ? "flex flex-col items-center"
              : "hidden lg:flex lg:items-center lg:justify-end"
          } space-y-4 lg:space-y-0 lg:space-x-4`}
        >
          <NavItem to="/" currentPath={location.pathname}>
            About Me
          </NavItem>
          <NavItem to="/resume" currentPath={location.pathname}>
            Resume
          </NavItem>
          <NavItem to="/projects" currentPath={location.pathname}>
            My Projects
          </NavItem>
          <NavItem to="/contact" currentPath={location.pathname}>
            Contact Me
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

// Navigation Item component
const NavItem = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <li
      className={`nav-item text-gray-700 hover:text-gray-900 ${
        isActive ? "border-b-2 border-red-500 " : ""
      }`}
    >
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
