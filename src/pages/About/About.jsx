import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1>About Me</h1>
      </div>
      <div className={styles.content_container}>
        <h3>Olá Mundo!</h3>
        <p>
          ...
        </p>
      </div>
    </div>
  );
};

export default About;
