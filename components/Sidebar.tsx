import React, { FC } from 'react'
import {motion} from 'motion/react'
import Logo from './Logo';
// import { Button } from './ui/button';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { headerData } from '@/constants';
import SocialMedia from './SocialMedia';
import { useOutsideClick } from '@/hooks/outsideclick';

interface SideProps{
    isOpen: boolean
    onClose: () => void;
}

const Sidebar: FC<SideProps> = ({isOpen, onClose}) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div className={`fixed inset-y-0 left-0 z-50 bg-darkColor/50 shadow-xl 
      hoverEffect w-full cursor-auto
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.5, delay:0.3}} 
      ref={sidebarRef}
      className='min-w-72 max-w-96 bg-darkColor text-white/50
      h-full p-10 border-r border-r-white flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <button onClick={onClose}>
          <Logo className='text-white'>P&T</Logo>
             
          </button>
          <button className='hover:text-red-500 hoverEffect' onClick={onClose}>
            <X className='w-10 font-black'/>
          </button>
        </div>
        <div className="flex flex-col gap-5 text-base font-semibold tracking-wide">
      {
        headerData?.map((item) => (
       <Link
       onClick={onClose} 
       key={item?.title}
       href={item?.href} 
       className={`hover:text-white w-28 hoverEffect relative group
       ${pathname === item?.href && "text-white"}`}>
        {item?.title}
       
        </Link>
        ))
      }
    </div>
    <SocialMedia/>
      </motion.div>
    </div>
  )
}

export default Sidebar