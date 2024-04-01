"use client";

import React from 'react'
import SectionHeading from './section-heading'
// import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
// import { useFormStatus } from 'react-dom';

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    const { pending } = useFormStatus();

    return (
        <motion.section 
            id="contact" 
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

        >
            <SectionHeading>Contact Me</SectionHeading>
                <p className="text-gray-700 -mt-6"> Please contact me me at <a className="underline" href="mailto:chadjowens@gmail.com"> chadjowens@gmail.com </a>{" "} or through this form. </p>
                <form 
                    className="mt-10 flex flex-col"
                    action={async (formData) => {
                        await sendEmail(formData);
                    }}
                >
                    <input 
                    className="h-14 px-4 rounded-lg borderBlack focus:outline-none focus:border-gray-950 focus:border-2" 
                    name="senderEmail"
                    placeholder="Your email" 
                    type="email" 
                    required
                    maxLength={500}
                />
                    <textarea 
                    className="h-52 my-3 p-4 rounded-lg borderBlack focus:outline-none focus:border-gray-950 focus:border-2" 
                    name="message"
                    placeholder="Your email"
                    required
                    maxLength={5000}
                /> 
                <SubmitBtn />
                </form>
        </motion.section>
    )
}
 