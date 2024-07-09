import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.styledHome}>
    <div className={styles.tituloOrcamento}>SOLICITE ORÇAMENTO SEM COMPROMISSO</div>
    <div className={styles.textoPrincipal}>
      <a className={styles.mail} href="mailto:daniel2001futebol@gmail.com?subject=OR%C3%87AMENTO%20F%C3%81CIL">
        <IoIosMail className={styles.icon} />
      </a>
      <a className={styles.whatsApp} href="https://instagram.com">
        <IoLogoWhatsapp className={styles.icon} />
      </a>
    </div>
  </div>
);

export default HomePage;
