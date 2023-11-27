import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Facebook from '../../../assets/Facebook.svg'
import Twitter from '../../../assets/Twitter.png'
import LinkedIn from '../../../assets/LinkedIn.svg'
import Instagram from '../../../assets/Instagram.svg'
import Logo from '../../../assets/LOGO.svg'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  const socials = [
    { icon: Facebook, name: "Facebook", url: t("socials.facebook") },
    { icon: LinkedIn, name: "LinkedIn", url: t("socials.linkedIn") },
    { icon: Twitter, name: "Twitter", url: t("socials.twitter") },
    { icon: Instagram, name: "Instagram", url: t("socials.instagram") },
  ];
  return (
    <div>
      <div className='footer'>
        <div className='footer__navOne'>
          <Link to="/">
            <img src={Logo} alt='logo' className='footer__logo' />
          </Link>
          <div>
            <p>
              © {t('copyRight')} {new Date().getFullYear()} :: Flitaa
            </p>
          </div>
        </div>
        <div className='footer__navTwo'>
          <div className='footer__navTwo-terms'>
            <Link to='/terms-and-conditions'>
              <p>{t('termOfUse')}</p>
            </Link>
            <Link to='/privacy-policy'>
              <p>{t('privacyPolicy')}</p>
            </Link>
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
  );
}

export default Footer
