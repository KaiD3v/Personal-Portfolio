import styles from "./Skill.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import skills from '../../json/Skills.json';

const Skill = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [skill, setSkill] = useState(null);

  // find skill based on params id
  useEffect(() => {
    const fetchSkill = async () => {
      try {

        setLoading(true);

        const selectedSkill = skills.find(skill => skill.id == id);

        // Atualizar o estado da skill
        setSkill(selectedSkill);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkill();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !skill) {
    return <p>Ocorreu um erro ao carregar a skill.</p>;
  }

  return (
    <div className={styles.skill_container}>
      <main className={styles.main}>
      <h1>{skill.title}</h1>
      <p>{skill.text}</p>
      </main>
    </div>
  );
};

export default Skill;
