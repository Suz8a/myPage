import React from "react";
import { Title } from "./styled";

type SectionTitleProps = {
  title: string;
};

function SectionTitle({ title }: SectionTitleProps) {
  return <Title variant="h2">{title}</Title>;
}

export default SectionTitle;
