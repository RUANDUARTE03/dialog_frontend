import React from "react";
import { ContainerHeader, BodyHeader, Title, InputSearch } from "./styles";

type HeaderProps = {
  searchInput: string;
  setSearchInput: (e: any) => void;
};

export default function Header({ searchInput, setSearchInput }: HeaderProps) {
  return (
    <ContainerHeader>
      <BodyHeader>
        <Title>MyAPP - Ruan Duarte</Title>
        <InputSearch
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </BodyHeader>
    </ContainerHeader>
  );
}
