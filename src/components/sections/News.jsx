import React from "react";
import news1 from '../../assets/images/news1.webp'
import news2 from '../../assets/images/news2.webp'
import news3 from '../../assets/images/news3.webp'
import news4 from '../../assets/images/news4.webp'

const newsData = [
    {
        id: 1,
        image: news1,
        source: "CHEMICAL INDUSTRY DIGEST",
        title: "University Pune Unveils Centre for Sustainable Chemistry and Engineering",
        date: "July 28, 2025",
        link: "#"
    },
    {
        id: 2,
        image: news2,
        source: "TIMES OF INDIA",
        title: "University organises conference to discuss futuristic technologies",
        date: "January 5, 2025",
        link: "#"
    },
    {
        id: 3,
        image: news3,
        source: "TIMES OF INDIA",
        title:
            "Student bags Rs 5.9 lakh per month internship; steady placements at engineering colleges",
        date: "June 19, 2024",
        link: "#"
    },
    {
        id: 4,
        image: news4,
        source: "THE INDIAN EXPRESS",
        title:
            "Campus Talk: Pune’s University to offer PhD fellowship in 9 engineering branches",
        date: "May 10, 2024",
        link: "#"
    },
];

export default function InTheNews() {
    return (
        <div className="w-[70%] min-h-screen pb-8 mx-auto pt-22" id="news">
            {/* Title */}
            <div data-aos="fade-up" className='text-5xl text-black text-center mb-4 font-bold'>In The News</div>
            <hr data-aos="fade-up" className='mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full' />

            <h1 data-aos="fade-right" className="text-2xl md:text-3xl font-semibold mb-6 border-b-4 border-[#37B7C3] inline-block text-[#071952]">
                Latest News
            </h1>

            {/* News List */}
            <div className="mt-6 space-y-8">
                {newsData.map((item, index) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                        className="group grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b border-[#088395] pb-6"
                    >
                        {/* Image with Hover Overlay */}
                        <div className="md:col-span-1 relative overflow-hidden rounded-md shadow-md">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-32 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <a
                                href={item.link}
                                className="absolute bottom-0 left-0 w-full bg-[#088395] text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-500"
                            >
                                Learn the full story →
                            </a>
                        </div>

                        {/* Content */}
                        <div className="md:col-span-4">
                            <p className="text-sm font-semibold text-[#066473] uppercase">
                                {item.source}
                            </p>
                            <h2 className="text-lg font-semibold mt-1 text-[#071952] hover:text-[#1490a3] cursor-pointer">
                                {item.title}
                            </h2>
                            <p className="text-gray-800 text-sm mt-1">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
