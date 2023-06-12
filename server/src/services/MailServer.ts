import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
// acesso as variaveis do arquivo .env

type EmailConfig = {
    destinationUser: string;
    // pessoa que vou enviar
    subjectText: string;
    htmlOption: string;
    // corpo do email
};

// função assincrona porque tem que esperar o MailServer pra enviar para o email certo
const MailServer = async ({destinationUser,
    subjectText,
    htmlOption} : EmailConfig) => {

        // configurar o email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            // VER SE PRECISA MUDAR!!!!!!!!!!!!!!!!
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        // transporte do emai
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: destinationUser,
            subject: subjectText,
            html: htmlOption
        })

    }

    export {
        MailServer,
    }