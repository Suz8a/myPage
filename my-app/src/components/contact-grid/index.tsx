import React, { ReactNode } from "react";
import { ContactSectionGrid } from "./styled";

type MyContactGridProps = {
  children: ReactNode;
};

function ContactGrid({ children }: MyContactGridProps) {
  return <ContactSectionGrid>{children}</ContactSectionGrid>;
}

export default ContactGrid;
