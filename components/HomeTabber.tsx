import { productType } from '@/constants';
import { Repeat } from 'lucide-react';
import React from 'react'

interface Props{
    selectedTab: string;
    setselectedTab: (tab: string) => void;
}

const HomeTabber = ({selectedTab, setselectedTab}: Props) => {
  return (
    <div className="flex items  gap-1.5 text-sm font-semibold">
              <div className='flex items-center gap-1.5'>
    {productType?.map((item) => (
        <button 
        key={item?.title}
        onClick={() => setselectedTab(item?.title)} 
        className={`border border-darkColor px-4 py-1.5 md:px-6
        rounded-full hover:bg-darkColor hover:text-white hoverEffect
        ${selectedTab === item?.title && 'bg-darkColor text-white'}`}>
            {item?.title}
        </button>
    ))}
   </div>
   <button className='border border-darkColor p-2  
        rounded-full hover:bg-darkColor hover:text-white hoverEffect'>
    <Repeat className='w-5 h-5 '/>
   </button>
    </div>
   
  )
}

export default HomeTabber