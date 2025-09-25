import React, { useState } from "react";
import logo from "../../assets/images/university.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#" },
    { label: "Admissions", link: "#admissions" },
    { label: "Events", link: "#events" },
    { label: "Student Life", link: "#studentlife" },
    { label: "Faculty", link: "#faculty" },
    { label: "News", link: "#news" },
    { label: "About the University", link: "#about" },
  ];

  return (
    <nav className="fixed bg-white shadow-md  top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-xl font-bold tracking-wide text-[#071952]">
              UNIVERSITY
            </h1>
            <hr className="w-full border-[#071952]" />
            <span className="text-sm text-[#37B7C3] font-medium">PORTAL</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative group text-gray-700 font-medium hover:text-[#088395] transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block text-gray-700 font-medium py-2 hover:text-[#088395] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
