import React from 'react';
import star from '../../../assets/star.png';
import downloadIcon from '../../../assets/shield.svg';
import transactIcon from '../../../assets/transactIcon.svg';
import walletImg1 from '../../../assets/walletImgOne.png';
import walletImg2 from '../../../assets/walletImgTwo.png';
import walletImg3 from '../../../assets/walletImgThree.png';
import './FeaturesCard.css';

interface FeaturesCardProp {
  introductionText: string;
  heading: string;
  paragraph: string;
  subHeading1: string;
  subHeadingParagraph1: string;
  subHeading2: string;
  subHeadingParagraph2: string;
  order1?: boolean;
  order2?: boolean;
  walletImgOne?: boolean;
  walletImgTwo?: boolean;
  walletImgThree?: boolean;
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
  walletImgOne,
  walletImgTwo,
  walletImgThree,
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
          {/*  */}
          {/* {order2 && <div className='featuresCard_greenEllipse'></div>} */}
          {/*  */}
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
                  src={transactIcon}
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
          {walletImgOne && (
            <img
              src={walletImg1}
              alt='WalletPicture'
              className='featuresCard__walletImg'
            />
          )}
          {walletImgTwo && (
            <img
              src={walletImg2}
              alt='WalletPicture'
              className='featuresCard__walletImg'
            />
          )}
          {walletImgThree && (
            <img
              src={walletImg3}
              alt='WalletPicture'
              className='featuresCard__walletImg'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
