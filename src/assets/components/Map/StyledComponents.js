// src/assets/components/StyledComponents.js
import styled from 'styled-components';

export const MapContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;


  @media (max-width: 768px) {  
  gap:20px;
  display: flex;
  flex-direction: column-reverse;

}
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  box-shadow: 0px 0px 20px 0.5px black;

  @media (min-width: 768px) 
  {
    width: 600px;
    height: 450px;
  }
  
`;
