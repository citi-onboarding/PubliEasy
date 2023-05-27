import React from "react"
import { Header } from "./style";
import { LogoPubliEasy } from '../../assets';

export const Navbar: React.FC = () => {
    return (
            <Header>
                <img src={LogoPubliEasy} />
                <ul>
                    <li> 
                        <a href="">Home</a> 
                    </li>
                    <li>
                         <a href="">Nosso Produto</a>
                    </li>
                    <li>
                        <a href="">Estatística</a>
                    </li>
                    <div className="module-wrap"><div className="module">
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </div></div>
                </ul>
            </Header>
    );
}