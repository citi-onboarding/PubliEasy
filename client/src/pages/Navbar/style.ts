import styled from "styled-components";

export const Header = styled.nav` 
    background-color: #BF9DE3;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    flex-wrap: wrap;
    height: 120px; 
    box-shadow:10px 10px 10px rgba(0,0,0,0.15);
        
    img{
        padding: 50px;
    }

    ul{
        display: flex; 
        flex-wrap: wrap; 
        list-style: none;
        align-items: center;
        margin: 0 10px;
    }

    li{
        margin: 20px;
    }

    a{
        color: black;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        padding: 8px 15px; 
    }

    a:hover, a.active{
        background-color: #9563CC;
        border-radius: 5px;
        
    }
`
// a:hover, a.active{
//     /* border-width: 3px solid; */
//     /* border-radius: 5px ;  */
//     /* nao ta pegando a cor sos */
//     /* border: 50px linear-gradient(to right, #ff8c00, #ff4c4c);
//     /* rgb(#9E46BB, #5B37DE, #7E3BC7); */
//     /* background-color: #9563CC; */
//     /* border-radius: 50px; */
//     border-color: #ff0000;
    
// }
