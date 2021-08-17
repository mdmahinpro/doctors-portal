import React from 'react'
import chair from '../../../images/chair.png'

function HeaderMain() {
    return (
        <div style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3a4256'}}>Your New Smile <br /> Starts Here</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vero eaque sint dolor deleniti earum molestiae inventore accusamus quisquam. Suscipit facilis iste omnis, impedit ipsum harum? Rem et sit animi?</p>
                <button className="btn btn-primary">Get Appointment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </div>
    )
}

export default HeaderMain
