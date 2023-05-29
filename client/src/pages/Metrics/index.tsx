import React from "react";
import { MainContainer, UpContainer, DownContainer, ImageUp, ImageDown } from './styles';
import { Image1, Image2 } from '../../assets';

export const Metrics: React.FC = () => {
    return (
        <MainContainer> 
            <UpContainer>
                <ImageUp src={Image1} alt=""/>

            </UpContainer>
            <DownContainer>
                <ImageDown src={Image2} alt=""/>

            </DownContainer>

        </MainContainer>
    );
};