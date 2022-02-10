import styled from "styled-components";

export const ImageUser = styled.img`
  height: 240px;
  width: 240px;
  max-width: 240px;
  min-width: 240px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
`;

export const ImageUserDefault = styled.div`
  height: 240px;
  width: 240px;
  max-width: 240px;
  min-width: 240px;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FirstLine = styled.hr`
  width: 100%;
  transform: rotate(45deg);
  background-color: black;
  position: absolute;
`;

export const SecondLine = styled.hr`
  width: 100%;
  transform: rotate(135deg);
  background-color: black;
  position: absolute;
`;
