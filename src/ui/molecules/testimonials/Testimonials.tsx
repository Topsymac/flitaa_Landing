import React from 'react'
import HeadingAndParagraph from '../headingAndParagraph/HeadingAndParagraph'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div>
      <div className='testimonials'>
        <div>
          <div>
            <HeadingAndParagraph
              introductionText='Testimonials'
              heading='Hear what our global users say'
            />
          </div>
          <div className='testimonial__divOne'>
            <div>
              <img src='/' alt='' />
            </div>
            <div>
              <p className='testimonial__paragraph'>
                Happy to begin my cryptocurrency journey with flitaa. It has
                been a wonderful experience.
              </p>
            </div>
            <div>
              <p>Chukwudi Udechukwu</p>
            </div>
          </div>
        </div>
        <div>
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
        </div>
      </div>
    </div>
  )
}

export default Testimonials
