import styles from './Historia.module.css';

const Historia = () => {
  return (
    <div className={styles.historiaContainer}>
      <img src='/images/foundation.svg' alt="Iveco truck" className={styles.image} />
      
      <p className={styles.fundacao}>A empresa que foi fundada em junho de 2022 por três irmãos (que leva o nome da empresa), conta  
        com ampla experiência nas áreas de logística, fretes e cargas, tem como principal 
        objetivo suprir as demandas corrigir e os comuns erros praticados no meio em geral.</p>

        <p className={styles.fundacao}>O que teve início com apenas um caminhão,
           hoje já conta também com uma van 
           e já planejando os próximos passos de expansão, que só foi possível graças
           a confiança conquistada em tão pouco tempo no mercado.</p>
    </div>
  );
};

export default Historia;
