import styled from "styled-components";
import Historia from '../historia/Historia';

const Svgs = styled.img`
  padding-top:20px ;
  padding-bottom: 20px;
  width: 100px;
  height: 100px;
`;

const Aboutdiv = styled.div`
  margin-top: 20px;
  padding-top:40px;
  margin-bottom: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const About = () => (
  <>
    <Aboutdiv>
      <Svgs img src="/images/brazilMap.svg" alt="ok" />
      <p>FAZEMOS FRETE PARA TODO O PAÍS COM PREFERÊNCIA NO VALE DO PARAÍBA!</p>

      <Svgs src="/images/priceDelivery.svg" alt="ok" />
      <p>NEGOCIAMOS O PREÇO DO FRETE DIRETAMENTE COM O CLIENTE!</p>

      <Svgs src="/images/trustDelivery.svg" alt="ok" />
      <p>SEU FRETE FÁCIL E CONFIÁVEL.</p>

      <Svgs src="/images/uniformizedMan.svg" alt="ok" />  
      <p>PROFISSIONAIS UNIFORMIZADOS, COM TODAS OBRIGAÇÕES LEGAIS EM DIA E TOXICOLÓGICO PERIÓDICO.</p>
    </Aboutdiv> 
    <Historia />
  </>
);

export default About;
