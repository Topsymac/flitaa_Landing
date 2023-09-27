import React from 'react'
import star from '../../../Assets/star.png'
import './HeadingAndParagraph.css'

const HeadingAndParagraph = ({ introductionText, heading }:any) => {
  return (
    <div>
      <div className='headingAndParagraph__divOne'>
        <div className=''>
          <div className='headingAndParagraph__introduction'>
            <div>
              <img
                src={star}
                alt='star'
                className='headingAndParagraph__introduction-img'
              />
            </div>
            <p className='headingAndParagraph__introduction-text'>{introductionText}</p>
          </div>
          <div>
            <p className='headingAndParagraph__header'>{heading}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadingAndParagraph
