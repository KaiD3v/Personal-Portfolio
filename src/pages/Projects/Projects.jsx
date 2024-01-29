import styles from "./Projects.module.css";
import projectsData from "../../json/Projects.json";
import { useState, useEffect } from "react";

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
    <div>
      {projectsData.map((project) => (
        <div key={project.id}>
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
 