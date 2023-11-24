import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import mobileDash from '../../../assets/mobileDash.png';
import mobileCancel from '../../../assets/cancel.png';
import Button from '../../atoms/button/Button';
import "./Navbar.css"

interface MobileNavbarProp {
  mobileNav: boolean;
  setMobileNav: (value: boolean) => void;
}

const MobileNavbar = ({ mobileNav, setMobileNav }: MobileNavbarProp) => {
  const { t } = useTranslation();
  return (
    <div>
      {/* mobile Navbar */}
      {mobileNav && (
        <div className='mobileNavbar'>
          <div className='mobileNavbar__div'>
            <div className='mobileNavbar__dash'>
              <Link to='/'>
                <img src={mobileDash} alt='img' />
              </Link>
            </div>
            <div
              className='mobileNavbar__cancel'
              onClick={() => setMobileNav(!mobileNav)}
            >
              {/* {mobileNav ? <img src={mobileCancel} alt='img' /> : ''} */}
              <img src={mobileCancel} alt='img' />
            </div>
            {/* <div className='mobileNavbar__navItems'>
              {navItems.length > 0 &&
                navItems.map(({ name, id, to, nav, active }) => (
                  <div key={id}>
                    <Link to={`/${to}`} className='navbar__navItems-link'>
                      <span>{name}</span>
                    </Link>
                  </div>
                ))}
            </div> */}
            <div className='mobileNavbar__navTwo-btn'>
              <Button buttonText={t('getStarted')} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
