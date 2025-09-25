import React from 'react'
import About from './About'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import HeroSection from './HeroSection'
import Admission from './Admission'
import Events from './Events'
import StudentLife from './StudentLife'
import Faculty from './Faculty'
import InTheNews from './News'

const MainPage = () => {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <Events/>
                <Admission/>
                <StudentLife/>
                <Faculty/>
                <InTheNews/>
                <About />
                <Footer />
            </div>
        </>
    )
}

export default MainPage