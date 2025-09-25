import React from "react";
import studentLife1 from "../../assets/images/studentLife1.webp";
import studentLife2 from "../../assets/images/studentLife2.webp";

const StudentLife = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 w-[90%] md:w-[70%] mx-auto md:pt-22" id="studentlife">
      {/* Title */}
      <div data-aos="fade-up" className="text-3xl md:text-5xl text-black text-center mb-4 font-bold">
        Student Life
      </div>
      <hr data-aos="zoom-in" className="mb-12 md:mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full" />

      {/* Image Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-0 gap-4 mb-10">
        <img
          data-aos="fade-right"
          src={studentLife1}
          alt="Group of students"
          className="lg:rounded-r-[0px] rounded-lg md:rounded-l-xl shadow-md w-full h-44 md:h-70 object-cover"
        />
        <img
          data-aos="fade-left"
          src={studentLife2}
          alt="Students campus life"
          className="lg:rounded-l-[0px]  rounded-lg md:rounded-r-xl shadow-md w-full h-44 md:h-70 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base">
        {/* Academic Resources */}
        <div data-aos="fade-up">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Academic Resources</h2>
          <p className="text-gray-700 mb-4">
            Explore a wealth of academic resources at University, including lecture
            notes, research papers, e-books, and study guides to support your
            educational journey.
          </p>
          <ul className="space-y-2 text-black font-medium">
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-right">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Academic Calendar
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-right" data-aos-delay="200">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Career Services
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-left">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Exam Schedule
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-left" data-aos-delay="200">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Library
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          </ul>
        </div>

        {/* Campus Life */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-lg md:text-xl font-semibold mb-2">Campus Life</h2>
          <p className="text-gray-700 mb-4">
            Dive into vibrant campus life at University, where students thrive through
            diverse events, and opportunities for personal growth and community
            engagement.
          </p>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-right">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Events and Festivals
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center cursor-pointer" data-aos="fade-right" data-aos-delay="200">
              ➜
              <span className="relative ml-0 sm:ml-4 hover:text-[#088395] transition mt-1 sm:mt-0">
                Student Groups
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentLife;
