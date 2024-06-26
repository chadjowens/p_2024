"use client";

// import React, { useEffect } from 'react';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
// import { useInView } from 'react-intersection-observer';
// import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects');

  // const { ref, inView } = useInView({
  //   threshold: 0.50,
  // });

  // const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if (inView && Date.now() - timeOfLastClick > 1000) {
  //     setActiveSection('Projects');
  //   }
  // }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My Projects</SectionHeading>
        <div className="">
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

// type ProjectProps = {
//     title: string;
//     description: string;
//     tags: string[];
//     imageUrl: string;
// };

// function Project({ title, description, tags, imageUrl }:
// ProjectProps) {
//     const ref = useRef(null);
//     useScroll({
//         target: '';
//         offset: ["0 1", "1.33 1"];
//     });

//     return (
//         <section className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition">
            
//             <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">

//                 <h3 className="text-2xl font-semibold">{title}</h3>
//                 <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
//                 <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
//                     {tags.map((tag, index) => (
//                         <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
//                         key={index}>{tag}</li>
//                     ))}
//                 </ul>

//                 <Image 
//                     src={imageUrl} 
//                     alt="Projects I worked on" 
//                     quality={95} 
//                     className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
//                     transition
//                     group-hover:scale-[1.04]

//                     group-hover:-translate-x-3
//                     group-hover:translate-y-3
//                     group-hover:-rotate-2

//                     group-even:group-hover:translate-x-3
//                     group-even:group-hover:translate-y-3
//                     group-even:group-hover:rotate-2

//                     group-even:right-[initial]
//                     group-even:-left-40"
//                     />
//             </div>
//         </section>
//     );
// }