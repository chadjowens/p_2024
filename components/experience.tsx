"use client";

import React from 'react'
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
// import { inView } from 'framer-motion';
// import { inView } from 'framer-motion';


// trying this
import { useInView } from "react-intersection-observer";


// export default function Experience() {
//     const { ref, inView } = useInView({ 
//         triggerOnce: true,
//     });

export default function Experience() {
    const { ref } = useSectionInView('Experience');
    // const { theme } = useTheme();
    console.log('Rendering Experience');

    return (
        <section ref={ref} id="experience" className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((item, index) => {
                    const { ref, inView } = useInView({
                        // triggerOnce: true,
                    });
                    return (
                        <div key={index} ref={ref} className="vertical-timeline-element">
                            {/* // <React.Fragment key={index}> */}
                            <VerticalTimelineElement 
                            visible={inView}
                            // animate={true}
                            contentStyle={{
                                background: "#f3f4f6",
                                //   theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af",
                                //   theme === "light"
                                //     ? "0.4rem solid #9ca3af"
                                //     : "0.4rem solid rgba(255, 255, 255, 0.5)",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: "white",
                                //   theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                fontSize: "1.5rem",
                            }}

                            >
                                <h3 className="font-semibold capitalize">{item.title}</h3>
                                <p className="font-normal !mt-0">{item.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                            </VerticalTimelineElement>
                            {/* // </React.Fragment> */}
                        </div>
                        );
                    })}
            </VerticalTimeline>
        </section>
    )
}
