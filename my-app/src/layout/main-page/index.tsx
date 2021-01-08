import React from "react";
import ContactInfo from "../../containers/contact-info";
import SkillsInfo from "../../containers/skills-info";
import WorkInfo from "../../containers/work-info";

function MainPage() {
  return (
    <div>
      <ContactInfo />
      <SkillsInfo />
      <WorkInfo />
    </div>
  );
}

export default MainPage;
