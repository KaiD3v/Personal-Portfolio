import styles from './Skills.module.css'
import skills from '../../json/Skills.json'
import { useState } from 'react';

const Skills = () => {
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
    <div className={styles.skills_container}>

        <div className={styles.skills_align_container}>
        {skills.map((skill) => (
          <div className={styles.skills_cards} key={skill.id}>
            <h3>{skill.title}</h3>
            <img src={skill.img} alt={skill.title} />
            <p>{skill.desc}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Skills