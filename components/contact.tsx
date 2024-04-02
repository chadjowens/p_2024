"use client";

import React from 'react'
import SectionHeading from './section-heading'
// import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
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
                <p className="text-gray-700 -mt-6 dark:text-white/80"> Please contact me me at <a className="underline" href="mailto:chadjowens@gmail.com"> chadjowens@gmail.com </a>{" "} or through this form. </p>
                
                <form 
                    className="mt-10 flex flex-col dark:text-black/80 dark:background-color-gray-950 bg-opacity-20 dark:focus:bg-opacity-50"
                    onSubmit={async (event) => {
                        // Prevent the form from being submitted
                        event.preventDefault();

                        // Get the form data
                        const formData = new FormData(event.target as HTMLFormElement);

                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success("Email sent successfully!");
                    }}
                >
                {/* <form 
                    className="mt-10 flex flex-col dark:text-black/80"
                    action={async (formData) => {
                        const { data, error } = await sendEmail(formData);

                        if (error) {
                            toast.error(error);
                            return;
                        }

                        toast.success("Email sent successfully!");
                    }}
                > */}
                    <input 
                    className="h-14 px-4 rounded-lg borderBlack focus:outline-none focus:border-gray-950 focus:border-2  transition-all" 
                    name="senderEmail"
                    placeholder="Your email" 
                    type="email" 
                    required
                    maxLength={500}
                />
                    <textarea 
                    className="h-52 my-3 p-4 rounded-lg borderBlack focus:outline-none focus:border-gray-950 focus:border-2 transition-all" 
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                /> 
                <SubmitBtn />
                </form>
        </motion.section>
    )
}
 