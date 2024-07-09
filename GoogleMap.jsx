/* eslint-disable react/no-unescaped-entities */

import styled from 'styled-components';
import { MapContainer, StyledIframe } from './StyledComponents'; // Adjust the import path if needed
const UseMap = styled.div`
border-radius: 10px;
padding: 10px;
display: flex;
font-size: 35px;
text-align:center;
align-items:center;
width:200px;
height: 300px;
background-color: #86aeeb;
box-shadow: 0px 0px 20px 0.5px black;


;

`
const GoogleMap = () => (
  <MapContainer>
    <StyledIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.113738708228!2d-45.57289348520428!3d-23.031708884947457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc9a88b0cd267%3A0xe8e51b04f9ffb22a!2s12042-200%2C%20Taubat%C3%A9%20-%20SP%2C%20Brazil!5e0!3m2!1sen!2sus!4v1622621234567!5m2!1sen!2sus"
      allowFullScreen=""
      loading="lazy"
      title="Google Maps"
    ></StyledIframe>
    <UseMap><p>use o botão do zoom "+/-" ou 'ctrl' + scrool para se localizar no mapa</p></UseMap>
  </MapContainer>  

);

export default GoogleMap;
