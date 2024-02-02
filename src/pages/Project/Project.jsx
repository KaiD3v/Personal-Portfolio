import React from "react";
import styles from "./Project.module.css";
import projects from "../../json/Projects.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
    return <p className={styles.loading}>Loading...</p>;
  }

  if (error || !project) {
    return (
      <p className={styles.error}>Ocorreu um erro ao carregar o projeto.</p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{project.title}</h1>
        <h6>{project.date}</h6>
      </div>
      <div className={styles.links_container}>
        <ul>
          <li className={styles.list}>{project.links.map((link, index) => (
            <a href=""><li key={index}>{link}</li></a>
          ))}</li>
        </ul>
      </div>
      <div className={styles.content_container}>
        <p>{project.content}</p>
      </div>
    </div>
  );
};

export default Project;
