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
    flex-wrap: wrap;
    height: 120px; 
    box-shadow:10px 10px 10px rgba(0,0,0,0.15);
        
    img{
        padding: 40px;
        margin-left: 50px;
    }

    ul{
        display: flex; 
        flex-wrap: wrap; 
        list-style: none;
        align-items: center;
        margin: 0 10px;
        margin-right: 10%;
    }

    li{
        margin: 35px;
    }
    
    .module-wrap {
        width: 140px;
        height: 40px;
        background: linear-gradient(to right, #7E3BC7, #D436CB);
        border: 2px solid #BF9DE3;
        border-radius: 5px;
        padding: 2px;
        margin-left: 35px;
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
        padding: 8px 45px;
        line-height: 23.48px 
    }
`;

