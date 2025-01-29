'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState} from 'react'
import Sidebar from './Sidebar'

const MobileMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <>
    <button onClick={() => setShowSidebar(!showSidebar)}>
      <AlignLeft className="hover:text-darkColor hoverEffect md:hidden"/>
    </button>
    <div className="xl:hidden">
      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)}/>  
    </div>
    </>
  )
}

export default MobileMenu
