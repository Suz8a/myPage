import React from "react";
import { ContactSectionGrid } from "../../components/contact-grid/styled";
import PersonalInfo from "../../components/personal-info";
import ProfileImage from "../../components/profile-image";
import MySection from "../../components/section";

function ContactInfo() {
  return (
    <MySection>
      <ContactSectionGrid>
        <PersonalInfo />
        <ProfileImage />
      </ContactSectionGrid>
    </MySection>
  );
}

export default ContactInfo;
