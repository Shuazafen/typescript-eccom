"use client"

import React from 'react'
import Image from 'next/image';
import Container from './Container'
import HeaderMenu from './HeaderMenu'
import Logo from './Logo'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import SearchBat from './SearchBat'
import Carticons from './Carticons'
import {RegisterLink, LoginLink, } from "@kinde-oss/kinde-auth-nextjs/components"

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { Dropdown } from "flowbite-react"
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { ListOrdered } from 'lucide-react'




const Header = async () => {

const {getUser} = getKindeServerSession();
const user = await getUser();

console.log(user);

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

    //       <div className='navbar-profile'>
    //       <Image src="/assests/download-removebg-preview.png" className='' alt="" width={20} height={50}/>
    //       <ul className="nav-profile-dropdown">
    //       <Link href={"/orders"} className="group relative">
    //         <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect"/>
    // <span className="absolute -top-1 -right-1 bg-darkColor text-white
    // h-3.5 w-3.5 rounded-full text-xs font-semibold flex
    // items-center justify-center">0</span>
    //       </Link>
    //         <hr />
    //         <LogoutLink>Log out</LogoutLink>
    //       </ul>
    //       </div>
          
          <Dropdown label="Dropdown button">
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
         
        )}
          
          </div>

          

        
       </div>
     </Container>
    </header>
  )
}

export default Header
