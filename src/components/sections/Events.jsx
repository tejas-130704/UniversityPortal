import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import thermalEvent from "../../assets/images/thermalEvent.webp"
import HackathonEvent from "../../assets/images/HackathonEvent.webp"
import IndustrialEvent from "../../assets/images/IndustrialEvent.webp"
import GuestEvent from "../../assets/images/GuestEvent.webp"

const events = [
    {
        img: IndustrialEvent,
        title: "Industrial Visit to Tata Hydro Power Plant, Bhira",
    },
    {
        img: thermalEvent,
        title: "Industrial Visit to Thermal Power Plant, Koradi",
    },
    {
        img: HackathonEvent,
        title: "Hackathon Winners 2025",
    },
    {
        img: GuestEvent,
        title: "Guest Lecture on AI & IoT",
    },
];

const Events = () => {
    const [current, setCurrent] = useState(0);
    const slides = Math.ceil(events.length / 2); // 2 cards per slide

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides) % slides);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, []);


    return (
        <section id="events" className="pt-22 pb-12 bg-gray-50 text-center w-[70%] mx-auto">
            {/* Section Heading */}
            <div 
            data-aos="fade-up"
            className='text-5xl text-black text-center mb-4 font-bold'>Latest Events</div>
            <hr 
            data-aos="fade-right"
            className='mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full' />
            <p 
            data-aos="fade-up"
            className="text-gray-600 mt-2">
                Showcasing the Latest Events, Achievements, and Milestones
            </p>

            {/* Carousel Container */}
            <div className="relative mt-16 w-full max-w-6xl mx-auto overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {Array.from({ length: slides }).map((_, slideIndex) => (
                        <div
                            key={slideIndex}
                            className="relative w-full flex-shrink-0 flex gap-6 justify-center"
                        >
                            {events
                                .slice(slideIndex * 2, slideIndex * 2 + 2)
                                .map((event, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-md overflow-hidden w-[48%] flex flex-col"
                                    >
                                        <img
                                        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                                        data-aos-delay="200"
                                            src={event.img}
                                            alt={event.title}
                                            className="h-64 w-full object-cover hover:scale-110 transition-transform delay-100 duration-500"
                                        />
                                        <div className="absolute  -bottom-3 shadow-[5px_10px_15px_rgba(0,0,0,0.3)]  bg-[#088395] text-white text-sm py-2 px-4  mx-auto">
                                            {event.title}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white hover:bg-[#37B7C3] p-2 rounded-full shadow-md"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white hover:bg-[#37B7C3] p-2 rounded-full shadow-md"
                >
                    <FaArrowRight />
                </button>

                {/* Indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: slides }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-3 h-3 rounded-full ${idx === current ? "bg-[#088395]" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
