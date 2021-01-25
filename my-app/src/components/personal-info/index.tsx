import { Typography } from "@material-ui/core";
import React from "react";
import {
  Divider,
  InfoContainer,
  LinksContainer,
  MainButton,
  TextContainer,
} from "./styled";
import { name, job } from "../../content/section-contact-info";
import ContactLink from "../../components/contact-link";
import { contactLinks } from "../../content/section-contact-info";

import * as Scroll from "react-scroll";

var scroll = () =>
  Scroll.animateScroll.scrollToBottom({
    duration: 100,
    smooth: "easeInQuart",
  });

function PersonalInfo() {
  return (
    <InfoContainer>
      <TextContainer>
        <Typography variant="h2">{name}</Typography>
        <Divider />
        <Typography variant="h4">{job}</Typography>
      </TextContainer>
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

      <MainButton variant="contained" color="primary" onClick={scroll}>
        <Typography variant="h2">Let's talk</Typography>
      </MainButton>
    </InfoContainer>
  );
}

export default PersonalInfo;
