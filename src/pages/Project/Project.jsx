import styles from './Project.module.css'
import projects from "../../json/Projects.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Project = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);

        const selectedProject = projects.find((project) => project.id == id);

        // Atualizar o estado da skill
        setProject(selectedProject);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !project) {
    return <p>Ocorreu um erro ao carregar a skill.</p>;
  }

  return(
    <div>
      <div>
        <h1>{project.title}</h1>
      </div>
    </div>
  )
};

export default Project;
