"use client";

import React from 'react'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useInView } from "react-intersection-observer";
import { useTheme } from '@/context/theme-context';
// import { inView } from 'framer-motion';
// import { inView } from 'framer-motion';

// export default function Experience() {
//     const { ref, inView } = useInView({ 
//         triggerOnce: true,
//     });

type ExperienceElementProps = {
    theme: string
    item: {
        date: string
        icon: React.ReactNode
        title: string
        location: string
        description: string
    }
}

const ExperienceElement = ({ theme, item }: ExperienceElementProps) => {
    const { ref, inView } = useInView({ threshold: 0 })
    return (
        <div ref={ref} className='vertical-timeline-element'>
            <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                    background:
                        theme === 'light'
                            ? '#f3f4f6'
                            : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: 'none',
                    border: 
                        theme === 'light'
                            ? '0.1rem solid #9ca3af'
                            : '0.1rem solid rgba(255, 255, 255, 0.25)',
                    textAlign: 'left',
                    padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                    borderRight:
                        theme === 'light'
                            ? '0.4rem solid #9ca3af'
                            : '0.4rem solid rgba(255, 255, 255, 0.5)',
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                    background:
                        theme === 'light' ? 'white' : 'rgba(29, 36, 50, 0.95)',
                    fontSize: '1.5rem',
                }}
            >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                    {item.description}
                </p>
            </VerticalTimelineElement>
        </div>
    )
}

export default function Experience() {
    const { ref } = useSectionInView('Experience');
    const { theme } = useTheme()
    return (
        <section
            ref={ref}
            id='experience'
            className='scroll-mt-28 mb-28 sm:mb-40'
        >
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <ExperienceElement key={index} theme={theme} item={item} />
                ))}
            </VerticalTimeline>
        </section>
    )
}

//     return (
//         <section 
//         id="experience" 
//         ref={ref} 
//         className="smb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
//         >
//             <SectionHeading>My experience</SectionHeading>
//             <VerticalTimeline lineColor="">
//                 {experiencesData.map((item, index) => {
//                     const { ref, inView } = useInView({ 
//                         triggerOnce: true,
//                     });
//                     let { theme } = useTheme();
//                     return (
//                         <div key={index} ref={ref} className="vertical-timeline-element">
//                             <VerticalTimelineElement
//                                 contentStyle={{
//                                     // background: '#f3f4f6',
//                                     boxShadow: "none",
//                                     // theme = "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                                     theme,
//                                     border: "1px solid rgba(0, 0, 0, 0.05)",
//                                     textAlign: "left",
//                                     padding: "1.3rem 2rem",
//                                 }}

//                                 contentArrowStyle={{
//                                     borderRight: '0.4rem solid #9ca3af',
//                                     // theme === "light"
//                                     //     ? "0.4rem solid #9ca3af"
//                                     //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//                                 }}
//                                 visible={inView}
//                                 date={item.date}
//                                 icon={item.icon}
//                                 iconStyle={{
//                                     background: 'white',
//                                     // theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                                     fontSize: "1.5rem",
//                                 }}
//                                 >
//                                 <h3 className="font-semibold capitalize">{item.title}</h3>
//                                 <p className="font-normal !mt-0">{item.location}</p>
//                                 <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                                     {item.description}
//                                 </p>
//                             </VerticalTimelineElement>
//                         </div>
//                     );
//                 })}
//             </ VerticalTimeline>
//         </section>
//     );
// }


// return (
//     <section ref={ref} id="experience" className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
//         <SectionHeading>My Experience</SectionHeading>
//         <VerticalTimeline lineColor="">
//             {experiencesData.map((item, index) => {
//                 // const { ref, inView } = useInView({
//                 //     // triggerOnce: true,
//                 // });
// 
//                 const { ref, inView } = useInView({ threshold: 0 });
//                 return (
//                     <div key={index} ref={ref} className="vertical-timeline-element">
                
//                         <VerticalTimelineElement 
//                             visible={inView}
//                             // animate={true}
//                             contentStyle={
//                                 theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                                 //   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                                 boxShadow: "none",
//                                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                                 textAlign: "left",
//                                 padding: "1.3rem 2rem",
//                             }}
//                             contentArrowStyle={{
//                                 borderRight: "0.4rem solid #9ca3af",
//                                 //   theme === "light"
//                                 //     ? "0.4rem solid #9ca3af"
//                                 //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//                             }}
//                             date={item.date}
//                             icon={item.icon}
//                             iconStyle={{
//                                 background: "white",
//                                 //   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
//                                 fontSize: "1.5rem",
//                             }}

//                             >
//                                 <h3 className="font-semibold capitalize">{item.title}</h3>
//                                 <p className="font-normal !mt-0">{item.location}</p>
//                                 <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
//                         </VerticalTimelineElement>
                     
//                     </div>
//                     );
//                 })

//             }
//         </VerticalTimeline>
//     </section>
// )