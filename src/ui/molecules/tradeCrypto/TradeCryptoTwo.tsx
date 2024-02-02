import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import downloadIcon from '../../../assets/downloadIcon.svg';
import deposit from '../../../assets/depositIcon.svg';
import rocket from '../../../assets/transactIcon.svg';

import './TradeCryptoTwo.css';

const TradeCryptoTwo = () => {
  const { t } = useTranslation();
    const [isVisible, setVisible] = useState(true);
   const handleMouseEnter = () => {
     setVisible(false);
   };
    const handleMouseLeave = () => {
      setVisible(true);
    };
  return (
    <>
      <div className='tradeCryptoTwo'>
          {/* <Card img={downloadIcon} heading={t('downloadApp')} /> */}
          <div
            className='tradeCrypto_div moreWidthColoredOne'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className='tradeCrypto_content moreWidthOne'>
              <div style={{ textAlign: 'end' }}>
                <img src={downloadIcon} alt='icon' className='tradeCrypto' />
              </div>
              <div className='tradeCrypto_text'>
                <div className='tradeCrypto__head'>{t('downloadApp')}</div>
                <p className='tradeCrypto__para moreWidthOne-paragraph'>
                  {'Download our app on app store and googleplay store'}
                </p>
              </div>
            </div>
          </div>
        {/*  */}
          <div
            className={`tradeCrypto_div moreWidthColored ${
              !isVisible ? 'moreWidthColored__reducedWidth' : 'moreWidthColored'
            }`}
          >
            <div className={`tradeCrypto_content moreWidth ${
              !isVisible ? 'moreWidthColored__reducedWidth' : 'moreWidthColored'
            }`}>
              <div style={{ textAlign: 'end' }}>
                <img src={deposit} alt='icon' className='tradeCrypto' />
              </div>
              <div className='tradeCrypto_text'>
                <div className='tradeCrypto__head'>{t('depositCash')}</div>
                <p
                  className={`tradeCrypto__para ${
                    !isVisible
                      ? 'none'
                      : 'display'
                  }`}
                >
                  {t('bringInOrTakeOutCashAtZeroDeposit')}
                </p>
              </div>
            </div>
          </div>
        {/*  */}

        <div
          className='tradeCrypto_div moreWidthColoredTwo'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className='tradeCrypto_content moreWidthTwo'>
            <div style={{ textAlign: 'end' }}>
              <img src={rocket} alt='icon' className='tradeCrypto' />
            </div>
            <div className='tradeCrypto_text'>
              <div className='tradeCrypto__head'>{t('startInvesting')}</div>
              <p className='tradeCrypto__para moreWidthTwo-paragraph'>
                {t('bringInOrTakeOutCashAtZeroDeposit')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradeCryptoTwo;
