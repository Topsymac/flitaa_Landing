import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Button from '../../atoms/button/Button';
import LanguageDropdown from '../../molecules/languageDropdown/LanguageDropdown';

import './Navbar.css';
import menuButton from '../../../assets/Menu.png';
import Logo from '../../../assets/LOGO.png';
import Modal from '../../wrappers/modal/Modal';
import mobileDash from '../../../assets/mobileDash.png';

import mobileCancel from '../../../assets/cancel.png';

interface IsideProp {
  name: string;
  id: number;
  nav: number;
  to: string;
  active: boolean;
}

// const lngs = {
//   en: { nativeName: 'English' },
//   de: { nativeName: 'Deutsch' },
// }

const Navbar = () => {
  // const ref = useMenuOnScroll();
  const [mobileNav, setMobileNav] = useState(false);

  const { t } = useTranslation();
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(1);
  const [navItems, setNavItems] = useState<IsideProp[]>([]);
  // const [openDropdown, setOpenDropdown] = useState(true);

  const navbarLinkNames = [
    {
      name: t('home'),
      id: 1,
      nav: 1,
      to: '/',
      active: location.pathname.includes('/'),
    },
    {
      name: t('about'),
      id: 2,
      to: 'about',
      nav: 2,
      active: location.pathname.includes('about'),
    },
    {
      name: t('features'),
      id: 3,
      nav: 3,
      to: 'events',
      active: location.pathname.includes('events'),
    },
  ];

  const dropDownFunction = () => {
    setMobileNav(true)
  };

  useEffect(() => {
    const path = navbarLinkNames.map((item) => {
      if (location.pathname.includes(item.to)) {
        setActiveNav(item.id);
      }
      return item;
    });
    setNavItems(path);
  }, [location.pathname, t]);

  return (
    <header>
      <div className='navbar'>
        <div className='navbar__navOne'>
          <div className=''>
            <img src={Logo} alt='flitaaLogo' className='navbar__logo' />
          </div>
          <div className='navbar__navItems'>
            {navItems.length > 0 &&
              navItems.map(({ name, id, to, nav, active }) => (
                <div key={id}>
                  <Link
                    to={`/${to}`}
                    className={`${activeNav === id ?"navbar__active":"navbar__navItems-link"}`}
                  >
                    <span>{name}</span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/*  */}
        <div className='navbar__navTwo'>
          <div className='navbar__navTwo-lang'>
            <LanguageDropdown />
          </div>
          <div className='navbar__navTwo-btn'>
            <Button buttonText={t('getStarted')} />
          </div>
          <div className='navbar__navTwo-Menubtn'>
            <img src={menuButton} alt='img' onClick={dropDownFunction} />
          </div>
        </div>
      </div>
      {/* mobile Navbar */}
      <div className='mobileNavbar'>
        <Modal
          show={mobileNav}
          onClose={() => {
            setMobileNav(mobileNav);
          }}
        >
          <div className='mobileNavbar__div'>
            <div className='mobileNavbar__dash'>
              <img src={mobileDash} alt='img' />
            </div>
            <div
              className='mobileNavbar__cancel'
              onClick={() => setMobileNav(!mobileNav)}
            >
              {/* {mobileNav ? <img src={mobileCancel} alt='img' /> : ''} */}
              <img src={mobileCancel} alt='img' />
            </div>
            <div className='mobileNavbar__navItems'>
              {navItems.length > 0 &&
                navItems.map(({ name, id, to, nav, active }) => (
                  <div key={id}>
                    <Link to={to} className='navbar__navItems-link'>
                      <span>{name}</span>
                    </Link>
                  </div>
                ))}
            </div>
            <div className='mobileNavbar__navTwo-btn'>
              <Button buttonText={t('getStarted')} />
            </div>
          </div>
        </Modal>
      </div>
    </header>
  );
};

export default Navbar;
