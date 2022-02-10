import React from "react";
import { InformationContainer, Title, Info } from "./styles";

type informationProps = {
  title: string;
  info: string;
};

export default function Information({ info, title }: informationProps) {
  return (
    <InformationContainer>
      <Title>{title}</Title>
      <Info>{info}</Info>
    </InformationContainer>
  );
}
