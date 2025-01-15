import React from 'react'
import Title from './Title'

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
        Best Accessories Collection
      </Title>
      <p className="text-sm text-center text-lightColor/80 font-medium
      max-w-[480px]">
        Find the best alternate accessories for your style and comfort.
      </p>
    </div>
  )
}

export default HomeBanner
