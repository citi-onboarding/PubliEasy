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
    height: 1000px;
`;

export const Texto = styled.h1`
    margin: 0;
    position: absolute;
    padding-right: 10cm;
    text-align: left;
    top: 47%;
    left: 80%;
    transform: translate(-50%, -50%);
    font-style: bold;
    font-size: 64px;
    line-height: 75px;
    line-height: 100%;
    vertical-align: top;
    color: white;

`;

export const Texto2 = styled.h1`
    margin: 0;
    position: absolute;
    padding-right: 10cm;
    text-align: left;
    top: 47%;
    left: 99%;
    transform: translate(-50%, -50%);
    font-style: bold;
    font-size: 64px;
    line-height: 75px;
    line-height: 100%;
    vertical-align: top;
    flex-direction: row;
    color: white;
// `;

export const Paragrafo = styled.p`
    // font-family: Raleway;
    width: 100%;
    font-style: Mixed;
    font-weight: 600;
    line-height: 48px;
    font-size: 32px;
    text-align: center;
    vertical-align: Top;
    letter-spacing: 0em;

`;
// export const Cordiferente = styled.h2`
//     color: #7E3BC7; 
//     `;