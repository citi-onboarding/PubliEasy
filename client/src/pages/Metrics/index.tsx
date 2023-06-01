import React from "react";
import { MainContainer, UpContainer, DownContainer, Image, Paragraph, MetricData, Circle, Description } from './styles';
import { Image1, Image2 } from '../../assets';

export const Metrics: React.FC = () => {
    return (
        <MainContainer> 
            <UpContainer>
                <Image src={Image1} alt=""/>
                <Description>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                </Description>
            </UpContainer>
            <DownContainer>
                <Image src={Image2} alt=""/>
                <Description>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                    <MetricData>
                        <Circle><p>Número</p></Circle>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
                    </MetricData>
                </Description>
            </DownContainer>

        </MainContainer>
    );
};