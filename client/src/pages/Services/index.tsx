import React from "react";
import { ServicesContainer, ServicesH1, ServicesP, ServicesImg, HorizontalLine, ItemImg, Title, Products } from './styles';
import { Product, Product2 } from '../../assets';


export const Service: React.FC = () => {
    return (
        <ServicesContainer>
            <Title>
                <ServicesH1>Nosso Serviço</ServicesH1>
                <HorizontalLine></HorizontalLine>    
            </Title>
            <Products>
                <ServicesImg>
                    <ItemImg src={Product} alt="" />
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    <ServicesP><strong><a href="#"style={{ color: 'black', textDecoration: 'none' }}>Lorem ipsum</a></strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product2} alt="" />
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    <ServicesP><strong><a href="#"style={{ color: 'black', textDecoration: 'none' }}>Lorem ipsum</a></strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product} alt="" />
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    <ServicesP><strong><a href="#"style={{ color: 'black',textDecoration: 'none' }}>Lorem ipsum</a></strong></ServicesP>
                </ServicesImg>
                <ServicesImg>
                    <ItemImg src={Product2} alt="" />
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
                    <ServicesP><strong><a href="#"style={{ color: 'black', textDecoration: 'none' }}>Lorem ipsum</a></strong></ServicesP>
                </ServicesImg>
            </Products>
        </ServicesContainer>
    );
}