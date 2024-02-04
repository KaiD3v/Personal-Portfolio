import styles from "./About.module.css";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className={styles.title_container}>
        <h1>Sobre Mim</h1>
      </div>
      <div className={styles.content_container}>
        <h3>Olá Mundo!</h3>
        <div>
          <h4>Resumo:</h4>
          <p>
            Minha jornada no mundo da programação começou aos 11 anos, quando
            desenvolvia jogos no RPG Maker sem sequer saber que estava
            programando em Ruby (RGSS). No entanto, meu envolvimento foi
            interrompido quando meu computador da época parou de funcionar,
            afastando-me da programação por alguns anos.
          </p>
          <p>
            Em 2022, decidi ingressar em um curso técnico de programação para
            internet (Novotec - FIEC). Foi nesse curso que descobri minha paixão
            pela área de desenvolvimento web. Após concluir o primeiro ano,
            optei por sair do Novotec para trabalhar, investir em um notebook e
            dedicar mais tempo aos estudos autônomos.
          </p>
          <p>
            Atualmente, estou focado em me aprimorar no desenvolvimento web,
            utilizando as stacks de JavaScript, Node.js e React.js.
            Paralelamente, estou cursando Análise e Desenvolvimento de Sistemas
            na Uninter, buscando uma formação acadêmica sólida para complementar
            minha experiência prática.
          </p>
        </div>
      </div>
    </m.div>
  );
};

export default About;
