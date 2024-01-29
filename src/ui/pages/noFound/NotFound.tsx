import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../atoms/button/Button';
import errorAnimation from '../../../assets/Flitaa_Illustrations_Error.webm'
import './NotFound.css';
// import notFoundImg from '../../../assets/noFound.png';
const NotFound = () => {
  return (
    <div className='notFound'>
      <div className='termsBlurRight'></div>
      <div className='termsBlurLeft'></div>
      <video autoPlay loop muted className='nofoundImg'>
        <source src={errorAnimation} type='video/mp4' />
      </video>
      {/* <img src={notFoundImg} alt='' className='nofoundImg' /> */}
      <div className='notFound__paragraph'>
        <p className='notFound__text'>
          Oops! the page you're looking for doesn't exist. Double-check the link
          or head back to the homepage.
        </p>
        <Link to='/' className='notFound__button'>
          <Button buttonText={'Go to Hompage'} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
