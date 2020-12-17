import React from "react";
import { MyLinkContact } from "./styled";

export type ContactLinkProps = {
  src: string;
  alt: string;
  link: string;
};

const ContactLink = (props: ContactLinkProps) => {
  return (
    <a href={props.link} title={props.alt} target="_blank">
      <MyLinkContact src={props.src} alt={props.alt} />
    </a>
  );
};

export default ContactLink;
