import React from 'react'
import Appointment from '../Appointment/Appointment'
import Blog from '../Blog/Blog'
import ContactUs from '../ContactUs/ContactUs'
import Doctors from '../Doctors/Doctors'
import Header from '../Header/Header'
import HeroHome from '../HeroHome/HeroHome'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'

function Home() {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <HeroHome></HeroHome>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
        </div>
    )
}

export default Home
