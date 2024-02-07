import styles from "./ProjectsCards.module.css"
import projectsData from "../../json/Projects.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectsCards = () => {
    const [projects, setProjects] = useState();

  return (
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
  )
}

export default ProjectsCards