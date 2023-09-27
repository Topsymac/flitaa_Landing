import React from 'react'
import InternetImg from '../../../Assets/globe-02.svg'
import arrowDown from '../../../Assets/chevron-down.svg'
import './LanguageDropdown.css'
const LanguageDropdown = () => {
  return (
    <div>
      <div className='languageDropdown'>
        <img src={InternetImg} alt='internet' className='languageDropdown__internetImg' />
        <p>EN</p>
        <img
          src={arrowDown}
          alt='arrow'
          className='languageDropdown__arrowDown'
        />
      </div>
    </div>
  )
}

export default LanguageDropdown
