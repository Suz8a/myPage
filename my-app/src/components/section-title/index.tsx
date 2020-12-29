import React from "react";
import { Title } from "./styled";

export type SectionTitleProps = {
  title: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  return <Title variant="h2">{props.title}</Title>;
};

export default SectionTitle;
