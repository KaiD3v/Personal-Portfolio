import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/css.svg",
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/js.png",
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/react.svg",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.home_about_me}>
        <h1>Kaique Melo</h1>
        <p>
          Claro, aqui está um texto totalmente aleatório sobre o tema da
          exploração espacial: No ano de 2150, a humanidade se encontra em um
          novo capítulo de sua jornada cósmica. Naves espaciais avançadas,
          impulsionadas por tecnologias revolucionárias de propulsão quântica,
          cortam o vasto vácuo interplanetário em busca de descobertas além da
          nossa compreensão atual. As fronteiras do cosmos se desdobram diante
          dos olhos curiosos dos astronautas do século XXII.
        </p>
      </div>
      <div className={styles.tecnologias}>
        <div className={styles.carousel}>
          <button onClick={prevImage}>&lt;</button>
          <img
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            style={{ width: "10rem", height: "10rem" }}
          />
          <button onClick={nextImage}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
