import React from 'react'

function DoctorsInfo({doctor}) {
    return (
        <div className="col-md-4">
            <img src={doctor.img} alt="" />
            <h5>{doctor.name}</h5>
            <h6>{doctor.number}</h6>
        </div>
    )
}

export default DoctorsInfo
