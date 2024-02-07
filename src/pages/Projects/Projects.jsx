import styles from "./Projects.module.css";

import { useState } from "react";

import { motion as m } from "framer-motion";
import ProjectsCards from "../../components/ProjectsCards/ProjectsCards";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os projetos.</p>;
  }

  return (
    <m.div
      className={styles.projects_container}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      }}
    >
      <ProjectsCards />
    </m.div>
  );
};

export default Projects;
