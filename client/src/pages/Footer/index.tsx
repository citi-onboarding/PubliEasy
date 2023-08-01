import React from "react";
import { Footertag, Imagem, Footerdiv, Logo, Paragrafo, Text, Paragrafo2, Imagens, ImageLink, Creditos } from "./style";
import { instagram, facebook, linkedin, ondasfooter, LogoPubliEasy, creditos } from '../../assets';

export const Footer: React.FC = () => {
    return (
        <Footertag>
            <Imagem src={ondasfooter}/>
              <Footerdiv>
                    <Logo src={LogoPubliEasy}/>
                    <Paragrafo>Copyright 2023 | Todos os direitos reservados</Paragrafo>
                    {/* <Text>
                        <Paragrafo2>Lorem ipsum</Paragrafo2>
                        <Paragrafo2>Lorem ipsum</Paragrafo2>
                        <Paragrafo2>Lorem ipsum</Paragrafo2>
                        <Paragrafo2>Lorem ipsum</Paragrafo2>
                    </Text> */}
                    <Imagens>
                        <ImageLink style={{ backgroundImage: `url(${linkedin})` }} href="https://www.linkedin.com/company/publieasybr/" target="_blank" />
                        <ImageLink style={{ backgroundImage: `url(${instagram})` }} href="https://instagram.com/publieasybr?igshid=Y2IzZGU1MTFhOQ==" target="_blank"/>
                        <ImageLink style={{ backgroundImage: `url(${facebook})` }} href="" />
                    </Imagens>
                    <Creditos src={creditos}/>
              </Footerdiv>
        </Footertag>
    );
}
