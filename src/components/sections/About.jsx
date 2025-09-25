import React, { useEffect } from "react";
import aboutImg from "../../assets/images/about.jpg";
import aboutFilter from "../../assets/images/aboutFilter.png";


const About = () => {

  return (
    <div id="about" className="pt-56 md:pt-32 lg:pt-20">
      <div className="relative flex justify-center items-center w-full h-[60vh] overflow-hidden rounded-b-lg mb-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            data-aos="fade-right"
            src={aboutFilter}
            className="object-cover w-[80%] h-full opacity-[85%]"
            alt="Filter"
          />
          <div data-aos="fade" className="absolute top-[10%] left-[4%]">
            <span
              data-aos="fade-down"
              className="text-[#071952] text-xl md:text-2xl lg:text-3xl font-bold uppercase"
            >
              About The University
            </span>
            <span
              data-aos="fade-left"
              className="block mt-4 text-sm md:text-base lg:text-lg text-justify w-[50%] md:w-[50%] lg:w-[30%] font-semibold"
            >
              The University, established in 1854, is one of the oldest and most
              prestigious institutions of higher learning in India. With a rich
              history spanning over a century and a half, the University has
              been at the forefront of academic excellence and innovation. It
              offers a wide range of undergraduate, postgraduate, and doctoral
              programs across various disciplines, including engineering,
              science, arts, commerce, and management.
            </span>
          </div>
        </div>

        <div className="min-w-full h-full flex-shrink-0">
          <img
            src={aboutImg}
            className="w-full h-full object-cover object-center"
            draggable={false}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
