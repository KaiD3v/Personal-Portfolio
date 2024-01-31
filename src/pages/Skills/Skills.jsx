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
    <div>
        <h1>Skills</h1>
        {skills.map((skill) => (
          <div key={skill.id}>
            <img src={skill.img} alt={skill.title} />
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
    </div>
  )
}

export default Skills