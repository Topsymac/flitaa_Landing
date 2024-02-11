import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Footer from '../../component/footer/Footer'
// import Modal from '../modal/Modal'


const LandingWrapper = ({children}:any) => {
  // const [mobileNav, setMobileNav] = useState(true)
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
