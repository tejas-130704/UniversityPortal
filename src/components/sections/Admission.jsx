import React, { useEffect } from 'react'
import IntakeTable from './Intake'

const Admission = () => {


    return (
        <div className='min-h-screen bg-[#f6f9fa] mt-4 pb-4'>
            <div className='w-[75%] mx-auto pt-16' id='admissions'>
                <div className='pt-6 w-full mx-auto font-sans text-center mb-10'>

                    <div data-aos="fade-up" className='text-5xl text-black text-center mb-4 font-bold'>
                        Admission
                    </div>
                    <hr
                        data-aos="zoom-in"
                        className='mb-16 w-[70px] mx-auto text-[#088395] border-2 rounded-b-full'
                    />
                    <div data-aos="fade-right" data-aos-delay="200">
                        <h2 className='text-xl text-gray-800 font-semibold pb-4'>
                            Admissions 2025-2026
                        </h2>
                        <div className='text-gray-500'>
                            Admissions to University, Pune are strictly based on merit only through on-line
                            centralised admission process as per the guidelines of Government of Maharashtra
                            and are conducted by Directorate of Technical Education, Maharashtra.
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <IntakeTable />
                </div>
            </div>
        </div>
    )
}

export default Admission
