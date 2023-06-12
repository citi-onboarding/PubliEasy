import * as React from "react";
import { StyledForm, Title, VTextFieldContainer, VTextFieldCustom, Container, TextFieldContainer, InfoParagraph, InfoHighlighted } from "./style";
import { FormHandles } from "@unform/core";
import { MenuItem } from "@mui/material";

const typeValues = [
    {
        value: 'client',
        label: 'Cliente',
    },
    {
        value: 'driver',
        label: 'Motorista',
    },
]

export const Nodemailer: React.FC = () => {

    const formRef = React.useRef<FormHandles>(null);

    const handleSubmit = (data: any) => {
        console.log(data);

        if(formRef.current) {
            formRef.current.reset();
        }
    }

    return (

    <Container>

        <StyledForm ref={formRef} onSubmit={handleSubmit}>

            <Title>
                Entre em contato conosco, conheça a PubliEasy!
            </Title>

            <VTextFieldCustom
            style={{ width: '100%' }} 
            select
            name="type"
            label="Tipo"
            margin="normal"
            color="secondary"
            >
                {typeValues.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </VTextFieldCustom>

            <VTextFieldCustom
            style={{ width: '100%' }}
            name="nome" 
            label="Nome" 
            variant="outlined"
            margin="normal"
            color="secondary"
            />

            <VTextFieldContainer>
                <VTextFieldCustom
                style={{ width: '40%' }} 
                name="phoneNumber" 
                label="Telefone" 
                variant="outlined"
                margin="normal"
                color="secondary"
                />

                <VTextFieldCustom 
                style={{ width: '55%' }}
                name="email"
                type="email" 
                label="E-mail" 
                variant="outlined"
                margin="normal"
                color="secondary"
                />
            </VTextFieldContainer>

            <VTextFieldCustom
            style={{ width: '100%' }}
            name="message"
            label="Mensagem"
            multiline
            rows={4}
            margin="normal"
            color="secondary"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </InfoParagraph>
            <InfoHighlighted>
            Sed pulvinar metus non porta eleifend.
            </InfoHighlighted>
        </TextFieldContainer>
    </Container>

    );
}

export default Nodemailer;