import { useState, useEffect } from 'react';
import styles from './Fretes.Iveco.module.css';
import { FaCheck } from 'react-icons/fa';
import { SlArrowRight, SlArrowLeft, SlControlPause, SlControlPlay } from "react-icons/sl";
import { GiFlowerPot, GiFrozenBlock, GiDrinkMe, GiCupcake } from "react-icons/gi";
import { FaTruckMedical } from "react-icons/fa6";
import styled from 'styled-components';

const ArrowRight = styled(SlArrowRight)`
  font-size: 30px;
  color: #000000;
`;

const ArrowLeft = styled(SlArrowLeft)`
  font-size: 30px;
  color: #000000;
`;

const ControlPause = styled(SlControlPause)`
  font-size: 30px;
  color: #000000;
`;

const ControlPlay = styled(SlControlPlay)`
  font-size: 30px;
  color: #000000;
`;

const IconStyled = styled(FaCheck)`
  margin-right: 10px;
  color: #000000;
`;

const content = [
  {
    imgSrc: "",
    text: (
      <ul className={styles.ListaFretes}>
        <li className={styles.ListaFretes}>
          <IconStyled />
          <strong>Cargas perecíveis</strong>
        </li>
        <li className={styles.ListaFretes}>
          <FaTruckMedical />
          <strong>Produtos farmacêuticos e suprimentos médicos</strong>
        </li>
        <li className={styles.ListaFretes}>
          <GiFrozenBlock />
          <strong>Alimentos Congelados</strong>
        </li>
        <li className={styles.ListaFretes}>
          <GiFlowerPot />
          <strong>Flores e plantas</strong>
        </li>
        <li className={styles.ListaFretes}>
          <GiDrinkMe />
          <strong>Sucos, refrigerantes, bebidas alcoólicas.</strong>
        </li>
        <li className={styles.ListaFretes}>
          <GiCupcake />
          <strong>Chocolate e Confeitaria</strong>
        </li>
      </ul>
    ),
  },
  {
    imgSrc: "/images/Iveco.jpeg",
    className: styles.imgIveco, 
    text: null,
  },
  {
    imgSrc: "/images/ducato.jpg",
    className: styles.imgDucato, 
    text: null,
  },
];

const Explicacao = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const prevContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  return (
    <div className={styles.container}> <div className={styles.navigationButtons}>
    <button onClick={prevContent}><ArrowLeft /></button>
    <button className={styles.pauseButton} onClick={() => setIsPaused(!isPaused)}>
      {isPaused ? <ControlPlay /> : <ControlPause />}
    </button>
    <button onClick={nextContent}><ArrowRight /></button>
  </div>
  {content[currentIndex].imgSrc ? (
    <img className={styles.img} src={content[currentIndex].imgSrc} alt="Freight Content" />
  ) : (
    <div className={styles.textOverlay}>
      {content[currentIndex].text}
    </div>
  )}

</div>
);
};

export default Explicacao;
