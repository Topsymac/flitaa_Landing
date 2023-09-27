import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../../Assets/Facebook.svg'
import Twitter from '../../../Assets/Twitter.png'
import LinkedIn from '../../../Assets/LinkedIn.svg'
import Instagram from '../../../Assets/Instagram.svg'
import Logo from '../../../Assets/LOGO.png'
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
      <div className="footer">
        <div className="footer__navOne">
          <div>
            <img src={Logo} alt="logo" className="footer__logo" />
          </div>
          <div>
            <p>© Copyright {new Date().getFullYear()} :: Flitaa</p>
          </div>
        </div>
        <div className="footer__navTwo">
          <div className="footer__navTwo-terms">
            <div>
              <Link to="/terms">
                <p>Term of Use</p>
              </Link>
            </div>
            <div>
              <Link to="/privacy">
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div className="footer__socials">
            {/* socials */}
            {socials.map(({ name, icon, url }) => (
              <Link to={url} key={name}>
                <img src={icon} alt={name} className="footer__socials-img" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
