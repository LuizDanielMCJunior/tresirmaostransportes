import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.rodape}>
      <p>T.I TRANSPORTES®</p>
      <p>CNPJ:XXXXXXXXXXX</p>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/images/whats.jpg" alt="linkParaWhatsApp" className={styles.whatsImg} />
      </a>
    </footer>
  );
}

export default Footer;
