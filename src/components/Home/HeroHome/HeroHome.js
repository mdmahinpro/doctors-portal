import React from 'react'
import care from '../../../images/care.png'

function HeroHome() {
    return (
        <div className="main-class d-flex justify-content-center">
            <div className="pt-5 pb-5 row d-flex justify-content-center w-75">
            <div className="col-md-5 image-container text-center">
                <img className="img-fluid"  src={care} alt="" />
            </div>
            <div className="text-container col-md-7 pe-4">
                <h2>Exceptional Dental Cares, <br />On Your Terms</h2>
                <p className="pt-5 text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eveniet amet, iusto cum, tempora vitae quas ipsum perspiciatis qui expedita quidem, modi commodi deleniti laboriosam voluptatum unde. Voluptatem quod repellat nesciunt laboriosam ipsam aspernatur dolorem recusandae ad quasi? Magni consequatur et cumque, eum libero magnam aut sit ex, earum numquam laborum dolorem ratione eos laboriosam animi iste facilis officia culpa!</p>
                <button className="btn btn-success">Learn More</button>
            </div>
        </div>
        </div>
        
    )
}

export default HeroHome
