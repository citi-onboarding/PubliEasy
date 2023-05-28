import React from "react"
import { Sobrenos, Foto, Texto, Texto2, Paragrafo,  Textcaixa} from "./style";
import { back } from "../../assets";

export const AboutUs: React.FC = () => {
    return (
        <Sobrenos>
            <Foto style={{ backgroundImage: `url(${back})` }}>
                <Textcaixa>
                <Texto>Headline Headline</Texto>
                <Texto2>Headline Headline</Texto2>
                </Textcaixa>
            </Foto>
            <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus non porta eleifend. Duis rutrum faucibus condimentum. Fusce eget porttitor augue. 
            Aliquam ut semper arcu, sed ultricies.</Paragrafo>
        </Sobrenos>
    );
}