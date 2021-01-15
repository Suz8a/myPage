import React, { ReactNode } from "react";
import { Section } from "./styled";

type MySectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

function MySection({ className, children, id }: MySectionProps) {
  return (
    <Section className={className} id={id}>
      {children}
    </Section>
  );
}

export default MySection;
