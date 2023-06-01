import React from "react";
import { Sobrenos, Foto, Texto, Texto2, Paragrafo,  Textcaixa, Cordiferente, Imagem, Cordiferente2} from "./style";
import { back, botaobranco } from "../../assets";

export const AboutUs: React.FC = () => {
    return (
        <Sobrenos>
            <Foto style={{ backgroundImage: `url(${back})` }}>
                    <Textcaixa>
                        <Texto>Headline Headline</Texto>
                        <Texto2>Headline <Cordiferente2>Headline</Cordiferente2></Texto2>
                        <Imagem src={botaobranco}/>
                    </Textcaixa>
            </Foto>
            <Paragrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar metus non porta eleifend. Duis rutrum faucibus condimentum. Fusce eget porttitor augue. 
            <Cordiferente> Aliquam ut semper arcu, sed ultricies.</Cordiferente></Paragrafo>
        </Sobrenos>
    );
}