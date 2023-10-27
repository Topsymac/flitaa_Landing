import React from 'react'
import { useTranslation } from 'react-i18next'

import downloadIcon from '../../../assets/downloadIcon.svg';
import deposit from '../../../assets/depositIcon.svg';
import rocket from '../../../assets/transactIcon.svg';
import depositMiddleCardBg from '../../../assets/2.png'
import CardBg from '../../../assets/3.png'

import './TradeCrypto.css'

interface TradeCryptoProp {
  bgImg?: boolean
  img: string
  heading: string
  paragraph?: string
}

const TradeCrypto = () => {
  const { t } = useTranslation()
  // const Card = ({ bgImg, img, heading, paragraph }: TradeCryptoProp) => {
  //   return (
  //     <div className='tradeCrypto__div-content'>
  //       <img
  //         src={bgImg ? depositMiddleCardBg : CardBg}
  //         alt=''
  //         className={`${
  //           bgImg ? 'tradeCrypto__bgImg' : 'tradeCrypto__bgImgOne'
  //         }`}
  //       />
  //       <div className='tradeCrypto__content'>
  //         <div style={{ textAlign: 'end' }}>
  //           <img src={img} alt='icon' className='tradeCrypto__icon' />
  //         </div>
  //         <div className='tradeCrypto__text'>
  //           <div className='tradeCrypto__heading'>{heading}</div>
  //           <p className='tradeCrypto__paragraph'>{paragraph}</p>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className='tradeCrypto'>
      <div>
        {/* <Card img={downloadIcon} heading={t('downloadApp')} /> */}
        <div className='tradeCrypto__div-content'>
          <img src={CardBg} alt='' className='tradeCrypto__bgImgTwo' />
          <div className='tradeCrypto__content'>
            <div style={{ textAlign: 'end' }}>
              <img
                src={downloadIcon}
                alt='icon'
                className='tradeCrypto__icon'
              />
            </div>
            <div className='tradeCrypto__textOne'>
              <div className='tradeCrypto__heading'>{t('downloadApp')}</div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className='tradeCrypto__div-content'>
          <img
            src={depositMiddleCardBg}
            alt='img'
            className='tradeCrypto__bgImg'
          />
          <div className='tradeCrypto__content'>
            <div style={{ textAlign: 'end' }}>
              <img src={deposit} alt='icon' className='tradeCrypto__icon' />
            </div>
            <div className='tradeCrypto__text'>
              <div className='tradeCrypto__heading'>
                {t('depositCashOrCrypto')}
              </div>
              <p className='tradeCrypto__paragraph'>
                Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
                ultricies.
              </p>
            </div>
          </div>
        </div>
        {/* <Card
          bgImg
          img={deposit}
          heading={t('depositCashOrCrypto')}
          paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper ultricies.'
        /> */}
      </div>
      {/*  */}
      <div>
        <div className='tradeCrypto__div-content'>
          <img src={CardBg} alt='' className='tradeCrypto__bgImgOne' />
          <div className='tradeCrypto__content'>
            <div style={{ textAlign: 'end' }}>
              <img src={rocket} alt='icon' className='tradeCrypto__icon' />
            </div>
            <div className='tradeCrypto__textOne'>
              <div className='tradeCrypto__heading'>
                {t('transactAndObserveGrowth')}
              </div>
            </div>
          </div>
        </div>
        {/* <Card img={rocket} heading={t('transactAndObserveGrowth')} /> */}
      </div>
    </div>
  );
}

export default TradeCrypto
