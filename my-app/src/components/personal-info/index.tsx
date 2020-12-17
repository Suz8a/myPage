import { Typography } from "@material-ui/core";
import React from "react";
import { Divider, InfoContainer, LinksContainer } from "./styled";
import { name, job } from "../../content/section-contact-info";
import ContactLink from "../../components/contact-link";
import { contactLinks } from "../../content/section-contact-info";

function PersonalInfo() {
  return (
    <InfoContainer>
      <Typography variant="h2">{name}</Typography>
      <Divider />
      <Typography variant="h4">{job}</Typography>
      <LinksContainer>
        {contactLinks.map((contactLink, index) => {
          return (
            <ContactLink
              key={index}
              src={contactLink.imgSource}
              alt={contactLink.contact}
              link={contactLink.link}
            />
          );
        })}
      </LinksContainer>
    </InfoContainer>
  );
}

export default PersonalInfo;
