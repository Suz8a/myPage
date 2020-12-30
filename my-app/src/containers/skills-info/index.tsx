import React from "react";
import SectionTitle from "../../components/section-title";
import { SkillInfoContainer, MyStyledSection } from "./styled";
import { skills } from "../../content/section-skills-info";
import SkillCircle from "../../components/skill-circle";

function SkillsInfo() {
  return (
    <MyStyledSection>
      <SectionTitle title="Skills" />
      <SkillInfoContainer>
        {skills.map((skill, index) => {
          return <SkillCircle key={index} src={skill.img} alt={skill.name} />;
        })}
      </SkillInfoContainer>
    </MyStyledSection>
  );
}

export default SkillsInfo;
