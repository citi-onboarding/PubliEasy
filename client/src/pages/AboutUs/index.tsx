import React from "react"
import { Sobrenos, Background, TextUp, TextBottom, TextAboutUs,  TextBackground, DifferentColor, ImageButtom, DifferentColor2} from "./style";
import { back, botaobranco } from "../../assets";

export const AboutUs: React.FC = () => {
    return (
        <Sobrenos id="AboutUs">
            <Background style={{ backgroundImage: `url(${back})` }}>
                    <TextBackground>
                        <TextUp>Headline Headline</TextUp>
                        <TextBottom>Headline <DifferentColor2>Headline</DifferentColor2></TextBottom>
                        <ImageButtom src={botaobranco}/>
                    </TextBackground>
            </Background>
            <TextAboutUs>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus non porta eleifend. Duis rutrum faucibus condimentum. Fusce eget porttitor augue. 
            <DifferentColor> Aliquam ut semper arcu, sed ultricies.</DifferentColor></TextAboutUs>
        </Sobrenos>
    );
}