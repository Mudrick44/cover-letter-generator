import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="https://mudricklali.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <FaGithub size={24} />
          <span className="text-lg font-semibold">Made by Mudrick44</span>
        </a>

        {/* Hamburger Menu */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div
          className={`lg:flex items-center space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="https://mudricklali.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/Mudrick44"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
