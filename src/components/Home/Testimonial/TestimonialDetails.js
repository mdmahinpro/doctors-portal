import React from 'react'

function TestimonialDetails({comment}) {
    return (
        <div class="card shadow  mx-5 mb-5" style={{width: "18rem"}}>
            <div className="image text-center pt-5">
                <img className="d-flex justify-content-center" src={comment.image} style={{width:'100px'}} class="card-img-top" alt="..."></img>                                                                   
            </div>
            <div className="comment text-center">
                <div class="card-body">
                <h5 style={{color:'#1CC7C1'}} class="card-title">{comment.name}</h5>
                <p class="card-text">{comment.location}</p>
                <p>{comment.comment}</p>
                </div>
            </div>
        </div>
      
    )
}

export default TestimonialDetails
