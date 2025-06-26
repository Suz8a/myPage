import React from 'react';
import {
  ButtonText,
  Divider,
  InfoContainer,
  Job,
  LinksContainer,
  MainButton,
  Name,
  TextContainer,
} from './styled';
import { name, job } from '../../content/section-contact-info';
import ContactLink from '../../components/contact-link';
import { contactLinks } from '../../content/section-contact-info';

import * as Scroll from 'react-scroll';

var scroll = () =>
  Scroll.animateScroll.scrollToBottom({
    duration: 100,
    smooth: 'easeInQuart',
  });

function PersonalInfo() {
  return (
    <InfoContainer>
      <TextContainer>
        <Name>{name}</Name>
        <Divider />
        <Job>{job}</Job>
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
        <ButtonText>Let's talk</ButtonText>
      </MainButton>
    </InfoContainer>
  );
}

export default PersonalInfo;
