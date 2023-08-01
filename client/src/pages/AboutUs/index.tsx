import React from "react"
import { Sobrenos, Background, TextUp, TextBottom, TextAboutUs,  TextBackground, DifferentColor, ImageButtom, DifferentColor2} from "./style";
import { back, botaobranco } from "../../assets";

export const AboutUs: React.FC = () => {
    return (
        <Sobrenos id="AboutUs">
            <Background style={{ backgroundImage: `url(${back})` }}>
                    <TextBackground>
                        <TextUp>Promovendo de forma Impactante e Inovadora</TextUp>
                        <TextBottom><DifferentColor2> sua marca ou produto</DifferentColor2></TextBottom>
                        <ImageButtom src={botaobranco}/>
                    </TextBackground>
            </Background>
            <TextAboutUs>Somos uma startup com uma visão inovadora da publicidade. Nascemos da necessidade de unir o físico ao digital de maneira assertiva e levar as empresas até seus clientes,
                 gerando
            <DifferentColor> impactos sociais para nossos parceiros.</DifferentColor></TextAboutUs>
        </Sobrenos>
    );
}