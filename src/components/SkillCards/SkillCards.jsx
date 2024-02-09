import React from "react";
import styles from "./SkillCards.module.css";
import skills from "../../json/Skills.json";
import * as Dialog from "@radix-ui/react-dialog";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SkillCards = () => {
  const [skill, setSkill] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const selectedSkill = skills.find((skill) => skill.id == id);

        setSkill(selectedSkill);
      } catch (error) {
        setError(error);
      }
    };

    fetchSkill();
  }, [id]);

  return (
    <div className={styles.skills_align_container}>
      {skills.map((skill) => (
        <Dialog.Root key={skill.id}>
          <Dialog.Trigger className={styles.dialog_trigger}>
            <Dialog.Title>{skill.title}</Dialog.Title>
            <img
              style={{
                height: "12rem",
                width: "10rem",
                border: "none",
                borderRadius: "1rem",
              }}
              src={skill.img}
              alt={skill.title}
            />
            <Dialog.Description>{skill.desc}</Dialog.Description>
          </Dialog.Trigger>
          <Dialog.Content className={styles.dialog_content}>
            
              <h1>{skill.title}</h1>
           
            <Dialog.Description>
              {skill.text}
            </Dialog.Description>
            <h3>Features:</h3>
            <ul>
              {skill.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </Dialog.Content>
        </Dialog.Root>
      ))}
    </div>
  );
  
};

export default SkillCards;
