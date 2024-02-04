import styles from "./Skill.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import skills from "../../json/Skills.json";
import { motion as m } from "framer-motion";

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

        const selectedSkill = skills.find((skill) => skill.id == id);

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
    <m.div
      className={styles.skill_container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className={styles.title_container}>
        <h1>{skill.title}</h1>
      </div>
      <div className={styles.text_container}>
        <p>{skill.text}</p>
      </div>
      <div className={styles.features_container}>
        <h3>Features:</h3>
        <ul>
          {skill.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </m.div>
  );
};

export default Skill;