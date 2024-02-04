import styles from './Skills.module.css'
import skills from '../../json/Skills.json'
import { useState } from 'react';
import SkillCards from '../../components/SkillCards/SkillCards';
import { motion as m } from 'framer-motion';


const Skills = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os projetos.</p>;
  }

  return (
    <m.div className={styles.skills_container}
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
        ease: 'easeInOut'
      }}>
      <SkillCards />
    </m.div>
  )
}

export default Skills