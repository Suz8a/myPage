import React from "react";
import MySection from "../../components/section";
import {
  projectsImages,
  projectsLink,
  projectsTitle,
} from "../../content/section-projects-info";
import {
  ProjectsContainer,
  TopProjectImage,
  BottomProjectImage,
  ProjectsImagesContainer,
  TextIconsContainer,
  CirclesContainer,
  StyledIconCircle,
  StyledPhoneIcon,
  StyledLaptopIcon,
  ProjectsTitle,
  ProjectsLink,
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
              <StyledLaptopIcon />
            </StyledIconCircle>
            <StyledIconCircle>
              <StyledPhoneIcon />
            </StyledIconCircle>
          </CirclesContainer>
          <ProjectsTitle>{projectsTitle}</ProjectsTitle>
          <ProjectsLink href={projectsLink.link} target="_blank">
            {projectsLink.text}
          </ProjectsLink>
        </TextIconsContainer>
      </ProjectsContainer>
    </MySection>
  );
}

export default ProjectsInfo;
