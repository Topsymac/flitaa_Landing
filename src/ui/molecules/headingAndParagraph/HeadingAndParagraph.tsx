import React from 'react';
import star from '../../../assets/star.png';
import './HeadingAndParagraph.css';

interface HeadingAndParagraphProp {
  introductionText: string;
  heading: string;
  image? : string
}

const HeadingAndParagraph = ({
  introductionText,
  heading,image
}: HeadingAndParagraphProp) => {
  return (
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
          <p className='headingAndParagraph__introduction-text'>
            {introductionText}
          </p>
        </div>
        <div>
          <p className='headingAndParagraph__header'>
            {heading}
            <span className='headingAndParagraph__header_image'>
              <img
                src={image}
                alt='img'
                className='headingAndParagraph__header_img'
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndParagraph;
