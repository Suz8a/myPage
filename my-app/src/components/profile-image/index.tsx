import React from "react";
import { MyImage } from "./styled";
import { profilePicture } from "../../content/section-contact-info";
function ProfileImage() {
  return <MyImage src={profilePicture} />;
}

export default ProfileImage;
