import React from "react"
import { Header, Logo, List } from "./style";
import { LogoPubliEasy } from '../../assets';

export const Navbar: React.FC = () => {
    return (
            <Header>
                <Logo src={LogoPubliEasy} />
                <List>
                    <li> 
                        <a href="/#AboutUs">Home</a> 
                    </li>
                    <li>
                         <a href="/#Services">Nosso Serviço</a>
                    </li>
                    <li>
                        <a href="/#Metrics">Estatística</a>
                    </li>
                    <div className="module-wrap"><div className="module">
                        <li>
                            <a href="/#NodeMailer">Contato</a>
                        </li>
                    </div></div>
                </List>
            </Header>
    );
}