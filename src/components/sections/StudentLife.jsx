import React from "react";
import studentLife1 from "../../assets/images/studentLife1.webp";
import studentLife2 from "../../assets/images/studentLife2.webp";

const StudentLife = () => {
  return (
    <div className="min-h-screen p-8 w-[70%] mx-auto pt-22" id="studentlife">
      {/* Title */}
      <div data-aos="fade-up" className='text-5xl text-black text-center mb-4 font-bold'>Student Life</div>
      <hr data-aos="zoom-in" className='mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full' />

      {/* Image Section */}
      <div className="grid md:grid-cols-2 mb-10">
        <img
          data-aos="fade-right"
          src={studentLife1}
          alt="Group of students"
          className="rounded-l-xl shadow-md w-full object-cover"
        />
        <img
          data-aos="fade-left"
          src={studentLife2}
          alt="Students campus life"
          className="rounded-r-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-10 text-sm">
        {/* Academic Resources */}
        <div data-aos="fade-up">
          <h2 className="text-xl font-semibold mb-2">Academic Resources</h2>
          <p className="text-gray-700 mb-4">
            Explore a wealth of academic resources at University, including lecture
            notes, research papers, e-books, and study guides to support your
            educational journey.
          </p>
          <ul className="space-y-2 text-black font-medium flex justify-baseline gap-8">
            <div>
              <li className="text-gray-700 font-medium cursor-pointer mt-2" data-aos="fade-right">
                ➜
                <span className="relative group ml-4 hover:text-[#088395] transition">
                  Academic Calendar
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="text-gray-700 font-medium cursor-pointer mt-2" data-aos="fade-right" data-aos-delay="200">
                ➜
                <span className="relative group ml-4 hover:text-[#088395] transition">
                  Career Services
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </div>
            <div>
              <li className="text-gray-700 font-medium cursor-pointer mt-2" data-aos="fade-left">
                ➜
                <span className="relative group ml-4 hover:text-[#088395] transition">
                  Exam Schedule
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
              <li className="text-gray-700 font-medium cursor-pointer mt-2" data-aos="fade-left" data-aos-delay="200">
                ➜
                <span className="relative group ml-4 hover:text-[#088395] transition">
                  Library
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </li>
            </div>
          </ul>
        </div>

        {/* Campus Life */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h2 className="text-xl font-semibold mb-2">Campus Life</h2>
          <p className="text-gray-700 mb-4">
            Dive into vibrant campus life at University, where students thrive through
            diverse events, and opportunities for personal growth and community
            engagement.
          </p>
          <ul className="space-y-2 text-gray-700 font-medium">
            <li data-aos="fade-right">
              ➜
              <span className="relative group ml-4 hover:text-[#088395] transition cursor-pointer">
                Events and Festivals
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>

            <li data-aos="fade-right" data-aos-delay="200">
              ➜
              <span className="relative group ml-4 hover:text-[#088395] transition cursor-pointer">
                Student Groups
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#088395] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StudentLife;
