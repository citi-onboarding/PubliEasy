import styled from 'styled-components'; 


export const ServicesContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: block;
    flex-direction: row;

    
`;

export const HorizontalLine = styled.div`
    width: 40%;
    height: 3px;
    background: #000;
`
    
export const ServicesH1 = styled.h1`  
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: left;

    @media (max-width: 720px) {
        font-size: 28px;
    }

`;

export const ServicesP = styled.p`
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
    text-align: left;

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
`;

export const ServicesImg = styled.img`
    img {
        width: 25%;
        display: inline-block;
        justify-content: space-around;
    }
`;
