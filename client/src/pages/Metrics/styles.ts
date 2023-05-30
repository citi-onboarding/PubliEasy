import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 90%;
  margin: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const UpContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-betwenn;
`;
  
export const DownContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const Image = styled.img`
  width:40%;
`;

export const MetricContainer = styled.img`
   width: 10%
`;

export const MetricData = styled.div`
  width: 10%
  font-family: Raleway;
  display: flex;
  justify-content: center;
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
  font-size: 34px
`;

export const Paragraph = styled.p`
  margin-top: 24px;
  line-height: 32px;
  text-align: center;
  font-color: black;
  width:70%
`;

   