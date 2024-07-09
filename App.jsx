import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import GoogleMap from './assets/components/Map/GoogleMap';
import HomePage from './assets/components/home/HomePage';
import About from './assets/components/sobre/About';
import Services from './assets/components/services/Services';
import Footer from './assets/components/footer/Footer';

const StyledImage = styled.img`
  width: 150px;  
  height: auto;  
  border-radius: 8px;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  margin: 20px;  
  transition: transform 0.2s;  

  &:hover {
    transform: scale(1.1);  
  }
`;

const Navigation = styled.nav`

  display:flex;
  justify-content: space-evenly;
  margin: 0; 
  align-items: flex-end;  
  flex-direction: row;
  height: 240px;
  width: 100%;
  background-color: #71a1ce;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.5);  

  @media (max-width: 768px) {
    width:100%;
    height:max-content;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    padding: 5px; 
  }

  li {    
    padding: 20px;   
    @media (max-width: 768px) {
    padding: 2px;
    height: fit-content; 
  }
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 30px;  
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    @media (max-width: 768px) {
    padding: 0;
   font-size: 30px;
  }

   

    &:hover {
      background-color: #ccc;
    }

  }
`;

const App = () => (
  <Router>
      <div className="app"> <globalStyles/>
        <nav>
    
          <Navigation>  
            <StyledImage src='images/logoVerdadeiro.jpg' alt="Três Irmãos Logo" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Serviços</Link></li>
            <li><Link to="/about">Sobre a empresa</Link></li>
            <li><Link to="/map">Localização</Link></li> {/* Add a link to the map */}
          </Navigation>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/map" element={<GoogleMap />} /> {/* Add a route for the map */}
        </Routes>
      </div>
      <Footer/>
    </Router> 
  );

export default App;