import styled from 'styled-components'; 


export const ServicesContainer = styled.div`
    width: 80%;
    font-family: raleway;
    margin: 0 auto;

    display: flex;
    flex-direction: column;    
`;

export const Title = styled.div`
    width: 80%;
    height: 10px;
    margin-top: 70px;
    margin-left: 50px;
    `;
    
    export const ServicesH1 = styled.h1`  
    font-size: 46px;
    font-weight: 500;
    line-height: 70px;

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
    width: 90%;
    margin-top: 100px;
    margin-left: 20px;
    height: 150px;

    display: flex;
    justify-content: space-between;
    align-items:center;
`;

export const ServicesImg = styled.div`
    width: 90%;
    height:50px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ItemImg = styled.img`
    width: ;px
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

