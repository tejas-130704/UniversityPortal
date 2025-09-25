import React from "react";
import logo from "../../assets/images/university.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#071952] text-[#EBF4F6] px-6 md:px-16 py-6 pt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Logo + Address */}
        <div className="flex flex-col items-start space-y-4 rounded-full">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img 
            data-aos="fade-left"
            src={logo} alt="logo" className="w-20 h-20 rounded-full object-contain" />
            <div>
              <h1 
              data-aos="fade-down"
              className="text-3xl font-bold tracking-wide text-[#EBF4F6]">
                UNIVERSITY
              </h1>
              <hr 
              
              className="w-full border-[#EBF4F6]" />
              <span 
              data-aos="fade-up"
              className="text-xl text-[#37B7C3] font-medium">PORTAL</span>
            </div>
          </div>

          <p 
          data-aos="fade-up"
          className="text-sm leading-relaxed">
            Wellesely Rd, Shivajinagar, Pune – 411 005.
            <br />
            Maharashtra, INDIA.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a 
            data-aos="fade-right"
            href="#" className="hover:text-[#37B7C3]">
              <FaFacebookF />
            </a>
            <a 
            data-aos="fade-right"
            href="#" className="hover:text-[#37B7C3]">
              <FaInstagram />
            </a>
            <a 
            data-aos="fade-up"
            href="#" className="hover:text-[#37B7C3]">
              <FaLinkedinIn />
            </a>
            <a 
            data-aos="fade-left"
            href="#" className="hover:text-[#37B7C3]">
              <FaXTwitter />
            </a>
            <a 
            data-aos="fade-left"
            href="#" className="hover:text-[#37B7C3]">
              <FaYoutube />
            </a>
          </div>

          {/* Bottom links */}
          {/* <div className="mt-6 space-y-2 text-sm">
            <p className="hover:text-[#37B7C3] cursor-pointer">CONTACT US</p>
            <p className="hover:text-[#37B7C3] cursor-pointer">PRIVACY POLICY</p>
            <p className="hover:text-[#37B7C3] cursor-pointer">DISCLAIMER</p>
          </div> */}
        </div>

        {/* Middle - Navigation */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h3 
          data-aos="fade-up"
          className="font-semibold text-xl text-[#37B7C3]">Navigate</h3>
          <ul className="space-y-2 text-sm">
            {[
              "HOME",
              "ABOUT US",
              "ADMINISTRATION",
              "ADMISSION",
              "ACADEMICS",
              "STUDENT CORNER",
              "FACILITIES",
              "USEFUL LINKS",
            ].map((item) => (
              <li
                key={item}
                data-aos="fade-right"
                data-aos-delay="200"
                className="hover:text-[#37B7C3] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right - History */}
        <div className="flex flex-col space-y-4">
          <h3 
          data-aos="fade-up"
          className="font-semibold text-xl text-[#37B7C3]">University History</h3>
          <p 
          data-aos="fade-left"
          className="text-sm leading-relaxed">
            University precursor, The Poona Engineering Class and Mechanical School
            was opened in July 1854, with an aim to provide suitable learning to
            the subordinate officers in the Public Works Department. The School
            was situated in Bhawani Peth, Poona , and the accommodation
            consisted of three small detached houses for teaching purposes and a
            separate house for the Principal…
          </p>
          <button data-aos="fade-up" className="relative overflow-hidden border-2 border-[#37B7C3] text-[#EBF4F6] px-4 py-2 font-semibold 
  transition-colors duration-400 ease-out
  before:absolute before:inset-0 before:bg-[#37B7C3] before:origin-right before:scale-x-0 
  before:transition-transform before:duration-500 before:ease-out
  hover:before:scale-x-100 hover:before:origin-left
  hover:text-[#071952] cursor-pointer">
            <span className="relative z-10">Read More About Our History</span>
          </button>


        </div>
      </div>
      <hr className="mt-8 text-gray-500"/>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content pt-6 text-center">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
