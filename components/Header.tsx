

import React from 'react'
// import Image from 'next/image';
import Container from './Container'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
// import Link from 'next/link'
import MobileMenu from './MobileMenu'
import SearchBat from './SearchBat'
import Carticons from './Carticons'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
// import { Dropdown } from "flowbite-react"
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";






const Header = async () => {
   const {getUser} = getKindeServerSession();
   const user = await getUser();
  
  



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

        
         {!user ? (
         <LoginLink>
            <button className="test-sm font-semibold hover:text-darkkkkColor hoverEffect">
              Login
            </button>
          </LoginLink>
        ) : (

         
      <LogoutLink>Log out</LogoutLink> 
            
          
          
       
         
        )}  
          
          </div>

          

        
       </div>
     </Container>
    </header>
  )
}

export default Header
