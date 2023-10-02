import React, { useEffect, useState } from 'react'
import i18next from '../../../translate/i18next'
import InternetImg from '../../../assets/globe-02.svg'
import arrowDown from '../../../assets/chevron-down.svg'
import './LanguageDropdown.css'
import { useTranslation } from 'react-i18next'
const LanguageDropdown = () => {
  // Use useState to create a locale state variable with an initial value
  const [locale, setLocale] = useState(i18next.language)

  // Use useEffect to update the locale when the language changes
  useEffect(() => {
    const handleChange = (lng: any) => setLocale(lng)
    i18next.on('languageChanged', handleChange)

    // Clean up the event listener when the component unmounts
    return () => {
      i18next.off('languageChanged', handleChange)
    }
  }, [])

  const handleLanguageChange = (event: any) => {
    i18next.changeLanguage(event.target.value)
  }
  // const { locale, setLocale } = useState(i18next.language)

  // i18next.on('languageChanged', (lng) => setLocale(i18next.language))

  // const handleChange = (event: any) => {
  //   i18next.changeLanguage(event.target.value)
  // }
  return (
    <div>
      <div className='languageDropdown'>
        <img
          src={InternetImg}
          alt='internet'
          className='languageDropdown__internetImg'
        />
        <p>EN</p>
        <img
          src={arrowDown}
          alt='arrow'
          className='languageDropdown__arrowDown'
        />
        <select value={locale} onChange={handleLanguageChange}>
          <option value='en'>English</option>
          <option value='sw'>Swahili</option>
        </select>
      </div>
    </div>
  )
}

export default LanguageDropdown
