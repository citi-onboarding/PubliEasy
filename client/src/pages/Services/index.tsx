import React from "react";
import { ServicesContainer, ServicesH1, ServicesP, ServicesImg, HorizontalLine } from './styles';
import { Product, Product2 } from '../../assets';


export const Service: React.FC = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Nosso Produto</ServicesH1>
            <HorizontalLine></HorizontalLine>
            <ServicesImg src={Product} alt="" />
            <ServicesImg src={Product2} alt="" />
            <ServicesImg src={Product} alt="" />
            <ServicesImg src={Product2} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <ServicesP>
                <strong>Lorem ipsum</strong>
            </ServicesP>
        </ServicesContainer>
    );
    }