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
    }

    ul{
        display: flex; 
        flex-wrap: wrap; 
        list-style: none;
        align-items: center;
        margin: 0 10px;
        margin-right: 50px;
    }

    li{
        margin: 25px;
    }
    
    .module-wrap {
        width: 100px;
        height: 40px;
        background: linear-gradient(to right, #7E3BC7, #D436CB);
        border: 1px solid #BF9DE3;
        border-radius: 5px;
        padding: 2px;
      }
      
      .module {
        background: #14002A;
        padding: 1px;
        height: 31px;
        display: flex;
        justify-content: center;
        padding-top: 8px;
      }

      .module li {
        height: 100%;
        margin: 0;
      }

    a{
        color: white;
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        padding: 8px 45px;
        line-height: 23.48px 
    }

    // a:hover, a.active{
    //     background-color: #9563CC;
    //     border-radius: 5px;
        
    // }
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