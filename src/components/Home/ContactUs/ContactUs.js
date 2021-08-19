import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div className="main-form ">
            <div className="header p-5 text-center">
                <h4 style={{color:'#1CC7C1'}} className="text-uppercase">Contact Us</h4>
                <h2 className="text-white">Always Connect With Us</h2>
            </div>
            <div className="contact-form mx-auto p-5">
                <form action="">
                    <div className="form-group">
                      <input placeholder="Email" className='form-control' type="text" name="" id="" /><br /><br />
                    </div>
                    <div className="form-group">
                        <input className='form-control' placeholder="Subject" type="text" name="" id="" /><br /><br />
                    </div>
                    <div className="form-group">
                        <textarea className='form-control' placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea><br /><br />
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-success">SUBMIT</button>
                    </div>
                    
                    
                    
                </form>
            </div>
        </div>
    )
}

export default ContactUs
