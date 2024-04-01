"use server";

// import { send } from "process";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    // console.log("Running on server");
    // console.log(formData.get("senderEmail"));
    // console.log(formData.get("message"));

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // if (!message || typeof message !== "string") {
    //     return {
    //         error: "Invalid message",
    //     };
    // }

    // if (!senderEmail || typeof senderEmail!== "string") {
    //     return {
    //         error: "Invalid email",
    //     };
    // }

    // simple server side validation 
    if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
        return {
            error: "Invalid message or email",
        };
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'chadjowens@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string, 
            }),
            // react: <ContactFormEmail message={message} senderEmail={senderEmail} /> 
        });
    }   catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data,
    };
};