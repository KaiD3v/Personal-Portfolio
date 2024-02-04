import styles from "./SkillCards.module.css"
import skills from "../../json/Skills.json"
import { Link } from 'react-router-dom';

const SkillCards = () => {
  return (
    <div className={styles.skills_align_container}>
      {skills.map((skill) => (
        <div className={styles.skills_cards} key={skill.id}>
          <h3>{skill.title}</h3>
          <Link to={`/skill/${skill.id}`}>
            <img src={skill.img} alt={skill.title} />
          </Link>
          <p>{skill.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillCards;
