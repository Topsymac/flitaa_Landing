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
        <main>{children}</main>
        <Footer />
        {/* <Modal show={mobileNav} onClose={()=>{setMobileNav(false)}}>
          <div style={{color: 'white'}}>
            i'm here
          </div>
        </Modal> */}
      </div>
    </div>
  )
}

export default LandingWrapper
