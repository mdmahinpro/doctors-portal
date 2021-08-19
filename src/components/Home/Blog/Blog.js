import React from 'react'
import BlogDetails from './BlogDetails'

function Blog() {
    const blogs=[
        {
            name:'Ritual Istura',
            date:'22 Aug 2021',
            title:'Check atleast 1 time to a doctor for your teeth',
            description:'',
        },
        {
            name:'Mr. Robert',
            date:'23 September',
            title:'Two times brush can make your teeth strong and germs free',
            description:'Dedication level should be as high as much as you want to win in the game of life'
        },
        {
            name:'Bruna Eara',
            date:'5 October',
            title:'The tooth cancer is giving a challange',
            description: "Let's fight against cancer.It has given us a big challange .We need to overcome it"
        }
    ]
    return (
        <div>
            <div className="title-text text-center">
                <h4 style={{color:'#1CC7C1'}}>OUR BLOG</h4>
                <h1 className="mb-5">From Our Blog News</h1>
            </div>
            <div className="blog-news">
            <div className=" d-flex justify-content-center">
                {blogs.map((blog)=><BlogDetails blog={blog}></BlogDetails>)}
            </div>
            </div>
            
        </div>
    )
}

export default Blog
