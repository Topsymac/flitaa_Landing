import React from 'react'
import './Button.css'

interface buttonProp {
    buttonText: string
}

const Button = ({ buttonText }: buttonProp) => {
  return (
    <div>
      <div className='button'>{buttonText}</div>
    </div>
  )
}

export default Button
