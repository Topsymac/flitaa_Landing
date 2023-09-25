import React from 'react'
import star from '../../../assets/star.png'
import image from '../../../assets/Image.png'
import googlePlay from '../../../assets/Mobile app store badge.png'
import applePlay from '../../../assets/Mobile app store badge (1).png'

import './GetStartedCard.css'


const GetStartedCard = () => {
  return (
    <div className='getStarted'>
      <div className='getStarted__div-border'>
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
                  Download our app
                </p>
              </div>
              <div>
                <p className='getStarted__header'>Let’s get you started</p>
              </div>
              <div>
                <div className='getStarted__paragraph'>
                  No matter where you are, trading is just one click away. Stay
                  updated on your investment anytime and stay informed on the
                  latest price of Bitcoin, Ethereum, and other trending digital
                  assets.
                  <br />
                  <div className='getStarted__paragraph-sub'>
                    Available on Android and iOS.
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
          <div>
            <img src={image} alt='' className='getStarted__image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStartedCard
