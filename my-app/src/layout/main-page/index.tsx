import React from "react";
import ContactInfo from "../../containers/contact-info";
import ContactMe from "../../containers/contact-me";
import ProjectsInfo from "../../containers/projects-info";
import SkillsInfo from "../../containers/skills-info";
import WorkInfo from "../../containers/work-info";

function MainPage() {
  return (
    <div>
      <ContactInfo />
      <SkillsInfo />
      <WorkInfo />
      <ProjectsInfo />
      <ContactMe />
    </div>
  );
}

export default MainPage;
