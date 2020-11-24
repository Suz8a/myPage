import { Grid } from "@material-ui/core";
import React, { ReactNode } from "react";
import { Section } from "./styled";

type MySectionProps = {
  children: ReactNode;
};

function MySection({ children }: MySectionProps) {
  return <Section>{children}</Section>;
}

export default MySection;
