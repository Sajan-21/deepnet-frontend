import React from 'react'
import MenuIntro from '../components/MenuIntro'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MenuListing from '../components/MenuListing'

const Menu = () => {
  return (
    <div className='bg-black'>
      <Navbar />
      <MenuIntro />
      <MenuListing />
      <Footer />
    </div>
  )
}

export default Menu