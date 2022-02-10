import React from "react";
import { ImageUser, ImageUserDefault, FirstLine, SecondLine } from "./styles";

type imageUserProps = {
  picture: string;
};

export default function ImageUserComponent({ picture }: imageUserProps) {
  return (
    <>
      {picture ? (
        <ImageUser src={picture} alt="igmg_use" />
      ) : (
        <ImageUserDefault>
          <>
            <FirstLine />
            <SecondLine />
          </>
        </ImageUserDefault>
      )}
    </>
  );
}
