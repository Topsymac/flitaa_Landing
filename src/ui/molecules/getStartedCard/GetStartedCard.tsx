import React from 'react'
import { useTranslation } from 'react-i18next'

import star from '../../../assets/star.png'
import image from '../../../assets/Image.png'
import googlePlay from '../../../assets/heroAppStore.svg';
import applePlay from '../../../assets/heroGoogleStore.svg';
import getStartedBorder from '../../../assets/getStartedBorder.svg'
import mobileScreenGetStarted from '../../../assets/mobileScreenGetStarted.svg'

import './GetStartedCard.css'


const GetStartedCard = () => {
  const { t } = useTranslation()

  return (
    <div className='getStarted'>
      <div className='getStarted__div-border'>
        <img src={getStartedBorder} alt='img' className='getStartedBorder' />
        {/* for mobile screen   */}
        {/* <img
          src={mobileScreenGetStarted}
          alt='img'
          className='mobileScreenGetStarted'
        /> */}
        <div className='getStarted__div'>
          <div className='getStarted__divOne'>
            <div className=''>
              <div className='getStarted__introduction'>
                <div>
                  <img
                    src={star}
                    alt='star'
                    className='getStarted__introduction-img'
                  />
                </div>
                <p className='getStarted__introduction-text'>
                  {t('downloadApp')}
                </p>
              </div>
              <div>
                <p className='getStarted__header'>{t('letGetYouStarted')}</p>
              </div>
              <div>
                <div className='getStarted__paragraph'>
                  {t('noMatterWhereYouAre')}
                  <br />
                  <div className='getStarted__paragraph-sub'>
                    {t('availableOnAndroidAndIOS')}
                  </div>
                </div>
              </div>
              <div className='getStarted__store'>
                <div>
                  <img
                    src={googlePlay}
                    alt='googlePlay'
                    className='getStarted__googlePlay'
                  />
                </div>
                <div>
                  <img
                    src={applePlay}
                    alt='applePlay'
                    className='getStarted__applePlay'
                  />
                </div>
              </div>
            </div>
          </div>
            <img src={image} alt='img' className='getStarted__image' />
        </div>
      </div>
    </div>
  );
}

export default GetStartedCard
