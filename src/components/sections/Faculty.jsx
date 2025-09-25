import fac1 from '../../assets/images/fac1.webp';
import fac2 from '../../assets/images/fac2.webp';
import fac3 from '../../assets/images/fac3.webp';
import fac4 from '../../assets/images/fac4.webp';
import fac5 from '../../assets/images/fac5.webp';
import { FaAnglesDown } from "react-icons/fa6";

const FacultyList = () => {
    const faculty = [
        { name: "Dr. Arvind Ankalikar", designation: "Distinguished Professor of Practice", department: "Mechanical", img: fac1 },
        { name: "Mr. Anil Parab", designation: "Distinguished Professor of Practice", department: "Mechanical", img: fac2 },
        { name: "Mr. Sunil Chari", designation: "Distinguished Professor of Practice", department: "Applied Chemistry", img: fac3 },
        { name: "Ms. Jyotika Athavale", designation: "Distinguished Professor of Practice", department: "Electrical", img: fac4 },
        { name: "Mr. Dinanath Kholkar", designation: "Distinguished Professor of Practice", department: "Electrical", img: fac5 },
    ];

    return (
        <div className="min-h-screen bg-[#f6f9fa] flex flex-col items-center pt-22 pb-10 px-4" id='faculty'>
            {/* Title */}
            <div data-aos="fade-up" className='text-3xl md:text-5xl text-black text-center mb-4 font-bold'>
                Our Faculty
            </div>
            <hr data-aos="fade-up" className='mb-12 md:mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full' />

            {/* Faculty Cards */}
            <div className="w-full max-w-4xl space-y-6">
                {faculty.map((person, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                        className="flex flex-col sm:flex-row items-center sm:items-start bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
                    >
                        <img
                            src={person.img}
                            alt={person.name}
                            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#37B7C3] hover:scale-110 transition-transform duration-500"
                        />
                        <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left text-[#071952]">
                            <h2 className="text-lg md:text-xl font-bold">
                                {person.name}
                                <span className="block h-[2px] w-12 bg-[#088395] mt-1"></span>
                            </h2>
                            <p className="italic text-[#088395] mt-2 text-sm sm:text-base">
                                Designation — {person.designation}
                            </p>
                            <p className="text-sm sm:text-base">Department — {person.department}</p>
                            <a
                                href="#"
                                className="text-[#37B7C3] font-medium mt-2 inline-block hover:underline text-sm sm:text-base"
                            >
                                View more
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* See All */}
            <div data-aos="fade-up" className='mt-10 font-bold text-lg md:text-xl text-[#071952] hover:text-[#088395] cursor-pointer flex items-center justify-center gap-3'>
                See all <FaAnglesDown size={13} />
            </div>
        </div>
    );
}

export default FacultyList;
