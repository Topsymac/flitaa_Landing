import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Facebook from '../../../assets/Facebook.svg';
import Twitter from '../../../assets/Twitter.png';
import LinkedIn from '../../../assets/LinkedIn.svg';
import Instagram from '../../../assets/Instagram.svg';
import Logo from '../../../assets/LOGO.svg';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const socials = [
    { icon: Facebook, name: 'filtaa Facebook', url: t('socials.facebook') },
    { icon: LinkedIn, name: 'flitaa LinkedIn', url: t('socials.linkedIn') },
    { icon: Twitter, name: 'flitaa Twitter', url: t('socials.twitter') },
    { icon: Instagram, name: 'flitaa Instagram', url: t('socials.instagram') },
  ];
  return (
    <div>
      <div
        className={`${
          location.pathname === '/privacy-policy' ||
          location.pathname === '/terms-and-conditions'
            ? 'footer'
            : 'footer footerHome'
        }`}
      >
        <div className='footer__navOne'>
          <Link to='/'>
            <img src={Logo} alt='flitaa logo' className='footer__logo' />
          </Link>
          <div className='footer__navTwo-terms'>
            <Link to='/terms-and-conditions'>
              <p>{t('termOfUse')}</p>
            </Link>
            <Link to='/privacy-policy'>
              <p>{t('privacyPolicy')}</p>
            </Link>
          </div>
        </div>
        <div className='footer__navTwo'>
          <div className='footer__copyright'>
            <p>
              © Flitaa {new Date().getFullYear()}
            </p>
          </div>
          <div className='footer__socials'>
            {/* socials */}
            {socials.map(({ name, icon, url }) => (
              <Link to={url} key={name} target='_blank'>
                <img src={icon} alt={name} className='footer__socials-img' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
