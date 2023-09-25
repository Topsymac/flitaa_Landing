import React from 'react'
import Logo from '../../Assets/LOGO.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer_wrapper'>
        <div>
            <img src={Logo} alt="" />
            <p>&#169;copyright 2023:: Flitaa</p>
        </div>
        <div className="footer_right">
            <p>Term of Use</p>
            <p>Privacy Policy</p>
            <div className="footer_right_icons">
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer