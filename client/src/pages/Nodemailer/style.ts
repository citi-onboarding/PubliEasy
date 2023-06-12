import styled from "styled-components";
import { Form } from "@unform/web";
import { VTextField } from "./forms";


export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    `;

    export const VTextFieldCustom = styled(VTextField)({
    '& .MuiInputBase-input': {
        backgroundColor: 'white',
        borderRadius: '5px',
        fontFamily: 'Raleway', 
      },
      '& .MuiInputBase-root': {
        backgroundColor: 'white',
        borderRadius: '5px',
      },
})

export const StyledForm = styled(Form)`
    background-color: ${(props) => props.theme.colors.publieasyPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
    z-index: 10;

    .module-wrap {
        margin-top: 10px;
        margin-left: auto;
        width: 140px;
        height: 42px;
        background: linear-gradient(to right, #BF9DE3, #D436CB);
        border: 2px solid;
        border-radius: 5px;
        padding: 2px;
      }
      
      .module {
        background: #14002A;
        padding: 1px;
        height: 34px;
        display: flex;
        justify-content: center;
        padding-top: 5px;
      }
    
      .default-button {
        font: bold 20px 'Raleway', sans-serif;
        display: flex;
        justify-content: center;
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        outline: none;
        text-decoration: none;
        color: white;
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h1`
width: 100%;
padding-right: 20%;
color: ${(props) => props.theme.colors.background};
text-align: flex-start;
font-size: 2rem;
margin-bottom: 2rem;

`;

export const VTextFieldContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`;

export const TextFieldContainer = styled.div`
display: flex;
flex-direction: column;
width: 40%;
justify-content: space-around;

`;

export const InfoParagraph = styled.p`
font: 400 45px 'Raleway', sans-serif;
`;

export const InfoHighlighted = styled.p`
font: 600 64px 'Raleway', sans-serif;
`;