import React from 'react';
import notFoundImg from '../../../assets/noFound.png';
import Button from '../../atoms/button/Button';
import './NotFound.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='notFound'>
      <img src={notFoundImg} alt='' className='nofoundImg' />
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
