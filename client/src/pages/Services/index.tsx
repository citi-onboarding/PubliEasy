import React from "react";
import { ServicesContainer, ServicesH1, ServicesP, ServicesImg, HorizontalLine, ItemImg, Title, Images } from './styles';
import { Product, Product2 } from '../../assets';


export const Service: React.FC = () => {
    return (
        <ServicesContainer>
            <Title>
                <ServicesH1>Nosso Serviço</ServicesH1>
                <HorizontalLine></HorizontalLine>    
            </Title>
            <Images>
                <ServicesImg>
                    <ItemImg src={Product} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <ServicesP><strong>Lorem ipsum</strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product2} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <ServicesP><strong>Lorem ipsum</strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <ServicesP><strong>Lorem ipsum</strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product2} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    <ServicesP><strong>Lorem ipsum</strong></ServicesP>
                </ServicesImg>
            </Images>
        </ServicesContainer>
    );
}