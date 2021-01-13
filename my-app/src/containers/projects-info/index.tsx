import React from "react";
import MySection from "../../components/section";
import { projectsImages } from "../../content/section-projects-info";
import {
  ProjectsContainer,
  TopProjectImage,
  BottomProjectImage,
  ProjectsImagesContainer,
  TextIconsContainer,
  CirclesContainer,
  StyledIconCircle,
} from "./styled";

function ProjectsInfo() {
  return (
    <MySection>
      <ProjectsContainer>
        <ProjectsImagesContainer>
          <TopProjectImage src={projectsImages["mobile"]} />
          <BottomProjectImage src={projectsImages["desktop"]} />
        </ProjectsImagesContainer>
        <TextIconsContainer>
          <CirclesContainer>
            <StyledIconCircle>
              <div>desktop</div>
            </StyledIconCircle>
            <StyledIconCircle>
              <div>mobile</div>
            </StyledIconCircle>
          </CirclesContainer>
        </TextIconsContainer>
      </ProjectsContainer>
    </MySection>
  );
}

export default ProjectsInfo;
