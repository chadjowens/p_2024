"use server";

// import { send } from "process";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

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

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'chadjowens@gmail.com',
            subject: 'New message from portfolio',
            reply_to: senderEmail as string,
            text: message as string,
        });
    }   catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        }
    }
};