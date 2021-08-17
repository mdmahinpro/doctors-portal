import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from './InfoCard';

function BusinessInfo() {
    const infoData=[
        {
        title:'Opening Hour',
        description:'We are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit Our Location',
        description:'Dinajpur,Bangladesh',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Call Us Now',
        description:'+88017********',
        icon:faPhone,
        background:'primary'
    }
]
return (
    <section className="d-flex justify-content-center">
        <div className="w-75 row">
            {
                infoData.map(info => <InfoCard info={info} key={info.title}></InfoCard>)
            }
        </div>
    </section>
);
}

export default BusinessInfo
