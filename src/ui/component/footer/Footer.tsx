import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../../assets/Facebook.svg'
import Twitter from '../../../assets/Twitter.png'
import LinkedIn from '../../../assets/LinkedIn.svg'
import Instagram from '../../../assets/Instagram.svg'
import Logo from '../../../assets/LOGO.png'
import './Footer.css'

const Footer = () => {
  const socials = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: LinkedIn, name: 'LinkedIn', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
  ]
  return (
    <div>
      <div className='footer'>
        <div className='footer__navOne'>
          <div>
            <img src={Logo} alt='logo' className='footer__logo' />
          </div>
          <div>
            <p>© Copyright {new Date().getFullYear()} :: Flitaa</p>
          </div>
        </div>
        <div className='footer__navTwo'>
          <div className='footer__navTwo-terms'>
            <div>
              <p>Term of Use</p>
            </div>
            <div>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className='footer__socials'>
            {/* socials */}
            {socials.map(({ name, icon, url }) => (
              <Link to={url} key={name}>
                <img src={icon} alt={name} className='footer__socials-img' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer