// "use client";

import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
// import { useScroll, useTransform } from 'framer-motion';
import BackgroundMotion from '@/components/bg-motion'
// import useVantaBirds from '@/components/vanta-birds'
// import VantaBirds from '@/components/vanta-birds';
// import VantaBirds from '@/components/vanta-birds-hook';

const inter = Inter({ subsets: ['latin'] })
// 

export const metadata = {
  title: 'Chad Owens | Portfolio',
  description: 'Chad is a User Experience Designer and Full-Stack Developer with 10+ years of experience.',
}
// 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // const vantaRef = useVantaBirds();

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} 
        bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        {/* <script async src="//jsfiddle.net/4fzxhv1w/2/embed/"></script> */}
        {/* <div ref={vantaRef} className="fixed inset-0 z-[-1]" style={{ width: '100vw', height: '100vh' }}>
        </div> */}
  
          {/* <motion.div className="bg-[#efd5d6] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
          
          ></motion.div>

          <motion.div className="bg-[#d2cef2] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
          
          ></motion.div> */}
        <BackgroundMotion />
        {/* <VantaBirds /> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header /> 
            {children}
            <Footer />
            <ThemeSwitch />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <script type="module" src="three.min.js"></script>
      </body>
    </html>
  )
}
