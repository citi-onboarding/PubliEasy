import styled from 'styled-components'; 
import { back } from '../../assets';


// bakcground como imagem
export const Sobrenos = styled.div`
    backgroundImage: 'url("../assets/back.png")';
    margin: 0;
    padding: 0;
    border: 0;
`;

export const Foto = styled.div`
    width: 100%;
    backgroundImage: url(../assets/back.png);
    background-size: cover;
    background-position: center;
    align-items: center;
    padding: 20px;
    height: 100vw;
    height: 1000px;
    display: flex;
    justify-content: flex-end;
`;

export const Texto = styled.h1`
    padding-right: 2.8%;
    text-align: right;
    transform: translate(-10%, -100%);
    font-style: normal;
    font-size: 64px;
    font-weight: 700;
    line-height: 100%;
    vertical-align: top;
    flex-direction: row;
    color: white;
`;

export const Texto2 = styled.h1`
    padding-right: 2.8%;
    text-align: right;
    transform: translate(-10%, -80%);
    font-style: normal;
    font-size: 64px;
    font-weight: 700;
    line-height: 100%;
    vertical-align: top;
    flex-direction: row;
    color: white;
 `;

export const Textcaixa = styled.div`
    // position: static;
    width: 100%;
    height: 20%;
    padding: 20px;
    margin: 20px;
    display: flex;
`;

export const Paragrafo = styled.p`
    width: 100%;
    font-weight: 200;
    line-height: 150.5%;
    font-size: 32px;
    font-style: normal;
    text-align: center;
    letter-spacing: 0em;
    position: static;
    margin-top: 4%;
    padding-left: 15%;
    padding-right: 15%;
    justify-content: space-between;
`;

export const Cordiferente = styled.span`
    font-weight: 600;
`;

export const Cordiferente2 = styled.span`
    color: #7E3BC7;
`;

export const Imagem = styled.img`
    align-self: center;
    top: 350px;
`;