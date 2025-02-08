import React from 'react'
import './footer.css'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import instragram from '../../assets/instagram.png'
import logo from '../../assets/logo1-removebg-preview.png'


function footer() {
  return (
    <div className='footeer-contender'>
        <hr />
        <div className="footer">
            <div className="social-link">
            <img src={github} alt="" />
            <img src={instragram} alt="" />
            <img src={linkedin} alt="" />
            </div>
            <div className="logo-f">
            <img src={logo} alt="" />

        </div>
        </div>
        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>
    </div>
  )
}

export default footer
