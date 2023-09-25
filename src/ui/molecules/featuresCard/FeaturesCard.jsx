import React from 'react'
import star from '../../../assets/star.png'
import downloadIcon from '../../../assets/Icon 1.png'
import WalletPicture from '../../../assets/Wallet Video.png'
import './FeaturesCard.css'

const FeaturesCard = ({ introductionText }) => {
  return (
    <div>
      <div className='featuresCard'>
        <div>
          <div className='featuresCard__introduction'>
            <div>
              <img
                src={star}
                alt='star'
                className='featuresCard__introduction-img'
              />
            </div>
            <p className='featuresCard__introduction-text'>
              {introductionText}
            </p>
          </div>
          <div>
            <p className='featuresCard__header'>
              Features you’ll expect from a simple wallet
            </p>
          </div>
          <div>
            <p className='featuresCard__paragraph'>
              Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
              nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper
              ultricies.Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          {/*  */}
          <div className='featuresCard__div4'>
            <div>
              <img
                src={downloadIcon}
                alt='downloadIcon'
                className='featuresCard__downloadIcon'
              />
            </div>
            <div>
              <div>
                <p className='featuresCard__safety'>Funds Safety</p>
              </div>
              <div className='featuresCard__paragraph-two'>
                Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam
                nullam auctor lectus in nulla.
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <div className='featuresCard__div4'>
              <div>
                <img
                  src={downloadIcon}
                  alt='downloadIcon'
                  className='featuresCard__downloadIcon'
                />
              </div>
              <div>
                <div>
                  <p className='featuresCard__safety'>Multi Assets</p>
                </div>
                <div className='featuresCard__paragraph-two'>
                  Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh
                  nam nullam auctor lectus in nulla.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <img
            src={WalletPicture}
            alt='WalletPicture'
            className='featuresCard__walletImg'
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturesCard
