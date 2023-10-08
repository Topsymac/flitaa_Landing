import React from 'react'
import { useTranslation } from 'react-i18next'
import './PrivacyPolicy.css'
import LandingWrapper from '../../wrappers/landingWrapper/LandingWrapper';

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <>
      <LandingWrapper>
        <div className='privacy_wrapper'>
          <div className='privacy_header'>
            <h1>{t('privacyPolicy')}</h1>
          </div>
          <div className='privacy_content'>
            <p>{t('privacyParagraphOne')}</p>
            <br />
            <p>{t('privacyParagraphTwo')}</p>
            <br />
            <p>{t('privacyParagraphThree')}</p>
            <br />
            <p>{t('privacyParagraphFour')}</p>
            <br />
            <p>{t('privacyParagraphFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>1. {t('privacyParagraphSix')}</h3>
            <p className='underline'>{t('privacyParagraphSeven')}</p>
            <br />
            <p>{t('privacyParagraphEight')}</p>
            <br />
            <p>{t('privacyParagraphNine')}</p>
            <br />
            <p>{t('privacyParagraphTen')}</p>
            <br />
            <p>{t('privacyParagraphEleven')}</p>
            <br />
            <p>{t('privacyParagraphTwelve')}</p>
            <br />
            <p>{t('privacyParagraphThirteen')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphFourteen')}</p>
            <br />
            <p>{t('privacyParagraphFifteen')}</p>
            <br />
            <p>{t('privacyParagraphSixteen')}</p>
            <br />
            <p>{t('privacyParagraphSeventeen')}</p>
            <br />
            <p>{t('privacyParagraphEighteen')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphNineteen')}</p>
            <br />
            <p>{t('privacyParagraphTwenty')}</p>
            <br />
            <p>{t('privacyParagraphTwentyOne')}</p>
            <br />
            <p>{t('privacyParagraphTwentyTwo')}</p>
          </div>
          <div className='privacy_content'>
            <p className='underline'>{t('privacyParagraphTwentyThree')} </p>
            <br />
            <p>{t('privacyParagraphTwentyFour')}</p>
            <br />
            <p>{t('privacyParagraphTwentyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphTwentySix')}</h3>
            <p>{t('privacyParagraphTwentySeven')}</p>
            <br />
            <p>{t('privacyParagraphTwentyEight')}</p>
            <br />
            <p>{t('privacyParagraphTwentyNine')}</p>
            <br />
            <p>{t('privacyParagraphThirty')}</p>
            <br />
            <p>{t('privacyParagraphThirtyOne')}</p>
            <br />
            <p>{t('privacyParagraphThirtyTwo')}</p>
            <br />
            <p>{t('privacyParagraphThirtyThree')}</p>
            <br />
            <p>{t('privacyParagraphThirtyFour')}</p>
            <br />
            <p>{t('privacyParagraphThirtyFive')}</p>
            <br />
            <p>{t('privacyParagraphThirtySix')}</p>
            <br />
            <p>{t('privacyParagraphThirtySeven')}</p>
            <br />
            <p>{t('privacyParagraphThirtyEight')}</p>
            <br />
            <p>{t('privacyParagraphThirtyNine')}</p>
            <br />
            <p>{t('privacyParagraphForty')}</p>
            <br />
            <p>{t('privacyParagraphFortyOne')}</p>
            <br />
            <p>{t('privacyParagraphFortyTwo')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphFortyThree')}</h3>
            <p>{t('privacyParagraphFortyFour')}</p>
            <br />
            <p>{t('privacyParagraphFortyFive')}</p>
            <br />
            <p>{t('privacyParagraphFortySix')}</p>
            <br />
            <p>{t('privacyParagraphFortySeven')}</p>
            <br />
            <p>{t('privacyParagraphFortyEight')}</p>
            <br />
            <p>{t('privacyParagraphFortyNine')}</p>
            <br />
            <p>{t('privacyParagraphFifty')}</p>
            <br />
            <p>{t('privacyParagraphFiftyOne')}</p>
            <br />
            <p>{t('privacyParagraphFiftyTwo')}</p>
            <br />
            <p>{t('privacyParagraphFiftyThree')}</p>
            <br />
            <p>{t('privacyParagraphFiftyFour')}</p>
            <br />
            <p>{t('privacyParagraphFiftyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphFiftySix')}</h3>
            <p>{t('privacyParagraphFiftySeven')}</p>
            <br />
            <p>{t('privacyParagraphFiftyEight')}</p>
            <br />
            <p>{t('privacyParagraphFiftyNine')}</p>
            <br />
            <p>{t('privacyParagraphSixty')}</p>
            <br />
            <p>{t('privacyParagraphSixtyOne')}</p>
            <br />
            <p>{t('privacyParagraphSixtyTwo')}</p>
            <br />
            <p>{t('privacyParagraphSixtyThree')}</p>
            <br />
            <p>{t('privacyParagraphSixtyFour')}</p>
            <br />
            <p>{t('privacyParagraphSixtyFive')}</p>
            <br />
            <p>{t('privacyParagraphSixtySix')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSixtySeven')}</h3>
            <p>{t('privacyParagraphSixtyEight')}</p>
            <br />
            <p>{t('privacyParagraphSixtyNine')}</p>
            <br />
            <p>{t('privacyParagraphSeventy')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSeventyOne')}</h3>
            <p>{t('privacyParagraphSeventyTwo')}</p>
            <br />
            <p>{t('privacyParagraphSeventyThree')}</p>
            <br />
            <p>{t('privacyParagraphSeventyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSeventySix')}</h3>
            <p>{t('privacyParagraphSeventySeven')}</p>
            <br />
            <p>{t('privacyParagraphSeventyEight')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphSeventyNine')}</h3>
            <p>{t('privacyParagraphEighty')}</p>
            <br />
            <p>{t('privacyParagraphEightyOne')}</p>
            <br />
            <p>{t('privacyParagraphEightyThree')}</p>
            <br />
            <p>{t('privacyParagraphEightyFour')}</p>
            <br />
            <p className='underline'>{t('privacyParagraphEightyFive')}</p>
            <br />
            <p>{t('privacyParagraphEightySix')}</p>
            <p>{t('privacyParagraphEightySeven')}</p>
            <br />
            <p>{t('privacyParagraphEightyEight')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphEightyNine')}</h3>
            <p>{t('privacyParagraphNinety')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphNinetyOne')}</h3>
            <p>{t('privacyParagraphNinetyTwo')}</p>
            <br />
            <p>{t('privacyParagraphNinetyThree')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphNinetyFour')}</h3>
            <p>{t('privacyParagraphNinetyFive')}</p>
          </div>
          <div className='privacy_content'>
            <h3>{t('privacyParagraphNinetySix')}</h3>
            <p>{t('privacyParagraphNinetySeven')}</p>
          </div>
        </div>
      </LandingWrapper>
    </>
  );
}

export default PrivacyPolicy