import styles from "./Projects.module.css";
import projectsData from "../../json/Projects.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState();

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
      <div className={styles.cards_align_container}>
        {projectsData.map((project) => (
          <div className={styles.projects_cards} key={project.id}>
            <h3>{project.title}</h3>
            <Link to={`/project/${project.id}`}>
              <img src={project.image} alt={project.title} />
              <p>{project.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default Projects;
