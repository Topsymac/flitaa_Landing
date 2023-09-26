import React from 'react'
import star from '../../../Assets/star.png'
import downloadIcon from '../../../Assets/Icon 1.png'
import WalletPicture from '../../../Assets/Wallet Video.png'
import './FeaturesCard.css'

interface FeaturesCardProp {
  introductionText: string
  heading: string
  paragraph: string
  subHeading1: string
  subHeadingParagraph1: string
  subHeading2: string
  subHeadingParagraph2: string
  order1?: boolean
  order2?: boolean
}

const FeaturesCard = ({
  introductionText,
  heading,
  paragraph,
  subHeading1,
  subHeadingParagraph1,
  subHeading2,
  subHeadingParagraph2,
  order1,
  order2,
}: FeaturesCardProp) => {
  return (
    <div>
      <div className='featuresCard'>
        <div className={`${order1 ? 'featureCardOrderOne' : ''}`}>
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
            <p className='featuresCard__header'>{heading}</p>
          </div>
          <div>
            <p className='featuresCard__paragraph'>{paragraph}</p>
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
                <p className='featuresCard__safety'>{subHeading1}</p>
              </div>
              <div className='featuresCard__paragraph-two'>
                {subHeadingParagraph1}
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
                  <p className='featuresCard__safety'>{subHeading2}</p>
                </div>
                <div className='featuresCard__paragraph-two'>
                  {subHeadingParagraph2}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={`${order2 ? 'featureCardOrderTwo' : ''}`}>
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
