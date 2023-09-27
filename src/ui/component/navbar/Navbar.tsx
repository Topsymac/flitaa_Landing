import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../../atoms/button/Button'
import LanguageDropdown from '../../molecules/languageDropdown/LanguageDropdown'

import './Navbar.css'
import Logo from '../../../Assets/LOGO.png'

interface IsideProp {
  name: string
  id: number
  nav: number
  to: string
  active: boolean
}

const Navbar = () => {
  // const ref = useMenuOnScroll();
  const location = useLocation()
  const [activeNav, setActiveNav] = useState(1)
  const [navItems, setNavItems] = useState<IsideProp[]>([])

  const navbarLinkNames = [
    {
      name: 'Home',
      id: 1,
      nav: 1,
      to: '/',
      active: location.pathname.includes('artists'),
    },
    {
      name: 'About',
      id: 2,
      to: 'about',
      nav: 2,
      active: location.pathname.includes('about'),
    },
    {
      name: 'Features',
      id: 3,
      nav: 3,
      to: 'events',
      active: location.pathname.includes('events'),
    },
  ]

  useEffect(() => {
    const path = navbarLinkNames.map((item) => {
      if (location.pathname.includes(item.to)) {
        setActiveNav(item.id)
      }
      return item
    })
    setNavItems(path)
  }, [location.pathname])

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
                  <Link to={to} className='navbar__navItems-link'>
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
          <div>
            <Button buttonText='Get Started' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
