"use client";

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const BackgroundMotion = () => {
    const scrollY  = useMotionValue(0);

    useEffect(() => {
        const handleScroll = () => {
            scrollY.set(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);
    
    const y1 = useTransform(scrollY, [0, typeof window !== 'undefined' ? document.body.scrollHeight : 0], ['0%', '100%']);
    const y2 = useTransform(scrollY, [0, typeof window !== 'undefined' ? document.body.scrollHeight : 0], ['-100%', '100%']);

  return (
    <>
        <motion.div className="bg-[#efd5d6] fixed top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"
        style={{ y: y1 }}
        ></motion.div>

        <motion.div className="bg-[#d2cef2] fixed top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        style={{ y: y2 }}
        ></motion.div>
    </>
  );
};

export default BackgroundMotion;