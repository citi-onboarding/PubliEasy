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
    display: felx;
    justify-content: flex-end;
`;

export const Texto = styled.h1`
    padding-right: 50px;
    text-align: right;
    top: 350px;
    transform: translate(-10%, -20%);
    font-style: bold;
    font-size: 64px;
    line-height: 75px;
    line-height: 100%;
    vertical-align: top;
    color: red;
`;

export const Texto2 = styled.h1`
    padding-right: 50px;
    text-align: right;
    top: 430px;
    transform: translate(-10%, -50%);
    font-style: bold;
    font-size: 64px;
    line-height: 75px;
    line-height: 100%;
    vertical-align: top;
    flex-direction: row;
    color: white;
 `;

export const Textcaixa = styled.div`
    position: static;
    width: 100%;
    padding: 20px;
    margin: 20px;
    // padding-top: 60px; 
`;

export const Paragrafo = styled.p`
    // font-family: Raleway;
    width: 90%;
    font-weight: 600;
    line-height: 30px;
    font-size: 25px;
    text-align: center;
    letter-spacing: 0em;
    position: static;
    margin-top: 40px;
    margin-left: 150px;
    // margin-right: 150px;

`;
// export const Cordiferente = styled.h2`
//     color: #7E3BC7; 
//     `;