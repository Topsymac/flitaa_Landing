import React from 'react';
import star from '../../../assets/star.png';
import downloadIcon from '../../../assets/shield.svg';
// import transactIcon from '../../../assets/transactIcon.svg';
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
  nigeriaFlag?: string;
  kenyaFlag?: string;
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
  nigeriaFlag,
  kenyaFlag,
}: FeaturesCardProp) => {
  return (
    <div>
      <div className='featuresCard'>
        <div className={`${order1 ? 'featureCardOrderOne' : ''} featureCardOrder`}>
          <div className='featuresCard__introduction'>
            <div>
              <img
                src={star}
                alt='flitaa star'
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
          {order2 && <div className='featuresCard__blurRight'></div>}
          {/*  */}
          <div>
            <p className='featuresCard__paragraph'>{paragraph}</p>
          </div>
          {/*  */}
          <div className='featuresCard__div4'>
            <div>
              {nigeriaFlag ? (
                <img
                  src={nigeriaFlag}
                  alt='flitaa nigeria flag'
                  className='featuresCard__downloadIcon-ng'
                />
              ) : (
                <img
                  src={downloadIcon}
                  alt='flitaa download icon'
                  className='featuresCard__downloadIcon'
                />
              )}
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
          {/* <div> */}
            <div className='featuresCard__div4'>
              <div>
                {kenyaFlag ? (
                  <img
                    src={kenyaFlag}
                    alt='flitaa kenya flag'
                    className='featuresCard__downloadIcon'
                  />
                ) : (
                  <img
                    src={downloadIcon}
                    alt='flitaa download icon'
                    className='featuresCard__downloadIcon'
                  />
                )}
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
          {/* </div> */}
        </div>
        {/*  */}
        {order2 && <div className='featuresCard__blurLeft'></div>}
        {/*  */}
        {/*  */}
        <div className={`${order2 ? 'featureCardOrderTwo' : ''}`}>
          {walletImgOne && (
            <img
              src={walletImg1}
              alt='flitaa walletPicture'
              className='featuresCard__walletImg'
            />
          )}
          {walletImgTwo && (
            <img
              src={walletImg2}
              alt='flitaa walletpicture'
              className='featuresCard__walletImg-one'
            />
          )}
          {walletImgThree && (
            <img
              src={walletImg3}
              alt='flitaa walletpicture'
              className='featuresCard__walletImg'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
