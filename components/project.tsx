"use client";

import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from'react';
// import { motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

// type ProjectProps = {
//     index: number;
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: string;
// };

export default function Project({ title, description, tags, imageUrl }:
ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    // const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref} 
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section 
            className="
                flex 
                max-w-[58rem] 
                pr-8 pl-8 
                overflow-hidden

                h-[24rem] md:h-[18rem] lg:h-[12rem]
                
            
                bg-gray-200 
                rounded-lg 
                
                hover:bg-gray-300  
                transition
                relative 
                
            
                
                ">
                
                <div className="
                flex
                flex-col
                lg:flex-row
            
                pt-4 pb-7 
                group-even:lg:flex-row-reverse
                ">
                    <div className="flex flex-col mr-10 group-even:pl-8">
                        <h3 className="text-xl font-normal">{title}</h3>
                        <p className="mt-2 text-sm font-extralight text-gray-800 dark:text-white/70">{description}</p>
                        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            {tags.map((tag, index) => (
                                <li className="bg-black/[0.6] px-3 py-1 text-[0.6rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Image 
                            src={imageUrl} 
                            alt="Projects I worked on" 
                            quality={95} 
                            className="
                            
                            w-[40rem] 
                            rounded-t-lg 
                            shadow-2xl 
                            transition
                            group-hover:scale-[1.04]
                            
                            group-hover:-translate-x-1
                            group-hover:translate-y-1
                            group-hover:-rotate-1

                            
                            group-even:group-hover:rotate-1
                            
                            "
                            />
                    </div>
                </div>
            </section>
        </motion.div>
    );
}


{/* <section 
className="
flex
bg-gray-100 
max-w-[42rem] 
border border-black/20 rounded-lg 
overflow-hidden 
sm:pr-8 sm:h-[20rem] 
relative 
hover:bg-gray-200 
transition 
group-even:pl-8 
dark:text-white dark:bg-white/10 dark:hover:bg-white/20">

    <div className="
    flex flex-col 
    h-full 
    pt-4 pb-7 px-5 
    sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] 
    group-even:ml-[18rem]"
    >
        <h3 className="
        text-2xl font-semibold">{title}</h3>
        <p className="
        mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
        <ul className="
        flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
                <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}>{tag}</li>
            ))}
        </ul>
        <Image 
            src={imageUrl} 
            alt="Projects I worked on" 
            quality={95} 
            className="
            absolute 
            top-8 
            -right-40 
            w-[28.25rem] 
            rounded-t-lg 
            shadow-2xl 
            transition
            group-hover:scale-[1.04]

            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial]
            group-even:-left-40"
            />
    </div>
</section> */}


// flex flex-col sm:flex-row 
// items-center 
// pt-4 pb-7 px-5">