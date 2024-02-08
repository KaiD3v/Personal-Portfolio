import React from "react";
import styles from "./HamburguerMenu.module.css";
import { Link } from "react-router-dom";

const HamburguerMenu = ({isActive}) => {

  return (
    <div
      className={styles.menu_container}
      style={{ display: isActive ? "block" : "none" }}
    >
      <div className={styles.links_container}>
        <Link to="/projects">Projetos</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/about">Sobre</Link>
      </div>
    </div>
  );
};

export default HamburguerMenu;