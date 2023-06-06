import styled from 'styled-components'; 
import { back } from '../../assets';


// bakcground como imagem
export const Sobrenos = styled.div`
    backgroundImage: 'url("../assets/back.png")';
    margin: 0;
    padding: 0;
    border: 0;
`;

export const Background = styled.div`
    width: 100%;
    backgroundImage: url(../assets/back.png);
    background-size: cover;
    align-items: center;
    padding: 20px;
    height: 1000px;
    display: flex;
`;

export const TextUp = styled.h1`
    padding-right: 5%;
    text-align: right;
    font-style: normal;
    font-size: 64px;
    font-weight: 700;
    line-height: 100%;
    padding-top: 350px;
    color: white;
`;

export const TextBottom = styled.h1`
    padding-right: 5%;
    text-align: right;
    font-style: normal;
    font-size: 64px;
    font-weight: 700;
    line-height: 100%;
    padding-top: 10px;
    color: white;
 `;

export const TextBackground = styled.div`
    // position: static;
    width: 100%;
    // height: 40%;
    height: 100%;
    // padding: 10px;
    // margin: 20px;
    display: flex;
    flex-direction: column;
`;

export const TextAboutUs = styled.p`
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

export const DifferentColor = styled.span`
    font-weight: 600;
`;

export const DifferentColor2 = styled.span`
    color: #7E3BC7;
`;

export const ImageButtom = styled.img`
    align-self: end;
    justify-content: flex-end;
    padding-top: 21%;
    align-items: center;
    padding-right: 47%;
    `;

