import React from 'react'
import downloadIcon from '../../../assets/Icon 1.png'
import deposit from '../../../assets/Icon 2.png'
import rocket from '../../../assets/Icon 3.png'

import './TradeCrypto.css'

interface TradeCryptoProp {
  bgImg?: boolean
  img: string
  heading: string
  paragraph?: string
}

const TradeCrypto = () => {
  const Card = ({ bgImg, img, heading, paragraph }: TradeCryptoProp) => {
    return (
      <div
        className={`${
          bgImg ? 'tradeCrypto__bgImg' : 'tradeCrypto__bgImgOne'
        }`}
      >
        <div style={{ textAlign: 'end' }}>
          <img src={img} alt='icon' className='tradeCrypto__icon' />
        </div>
        <div className='tradeCrypto__heading'>{heading}</div>
        <div>
          <p className='tradeCrypto__paragraph'>{paragraph}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='tradeCrypto'>
      <div>
        <Card img={downloadIcon} heading='Download our app' />
      </div>
      <div>
        <Card
          bgImg
          img={deposit}
          heading='Deposit cash or crypto'
          paragraph='Lorem ipsum dolor sit amet consectetur. Nisi quam cras nibh nam nullam auctor lectus in nulla. Sed leo mattis neque ullamcorper ultricies.'
        />
      </div>
      <div>
        <Card img={rocket} heading='Transact and observe growth' />
      </div>
    </div>
  )
}

export default TradeCrypto
