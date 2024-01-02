import React from 'react'
import notFoundImg from '../../../assets/notFound.png'
import Button from '../../atoms/button/Button';
const NotFound = () => {
  return (
    <div>
      <img src={notFoundImg} alt='' />
      <p>
        Oops! the page you're looking for doesn't exist. Double-check the link
        or head back to the homepage.
      </p>
      <Button buttonText={'Go to Hompage'} />
    </div>
  );
}

export default NotFound
