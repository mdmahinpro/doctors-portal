import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './InfoCard.css'

function InfoCard({info}) {

    return (
    
            <div className="col-md-4 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="fontInfo" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className="ms-3">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
  
        
    )
}

export default InfoCard
