import styles from "./Projects.module.css";
import projectsData from "../../json/Projects.json";
import { useState } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState()

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os projetos.</p>;
  }

  return (
    <div className={styles.projects_container}>

      <div className={styles.cards_align_container}>
      {projectsData.map((project) => (
        <div className={styles.projects_cards} key={project.id}>
          <h3>{project.title}</h3>
          <img src={project.image} alt={project.title} />
          <p>{project.desc}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
 