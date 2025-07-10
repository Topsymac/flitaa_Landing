import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'


const LandingWrapper = ({children}:any) => {
  return (
    <div>
      <div className=''>
        <Navbar />
        <main >{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LandingWrapper
