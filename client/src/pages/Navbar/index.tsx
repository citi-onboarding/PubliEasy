import React from "react"
import { Header } from "./style";
import { LogoPublieasy } from '../../assets';

export const Navbar: React.FC = () => {
    return (
        <Header>
            <img src={LogoPublieasy} />
            <ul>
                <li> <a href="">Home</a> </li>
                <li> <a href="">Nosso Produto</a></li>
                <li><a href="">Estatística</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </Header>
    );
}