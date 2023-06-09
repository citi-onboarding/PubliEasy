import styled from "styled-components";

export const Header = styled.nav` 
    background-color: #14002A;
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    margin: 0;
    border: 0;
    justify-content: space-between;
    padding: 0;
    height: 120px; 
    box-shadow:10px 10px 10px rgba(0,0,0,0.15);
    z-index: 50;
    `;

export const Logo = styled.img`
        padding: 40px;
        margin-left: 50px;
        `;

export const List = styled.ul`
        display: flex; 
        flex-direction: row;
        list-style: none;
        align-items: center;
        margin: 0 10px;
        margin-right: 10%;
        justify-content: space-between;
        width: 50%;
        max-width: 800px;
    }
    
    .module-wrap {
        width: 140px;
        height: 42px;
        background: linear-gradient(to right, #7E3BC7, #D436CB);
        border: 2px solid;
        border-radius: 5px;
        padding: 2px;
      }
      
      .module {
        background: #14002A;
        padding: 1px;
        height: 34px;
        display: flex;
        justify-content: center;
        padding-top: 6px;
      }

      .module li {
        height: 100%;
        margin: 0;
      }

    a{
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23.48px 
    }
`;

   