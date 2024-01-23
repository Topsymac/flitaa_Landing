import React from 'react';
import { useTranslation } from 'react-i18next';
// import HeadingAndParagraph from '../headingAndParagraph/HeadingAndParagraph';
import quote from '../../../assets/quote.png';
import TestimonialImg from '../../../assets/3.png';
import star from '../../../assets/star.png';
import './Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();

  // const TestimonialBg = ({ children }: any) => {
  //   return (
  //     <div className='testimonial__content'>
  //       {/* <div className='testimonial__divOne'> */}
  //       {/* <img src={TestimonialImg} alt='' className='testimonialBg' /> */}
  //       <div>
  //         <img src={quote} alt='' className='testimonial__quoteImg' />
  //       </div>
  //       {children}
  //       </div>
  //     // </div>
  //   )
  // }
  return (
    <div className='testimonial'>
      <div className='testimonial__headerDiv'>
        <div className='testimonial__headerText'>
          {/* <HeadingAndParagraph
            introductionText={t('testimonials')}
            heading={t('hearUserSay')}
          /> */}
          <div className='testimonial__divOne'>
            <div className=''>
              <div className='testimonial__introduction'>
                <div>
                  <img
                    src={star}
                    alt='star'
                    className='testimonial__introduction-img'
                  />
                </div>
                <p className='testimonial__introduction-text'>
                  {t('testimonials')}
                </p>
              </div>
              <div>
                <p className='testimonial__header'>{t('hearUserSay')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* ellipse  */}
        <div className='testimonial__blurLeft'></div>
        {/*  */}
        <div className='testimonial-divOne'>
          <img src={TestimonialImg} alt='' className='testimonialBg' />
          <div className='testimonial__content'>
            <img src={quote} alt='' className='testimonial__quoteImg' />
            <p className='testimonial__paragraph'>
              {t('happyToBeginCryptoJourney')}
            </p>
            <div className='testimonial__userName'>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='testimonial__blurRight'></div>
      {/*  */}
      <div className='testimonial_div'>
        <div className='testimonial__paragraphTwo-div'>
          <img src={TestimonialImg} alt='' className='testimonialBg' />
          <div className='testimonial__content'>
            <img src={quote} alt='' className='testimonial__quoteImg' />
            <p className='testimonial__paragraphTwo'>
              {t('growingAtGeometricProgression')}
            </p>
            <div className='testimonial__userName'>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='testimonial__paragraphTwo-div'>
          <img src={TestimonialImg} alt='' className='testimonialBg' />
          <div className='testimonial__content'>
            <img src={quote} alt='' className='testimonial__quoteImg' />
            <p className='testimonial__paragraphThree'>
              {t('oneOfTheBestApps')}
            </p>
            <div className='testimonial__userName'>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
          <div>
            <div>
              <img src='/' alt='' />
            </div>
            <div>
              <p>
                Happy to begin my cryptocurrency journey with flitaa. It has
                been a wonderful experience.
              </p>
            </div>
            <div>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
          <div>
            <div>
              <img src='/' alt='' />
            </div>
            <div>
              <p>
                Happy to begin my cryptocurrency journey with flitaa. It has
                been a wonderful experience.
              </p>
            </div>
            <div>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Testimonials;
