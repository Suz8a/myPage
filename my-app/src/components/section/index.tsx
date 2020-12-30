import React, { ReactNode } from "react";
import { Section } from "./styled";

type MySectionProps = {
  children: ReactNode;
  className?: string;
};

function MySection({ className, children }: MySectionProps) {
  return <Section className={className}>{children}</Section>;
}

export default MySection;
