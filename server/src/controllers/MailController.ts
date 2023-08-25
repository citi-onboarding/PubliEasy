import { MailServer } from "../services/MailServer"
import dotenv from 'dotenv';
import {Request, Response} from 'express';

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
    try {
        // ver se precisa mudar depois !!!!!!!!!!!!!!!!!!!!!!
        const {name, number, email, message} = request.body;

        await MailServer({
            destinationUser: process.env.EMAIL_WILL_RECEIVE,
            subjectText: 'Alguém entrou em contato com a PubliEasy!', 
            htmlOption: `<p>
                Um usuário entrou em contato!! Esse usário tem o nome ${name}, com telefone ${number} e apresenta o email ${email}. Esse usuário deixou a mensagem: ${message}.
            </p>`
        })

        return response.status(200).send({
            answer: 'Enviado.'
        })

    } catch(error){
        return response.status(500).send({
            answer: 'Desculpe. Houve algum tipo de problema.'
        })
    }
}

export {
    SendMail
}
