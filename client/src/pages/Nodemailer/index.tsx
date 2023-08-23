import * as React from "react";
import { 
    StyledForm, 
    Title, 
    VTextFieldContainer, 
    VTextFieldCustom, 
    Container, 
    TextFieldContainer, 
    InfoParagraph, 
    InfoHighlighted,
} from "./style";
import { FormHandles } from "@unform/core";
import { MenuItem } from "@mui/material";
import axios from "axios";

const typeValues = [
    {
        value: 'client',
        label: 'Empresa',
    },
    {
        value: 'driver',
        label: 'Motorista',
    },
]

export const Nodemailer: React.FC = () => {

    const formRef = React.useRef<FormHandles>(null);

    const handleSubmit = async (data: any) => {
        console.log(data);

        try {
            const response = await axios.post('http://localhost:3001/email', data);
            console.log(response);
        } catch (error) {
            console.log('error occurred while making post request', error);
        }

        if(formRef.current) {
            formRef.current.reset();
        }
    }

    return (

    <Container id="NodeMailer">

        <StyledForm ref={formRef} onSubmit={handleSubmit} initialData={{ type: "" }} >

            <Title>
                Entre em contato conosco, conheça a PubliEasy!
            </Title>

            <VTextFieldCustom
            style={{ width: '100%' }} 
            select
            name="type"
            placeholder="Tipo"
            margin="normal"
            color="secondary"
            required
            defaultValue="client"
            >
                {typeValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </VTextFieldCustom>

            <VTextFieldCustom
            style={{ width: '100%' }}
            name="name" 
            variant="outlined"
            margin="normal"
            color="secondary"
            placeholder="Nome"
            required
            />

            <VTextFieldContainer>
                <VTextFieldCustom
                style={{ width: '40%' }} 
                name="number" 
                placeholder="Telefone" 
                variant="outlined"
                margin="normal"
                color="secondary"
                required
                />

                <VTextFieldCustom 
                style={{ width: '55%' }}
                name="email"
                type="email" 
                placeholder="E-mail" 
                variant="outlined"
                margin="normal"
                color="secondary"
                required
                />
            </VTextFieldContainer>

            <VTextFieldCustom
            style={{ width: '100%' }}
            name="message"
            placeholder="Mensagem"
            multiline
            rows={4}
            margin="normal"
            color="secondary"
            required
            />

            <div className="module-wrap">
                <div className="module">
                    <button className="default-button"
                    type="submit"
                    > 
                    Enviar
                    </button>
                </div>
            </div>

        </StyledForm>

        <TextFieldContainer>
            <InfoParagraph>
            Contato Empresa: Entre em contato conosco hoje
            mesmo e descubra como podemos ajudar sua empresa
            a alcançar visibilidade e sucesso através dos nossos
            outdoors móveis.
            </InfoParagraph>
            <InfoHighlighted>
            Contato Motorista: Faça a solicitação e se torne um
            motorista parceiro.
            </InfoHighlighted>
        </TextFieldContainer>
    </Container>

    );
}

export default Nodemailer;