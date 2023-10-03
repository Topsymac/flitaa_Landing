// import React, { useEffect, useState } from 'react'
// import i18next from '../../../translate/i18next'
// import InternetImg from '../../../assets/globe-02.svg'
// import arrowDown from '../../../assets/chevron-down.svg'
// import './LanguageDropdown.css'
// import { useTranslation } from 'react-i18next'
// const LanguageDropdown = () => {
//   // Use useState to create a locale state variable with an initial value
//   const [locale, setLocale] = useState(i18next.language)

//   // Use useEffect to update the locale when the language changes
//   useEffect(() => {
//     const handleChange = (lng: any) => setLocale(lng)
//     i18next.on('languageChanged', handleChange)

//     // Clean up the event listener when the component unmounts
//     return () => {
//       i18next.off('languageChanged', handleChange)
//     }
//   }, [])

//   const handleLanguageChange = (event: any) => {
//     i18next.changeLanguage(event.target.value)
//   }

//   return (
//     <div>
//       <div className='languageDropdown'>
//         <img
//           src={InternetImg}
//           alt='internet'
//           className='languageDropdown__internetImg'
//         />
//         <p onChange={handleLanguageChange}>EN</p>
//         <img
//           src={arrowDown}
//           alt='arrow'
//           className='languageDropdown__arrowDown'
//         />
//         {/* <select value={locale} onChange={handleLanguageChange} className='selectLanguage__select'>
//           <option value='en'>En</option>
//           <option value='sw'>Sw</option>
//         </select> */}
//         <div className='selectLanguage'>
//           <p>Select Language</p>
//           <div>
//             <img src='/' alt='' />
//             <p >English</p>
//           </div>
//           <div>
//             <img src='/' alt='' />
//             <p>Swahili</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LanguageDropdown

import React, { useEffect, useState } from 'react'
import i18next from '../../../translate/i18next'
import InternetImg from '../../../assets/globe-02.svg'
import arrowDown from '../../../assets/chevron-down.svg'
import './LanguageDropdown.css'
import { useTranslation } from 'react-i18next'

const LanguageDropdown = () => {
  const [locale, setLocale] = useState(i18next.language)
  const [OpenDropdown, setOpenDropdown] = useState(false)

  useEffect(() => {
    const handleChange = (lng: any) => setLocale(lng)
    i18next.on('languageChanged', handleChange)

    return () => {
      i18next.off('languageChanged', handleChange)
    }
  }, [])

  const handleLanguageChange = (event: any) => {
    const newLocale = event.target.value
    i18next.changeLanguage(newLocale)
    setOpenDropdown(false)
  }

  const OpenDropdownFunction = () => {
    setOpenDropdown(!OpenDropdown)
  }

  return (
    <div>
      <div className='languageDropdown'>
        <img
          src={InternetImg}
          alt='internet'
          className='languageDropdown__internetImg'
        />
        <p onClick={() => handleLanguageChange({ target: { value: 'sw' } })}>
          {locale === 'en' ? 'EN' : 'SW'}
        </p>
        <img
          src={arrowDown}
          alt='arrow'
          className='languageDropdown__arrowDown'
          onClick={OpenDropdownFunction}
        />

        {OpenDropdown ? (
          <div className='selectLanguage'>
            <p>Select Language</p>
            <div
              onClick={() => handleLanguageChange({ target: { value: 'en' } })}
            >
              <img src='/' alt='' />
              <p>English</p>
            </div>
            <div
              onClick={() => handleLanguageChange({ target: { value: 'sw' } })}
            >
              <img src='/' alt='' />
              <p>Swahili</p>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default LanguageDropdown
