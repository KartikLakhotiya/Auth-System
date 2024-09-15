import { response } from "express"
import { PASSWORD_RESET_REQUEST_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./email.templates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "c6e9bcec-084c-4a1b-bfde-ee263dd3e465",
            template_variables: {
                "company_info_name": "Auth System",
                "name": name,
                "company_info_address": "Kandivali",
                "company_info_city": "Mumbai",
                "company_info_zip_code": "400067",
                "company_info_country": "India"
            }
        })
        console.log("Welcome email sent successfully", response)
    } catch (error) {
        console.log(error);
        throw new Error(`Error sending welcome email ${error}`)
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Rest"
        })
        console.log("Password reset Email sent successfully", response);
    } catch (error) {
        console.log(error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}