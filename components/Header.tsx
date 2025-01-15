import React from 'react'
import Container from './Container'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import SearchBat from './SearchBat'
import Carticons from './Carticons'

const Header = () => {
  return (
    <header className='bg-white border-b border-b-gray-400 py-5'>
     <Container className='flex items-center justify-between gap-7 text-lightColor'>
       <HeaderMenu />
       <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu/>
            <Logo>P&T</Logo>

       </div>
       <div className="w-auto md:w-1/3 flex items-center
       justify-end gap-5 ">
        <SearchBat/>
        <Carticons/>
        <div>
          <button className="test-sm font-semibold hover:text-darkkkkColor hoverEffect">
            Login
          </button>
        </div>
       </div>
     </Container>
    </header>
  )
}

export default Header
