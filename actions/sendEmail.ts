"use server";

import { Resend } from "resend";
import { vaildateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email");
    const message = formData.get("message");

    if(!vaildateString(senderEmail,500)){
return {
    error:"Invailid sender email"
}
    }
    if(!vaildateString(message,5000)){
        return {
            error:"Invailid message"
        }

    }


    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to:'maikoyorino.07@gmail.com',
            subject:'Message from contact form',
            reply_to: senderEmail as string,
            text: message as string,
        })

    }catch(error) {
        console.log(error)
    }
    
 
};