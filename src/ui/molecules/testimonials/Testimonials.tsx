import React from 'react';
import { useTranslation } from 'react-i18next';
// import HeadingAndParagraph from '../headingAndParagraph/HeadingAndParagraph';
import quote from '../../../assets/quote.png';
import TestimonialImg from '../../../assets/3.png';
import star from '../../../assets/star.png';
import stars from "../../../assets/star.svg"
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
      <div className='testimonial__headerText testimonial__onlyDisplayMobile'>
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
      <div className='testimonial__headerDiv'>
        <div className='testimonial__headerText testimonial_onlyDisplayDesktop'>
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
            <div className='testimonial_ratings'>
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
            </div>
            <p className='testimonial__paragraph'>
              I just can't give nothing less to a 5 star. Fast withdrawals and
              deposits, good interface that when I compare with the previous
              when it started.. So awesome and client friendly. Speaking of
              friendly, the customer services are so reliable when it comes to
              fixing any problem on the app. I just love flitta
            </p>
            <div className='testimonial__userName'>
              <p>Dancun Nyabuti</p>
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
            <div className='testimonial_ratings'>
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
            </div>
            <p className='testimonial__paragraphTwo'>
              I have no bad issues with flitaa, it is the perfect wallet I can
              recommend out there, deposit and withdrawal works exactly the same
              time they said it would be completed. Immediate customer support
              and all cool features. Please consider the minimum amount to be
              received into wallets so that we can receive any amount we can at
              the moment
            </p>
            <div className='testimonial__userName'>
              <p>Justice Ehiz</p>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className='testimonial__paragraphTwo-div'>
          <img src={TestimonialImg} alt='' className='testimonialBg' />
          <div className='testimonial__content'>
            <img src={quote} alt='' className='testimonial__quoteImg' />
            <div className='testimonial_ratings'>
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
              <img src={stars} alt='' />
            </div>
            <p className='testimonial__paragraphThree'>
              I have never seen an app like this before, all those wallet am
              coming across with, they are different from these, some of those
              wallet you might be facing some issues like sending of crypto
              without reflecting where you send it too. But this wallet is not
              like that. This app is really amazing i will recommend to others.
              thanks alot
            </p>

            <p className='testimonial__userName'>Adeuga Olanrewaju</p>
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
