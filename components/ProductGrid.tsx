'use client'

import React, { useState } from 'react'
import HomeTabber from './HomeTabber'
import { productType } from '@/constants';

const ProductGrid = () => {
    const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    
    return (
        <div className='mt-10 flex flex-col items-center'>
        <HomeTabber selectedTab={selectedTab} setselectedTab={setSelectedTab}/>
    </div>
    )
    
}
export default ProductGrid