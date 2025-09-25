import React from "react";
import logo from "../../assets/images/university.webp";

const Navbar = () => {
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
    <nav className="bg-white shadow-md sticky top-0 z-50  ">
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

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="relative group text-gray-700 font-medium hover:text-[#088395] transition"
            >
              {item.label}  
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
            </a> 
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
