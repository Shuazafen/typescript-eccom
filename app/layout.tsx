import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {AuthProvider} from './AuthProvider'
import localFont from 'next/font/local'

const raleway = localFont({
  src: './fonts/Raleway.woff2',
  variable: '--font-raleway',
  weight: "100 900",
})



export const metadata: Metadata = {
  title: 'P&T Accessories',
  description: 'A go to store for all your accessories needs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
          <html lang="en">
      <body
        className={`${raleway.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
    </AuthProvider>
   
  );
}
