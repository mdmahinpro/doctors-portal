import React from 'react'
import cavity from '../../../images/cavityFilling.png'
import flouride from '../../../images/flourideTreatment.png'
import whitening from '../../../images/toothWhitening.png'
import ServiceInfo from '../ServiceInfo/ServiceInfo'

function Services() {
    const serviceData=[
        {
            img:flouride,
            name:'Flouride Treatment'
        },
        {
            img:cavity,
            name:'Cavity Filling'
        },
        {
            img:whitening,
            name:'Teeth Whitening'
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceInfo service={service} key={service.name}></ServiceInfo>)
                }
                </div>
            </div>
        </section>
    )
}

export default Services
