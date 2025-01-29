import { Metadata } from 'next'
import React from 'react'

export const metadata : Metadata = {
    title: 'P&T Backend',
    description: 'Backend for P&T accessories'
};

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
   <html lang='en'>
    <body>
      {children}
      </body>
   </html>
  )
}

export default RootLayout