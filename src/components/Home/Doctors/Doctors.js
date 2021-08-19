import React from 'react'
import doctor from '../../../images/doctor.PNG'
import DoctorsInfo from './DoctorsInfo'

function Doctors() {
    const doctors=[
        {
            img:doctor,
            name:'Dr. Bret',
            number:'+880172*******'
        },
        {
            img:doctor,
            name:'Dr. Bret',
            number:'+880172*******'
        },
        {
            img:doctor,
            name:'Dr. Bret',
            number:'+880172*******'
        }
    ]
    return (
        <div>
            <div className="doctor-container text-center mt-5">
                <h4 style={{color:'#1CC7C1'}}>Our Doctors</h4>
            </div>
            <div className="doctor-details row text-center">
                {
                    doctors.map((doctor)=><DoctorsInfo doctor={doctor}></DoctorsInfo>)
                }
            </div>
        </div>
    )
}

export default Doctors
