import React from 'react'
import HeadingAndParagraph from '../headingAndParagraph/HeadingAndParagraph'
import quote from '../../../assets/quote.png'
import './Testimonials.css'

const Testimonials = () => {
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
              introductionText='Testimonials'
              heading='Hear what our global users say'
            />
          </div>
          <div className='testimonial-divOne'>
            <TestimonialBg>
              <div>
                <p className='testimonial__paragraph'>
                  Happy to begin my cryptocurrency journey with flitaa. It has
                  been a wonderful experience.
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
                  Outstanding CEX that listens to the heartbeat of it’s users.
                  Growing at geometric progression. Buying and selling of crypto
                  made so easy and simple. Flitaa dey for you.
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
                  Outstanding CEX that listens to the heartbeat of it’s users.
                  Growing at geometric progression. Buying and selling of crypto
                  made so easy and simple. Flitaa dey for you.
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
