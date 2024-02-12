import React, { useEffect, useState, useRef } from 'react';
import i18next from '../../../translate/i18next';
import InternetImg from '../../../assets/globe-02.svg';
import arrowDown from '../../../assets/chevronDown.svg';
import englishIcon from '../../../assets/englishIcon.svg';
import kenyaIcon from '../../../assets/kenyaIcon.svg';

import './LanguageDropdown.css';
// import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
  const [locale, setLocale] = useState(i18next.language);
  const [OpenDropdown, setOpenDropdown] = useState(false);
  const [openSlide, setOpenSlide] = useState(true);

  useEffect(() => {
    const handleChange = (lng: any) => setLocale(lng);
    i18next.on('languageChanged', handleChange);

    return () => {
      i18next.off('languageChanged', handleChange);
    };
  }, []);

  const handleLanguageChange = (event: any) => {
    const newLocale = event.target.value;
    i18next.changeLanguage(newLocale);
    setOpenDropdown(false);
  };

  const OpenDropdownFunction = () => {
    setOpenDropdown(!OpenDropdown);
  };
  
// the language dropdown disappear when there is a click outside the dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeOpenMenus = (event: MouseEvent): void => {
    if (
      dropdownRef.current !== null &&
      openSlide &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdown(false);
      setOpenSlide(true); // Close the dropdown when clicking outside
    }
  };

  useEffect(() => {
    // Attach event listener when the component mounts
    document.addEventListener('mousedown', closeOpenMenus);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', closeOpenMenus);
    };
  }, []);
  return (
    <div>
      <div
        className='languageDropdown'
        onClick={OpenDropdownFunction}
        ref={dropdownRef}
      >
        <img
          src={InternetImg}
          alt='flitaa internet'
          className='languageDropdown__internetImg'
        />
        <p
          className='languageDropdown__text'
          // onClick={() => handleLanguageChange({ target: { value: 'sw' } })}
        >
          {locale === 'en-US' ? 'EN' : 'SW'}
        </p>
        <img
          src={arrowDown}
          alt='flitaa arrow'
          className='languageDropdown__arrowDown'
        />

        {OpenDropdown ? (
          <div className='selectLanguage'>
            <p className='selectLanguage__paragraph'>Select Language</p>
            <div
              onClick={() =>
                handleLanguageChange({ target: { value: 'en-US' } })
              }
              className='selectLanguage_divOne'
            >
              <img
                src={englishIcon}
                alt='flitaa english icon'
                className='selectLanguage-icon'
              />
              <p>English</p>
            </div>
            <div
              onClick={() => handleLanguageChange({ target: { value: 'sw' } })}
              className='selectLanguage_div'
            >
              <img src={kenyaIcon} alt='flitaa kenya icon' className='selectLanguage-icon' />
              <p>Swahili</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default LanguageDropdown;
