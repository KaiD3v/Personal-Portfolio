import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 para direita, -1 para esquerda
  const images = [
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/css.svg",
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/js.png",
    "https://riadhadrani.github.io/slick-portfolio-svelte/logos/react.svg",
    "https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png",
    "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setDirection(1);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setDirection(-1);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.carousel_btn} onClick={prevImage}>
        &lt;
      </button>
      <div className={styles.carousel}>
        <AnimatePresence>
          <m.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Imagem ${currentIndex + 1}`}
            initial={{
              opacity: 0,
              x: direction === 1 ? "-100%" : "100%",
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              width: "100%",
              height: "85%",
              margin: "10px",
            }}
          />
        </AnimatePresence>
      </div>
      <button className={styles.carousel_btn} onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
