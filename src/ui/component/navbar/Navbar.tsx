import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/LOGO.svg';
import LanguageDropdown from '../../molecules/languageDropdown/LanguageDropdown';

import './Navbar.css';
import useMenuOnScroll from '../../../hooks/useMenuOnScroll';
// import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
// import Button from '../../atoms/button/Button';
// import menuButton from '../../../assets/Menu.png';
// import MobileNavbar from './MobileNavbar';

// interface IsideProp {
//   name: string;
//   id: number;
//   nav: number;
//   to: string;
//   active: boolean;
// }

// const lngs = {
//   en: { nativeName: 'English' },
//   de: { nativeName: 'Deutsch' },
// }

const Navbar = () => {
  const ref = useMenuOnScroll();
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 20) {
  //     setColorchange(true);
  //   } else {
  //     setColorchange(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavbarColor);
  
  // const [mobileNav, setMobileNav] = useState(false);
  // const { t } = useTranslation();
  // const location = useLocation();
  // const [activeNav, setActiveNav] = useState(1);
  // const [navItems, setNavItems] = useState<IsideProp[]>([]);
  // const [openDropdown, setOpenDropdown] = useState(true);

  // const navbarLinkNames = [
  //   {
  //     name: t('home'),
  //     id: 1,
  //     nav: 1,
  //     to: 'app',
  //     active: location.pathname.includes('app'),
  //   },
  //   {
  //     name: t('about'),
  //     id: 2,
  //     to: 'about',
  //     nav: 2,
  //     active: location.pathname.includes('about'),
  //   },
  //   {
  //     name: t('features'),
  //     id: 3,
  //     nav: 3,
  //     to: 'events',
  //     active: location.pathname.includes('events'),
  //   },
  // ];

  // const dropDownFunction = () => {
  //   setMobileNav(!mobileNav);
  // };

  // useEffect(() => {
  //   const path = navbarLinkNames.map((item) => {
  //     if (location.pathname.includes(item.to)) {
  //       setActiveNav(item.id);
  //     }
  //     return item;
  //   });
  //   setNavItems(path);
  // }, [location.pathname, t]);

  return (
    <header ref={ref} className={`navbar__header`}>
      {/* <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} /> */}
      <div className="navbar">
        <div className="navbar__navOne">
          <Link to="/">
            <img src={Logo} alt="flitaa Logo" className="navbar__logo" />
          </Link>
          {/* <div className='navbar__navItems'>
            {navItems.length > 0 &&
              navItems.map(({ name, id, to, nav, active }) => (
                <div key={id}>
                  <Link
                    to={`/${to}`}
                    className={`${
                      activeNav === id
                        ? 'navbar__active'
                        : 'navbar__navItems-link'
                    }`}
                  >
                    <span>{name}</span>
                  </Link>
                </div>
              ))}
          </div> */}
        </div>
        {/*  */}
        <div className="navbar__navTwo">
          <p className="blurNav"></p>
          <div className="navbar__navTwo-lang">
            <LanguageDropdown />
          </div>
          {/* <div className="navbar__navTwo-btn">
            <Button buttonText={t("getStarted")} />
          </div>
          <div className="navbar__navTwo-Menubtn">
            <img src={menuButton} alt="img" onClick={dropDownFunction} />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
