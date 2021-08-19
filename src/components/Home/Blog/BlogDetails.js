import React from 'react'

function BlogDetails({blog}) {
    return (
        <div class="card shadow  mx-5 mb-5" style={{width: "18rem"}}>    
            <div className=" text-center">
                <div class="card-body">
                <h5 style={{color:'#1CC7C1'}} class="card-title">{blog.name}</h5>
                <p class="card-text">{blog.date}</p>
                <h6 className="">{blog.title}</h6>
                <p className="text-secondary">{blog.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
