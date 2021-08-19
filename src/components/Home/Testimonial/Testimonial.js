import React from 'react'
import people1 from '../../../images/people 1.png'
import people2 from '../../../images/people2.png'
import people3 from '../../../images/people3.png'
import quotation from '../../../images/quotation.PNG'
import TestimonialDetails from './TestimonialDetails'


function Testimonial() {
    const comments=[
        {
            comment:'Great Service',
            name:'Mahin',
            image:people1,
            location:'Birganj'
        },
        {
            comment:'Beautiful',
            name:'Georgo',
            image:people2,
            location:'Dinajpur'
        },
        {
            comment:'Overrated',
            name:'Mr Mukto',
            image:people3,
            location:'Dhaka'
        }
        
    ]
    return (
        <div className="">
            <div className="headers d-flex justify-content-between px-5 mx-5">
                <div className="tittle-header pt-5">
                    <h4 style={{color:'#1CC7C1'}}>TESTIMONIAL</h4>
                    <h2>Whats Our Patients <br />Says</h2>                                                     
                </div>
                <div className="title-quotation">
                    <img src={quotation} alt="" />
                </div>  
            </div>


            <div className="comment d-flex justify-content-center">
                {comments.map((comment)=><TestimonialDetails comment={comment}></TestimonialDetails>)}
            </div>
        </div>
    )
}

export default Testimonial
