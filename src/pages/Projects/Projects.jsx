import styles from "./Projects.module.css";
import projectsData from "../../json/Projects.json";  // Importando diretamente o arquivo JSON
import { useState, useEffect } from "react";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [projects, setProjects] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        projectsData // n sei como isso deu certo...
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
 