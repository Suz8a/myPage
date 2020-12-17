import React from "react";
import PersonalInfo from "../../components/personal-info";
import ProfileImage from "../../components/profile-image";
import MySection from "../../components/section";
import { ContactInfoContainer } from "./styled";

function ContactInfo() {
  return (
    <MySection>
      <ContactInfoContainer>
        <PersonalInfo />
        <ProfileImage />
      </ContactInfoContainer>
    </MySection>
  );
}

export default ContactInfo;
