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
    // margin: 0;
    position: sticky;
    padding-right: 50px;
    text-align: right;
    top: 350px;
    // left: 100px;
    transform: translate(-10%, -20%);
    font-style: bold;
    font-size: 64px;
    line-height: 75px;
    line-height: 100%;
    vertical-align: top;
    color: red;

`;

export const Texto2 = styled.h1`
    // margin: 0;
    position: sticky;
    padding-right: 50px;
    text-align: right;
    top: 430px;
    // left: 130px;
    transform: translate(-10%, -50%);
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
    // font-style: Mixed;
    font-weight: 600;
    line-height: 48px;
    font-size: 3vw;
    text-align: center;
    letter-spacing: 0em;
    position: static;

`;
// export const Cordiferente = styled.h2`
//     color: #7E3BC7; 
//     `;