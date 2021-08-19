import React from 'react'
import doctor from '../../../images/mainDoc.png'

function Appointment() {
    return (
        <div>
            <div className="doctor-bg row">
                <div className="col-md-5">
                    <img className="img-fluid h-75" src={doctor} alt="" />
                </div>
                <div className="appointment-container col-md-7 pt-5 mt-5">
                    <h6 className="text-capital" style={{color:'#1CC7C1'}}>Appointment</h6>
                    <h1>Make an appointment <br /> Today</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis debitis? Unde ipsa dolor modi nobis nostrum, incidunt perspiciatis praesentium quibusdam!</p>
                    <button className="btn btn-success">Learn More</button>
                </div>
            </div>
            
        </div>
    )
}

export default Appointment
