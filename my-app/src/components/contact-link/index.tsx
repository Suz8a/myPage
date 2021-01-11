import React from "react";
import { MyLinkContact } from "./styled";

type ContactLinkProps = {
  src: string;
  alt: string;
  link: string;
};

function ContactLink({ src, alt, link }: ContactLinkProps) {
  return (
    <a href={link} title={alt} target="_blank" rel="noreferrer">
      <MyLinkContact src={src} alt={alt} />
    </a>
  );
}

export default ContactLink;
