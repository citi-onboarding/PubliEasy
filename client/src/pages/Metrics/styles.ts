import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 90%;
  margin: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  `;
  
export const Image = styled.img`
  width:49%;
  margin: 20px;
`;

export const Description = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const UpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
  
export const DownContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const MetricData = styled.div`
  width: 10%
  font-family: raleway;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Circle = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background-color: #7E3BC7;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    padding-left: 70%;
    font-weight: bold;
    font-size: 64px;
  }
`;

export const Paragraph = styled.p`
  margin-left: 24px;
  line-height: 32px;
  text-align: center;
  font-color: black;
  width:60%;
  font-size: 24px;
`;

  