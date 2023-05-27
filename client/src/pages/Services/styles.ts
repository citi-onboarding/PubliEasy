import styled from 'styled-components'; 


export const ServicesContainer = styled.div`
    width: 1440px;
    height: auto;

    display: flex;
    flex-direction: column;    

`;

export const Title = styled.div`

`;

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 200px;
    left: 215xp;

`;
export const ServicesImg = styled.div`
    width: 25%;

    display: flex;
    flex-direction: column;
`;
export const ItemImg = styled.img`

`;


export const HorizontalLine = styled.div`
    width: 450px;
    height: 2px;
    background: linear-gradient(to right, #7E3BC7, #D436CB);
    position: absolute;
    left: 192px;
    top: 130px;
    `;
    
export const ServicesH1 = styled.h1`  
    font-size: 46px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: left;
    font-family: Raleway;
    font-weight: 500;
    line-height: 54px;
    letter-spacing: 0em;
    position: absolute;
    width: 307px;
    height: 54px;
    left: 192px;
    top: 37px;
`;

export const ServicesP = styled.p`
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
    text-align: left;
    left: 215px;
`;

