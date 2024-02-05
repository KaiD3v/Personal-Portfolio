// Footer.jsx

import styles from "./Footer.module.css";
import { motion as m } from "framer-motion";

const Footer = () => {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.footer_container}
    >
      <div className={styles.title_container}>
        <h3>KaiD3v &copy; 2024</h3>
      </div>
      <ul className={styles.contact_list}>
        <span>Contatos:</span>
        <li>
          Email:{" "}
          <a href="mailto:kaikricardo99@gmail.com">kaikricardo99@gmail.com</a>
        </li>
        <li>Telefone: <span style={{color: '#666'}}>(11) 91434-6563</span></li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/kaique-ricardo-de-melo-98969b256/">
            Kaique R. Melo
          </a>
        </li>
      </ul>
    </m.footer>
  );
};

export default Footer;
