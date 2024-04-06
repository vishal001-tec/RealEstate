import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className='paddings innerWidth flexCenter f-container'>
            <div className='flwxColStart f-left' >
                <img src="./logo2.png" alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Building no. 645,main road,Pune</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Footer
