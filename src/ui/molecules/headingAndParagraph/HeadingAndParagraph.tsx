import React from 'react';
import { useTranslation } from 'react-i18next';
import star from '../../../assets/star.png';
import './HeadingAndParagraph.css';

interface HeadingAndParagraphProp {
  introductionText: string;
  heading: string;
}

const HeadingAndParagraph = ({
  introductionText,
  heading,
}: HeadingAndParagraphProp) => {
  const { t } = useTranslation();
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
          <p className='headingAndParagraph__header'>{heading}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingAndParagraph;
