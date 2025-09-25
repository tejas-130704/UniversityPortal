import React from 'react';
import IntakeTable from './Intake';

const Admission = () => {
    return (
        <div className="min-h-screen bg-[#f6f9fa] mt-4 pb-8">
            <div className="w-[90%] md:w-[75%] mx-auto pt-16" id="admissions">
                <div className="pt-6 w-full mx-auto font-sans text-center mb-10">

                    {/* Section Heading */}
                    <div data-aos="fade-up" className="text-4xl md:text-5xl text-black mb-4 font-bold">
                        Admission
                    </div>
                    <hr
                        data-aos="zoom-in"
                        className="mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full"
                    />

                    {/* Admission Info */}
                    <div data-aos="fade-right" data-aos-delay="200">
                        <h2 className="text-lg md:text-xl text-gray-800 font-semibold pb-4">
                            Admissions 2025-2026
                        </h2>
                        <div className="text-sm md:text-base text-gray-500">
                            Admissions to University, Pune are strictly based on merit only through online
                            centralised admission process as per the guidelines of Government of Maharashtra
                            and are conducted by Directorate of Technical Education, Maharashtra.
                        </div>
                    </div>
                </div>

                {/* Table Container with horizontal scroll for mobile */}
                <div data-aos="fade-up" data-aos-delay="400" className="overflow-x-auto">
                    <IntakeTable />
                </div>
            </div>
        </div>
    );
};

export default Admission;
