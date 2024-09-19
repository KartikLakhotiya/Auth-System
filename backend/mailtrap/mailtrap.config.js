import dotenv from 'dotenv';
import path from 'path';
import { MailtrapClient } from 'mailtrap';

dotenv.config({ path: path.resolve('../.env') });

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

if (!TOKEN || !ENDPOINT) {
    console.error('MAILTRAP_TOKEN or MAILTRAP_ENDPOINT is not defined in .env');
}

export const mailtrapClient = new MailtrapClient({
    endpoint: ENDPOINT,
    token: TOKEN,
});

export const sender = {
    email: "mailtrap@svtrst.me",
    name: "Auth System",
};
