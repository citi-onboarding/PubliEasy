import styled from 'styled-components'; 


export const ServicesContainer = styled.div`
    width: 80%;
    font-family: raleway;
    margin: 0 auto;

    display: flex;
    flex-direction: column;    
`;

export const Title = styled.div`
    width: 75%;
    height: 150px;
    margin-top: 70px;
`;

export const ServicesH1 = styled.h1`  
    font-size: 46px;
    font-weight: 300;
    line-height: 54px;
    color: ${(props) => props.theme.colors.primary};
    text-align: left;
    letter-spacing: 0em;
`;
    
export const HorizontalLine = styled.div`
    width: 450px;
    height: 2px;
    background: linear-gradient(to right, #7E3BC7, #D436CB);
`;

export const Products = styled.div`
    margin: 100px;
    width: 90%;
    height: 150px;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const ServicesImg = styled.div`
    width: 75%;
    height:150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`;

export const ItemImg = styled.img`
    width: 80%;
    height: 150px;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius:8%;
`;

export const ServicesP = styled.p`
    margin-top: 24px;
    line-height: 32px;
    text-align: center;
    font-color: black;
    width:70%
`;

