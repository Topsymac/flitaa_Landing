import React from 'react'
import { useTranslation } from 'react-i18next'
import HeadingAndParagraph from '../headingAndParagraph/HeadingAndParagraph'
import quote from '../../../assets/quote.png'
import './Testimonials.css'

const Testimonials = () => {
  const { t } = useTranslation()

  const TestimonialBg = ({ children }: any) => {
    return (
      <div>
        <div className='testimonial__divOne'>
          <div>
            <img src={quote} alt='' className='testimonial__quoteImg' />
          </div>
          {children}
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className='testimonial'>
        <div>
          <div>
            <HeadingAndParagraph
              introductionText={t('testimonials')}
              heading={t('hearUserSay')}
            />
          </div>
          <div className='testimonial-divOne'>
            <TestimonialBg>
              <div>
                <p className='testimonial__paragraph'>
                  {t('happyToBeginCryptoJourney')}
                </p>
              </div>
              <div className='testimonial__userName'>
                <p>Chukwudi Udechukwu</p>
              </div>
            </TestimonialBg>
          </div>
        </div>
        <div>
          <div>
            <div className='testimonial__paragraphTwo-div'>
              <TestimonialBg>
                <p className='testimonial__paragraphTwo'>
                  {t('growingAtGeometricProgression')}
                </p>
                <div className='testimonial__userName'>
                  <p>Chukwudi Udechukwu</p>
                </div>
              </TestimonialBg>
            </div>
          </div>
          <div>
            <TestimonialBg>
              <div>
                <p className='testimonial__paragraphThree'>
                  {t('growingAtGeometricProgression')}
                </p>
                <div className='testimonial__userName'>
                  <p>Chukwudi Udechukwu</p>
                </div>
              </div>
            </TestimonialBg>
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
    </div>
  )
}

export default Testimonials
