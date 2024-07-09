import { FaCheck } from 'react-icons/fa';
import Explicacao from '../explicaçãoFretes/FretesIveco';
import styles from './Services.module.css';

const Services = () => (
  <>
    <nav className={styles.styledNav}>
      <div className={styles.styledDiv}>
        <FaCheck /> TRANSPORTES DE CARGA
      </div>
      <div className={styles.styledDiv}>
        <FaCheck /> ENCOMENDAS
      </div>
      <div className={styles.styledDiv}>
        <FaCheck /> NO MESMO DIA
      </div>  
      <Explicacao />
    </nav>
  </>
);

export default Services;
