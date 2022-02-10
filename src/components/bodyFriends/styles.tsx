import styled from "styled-components";

export const ContainerBodyFriends = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Friend = styled.div`
  margin: 12px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 12px;
  justify-content: center;
  align-items: center;
`;

export const ImageUser = styled.div`
  height: 240px;
  width: 240px;
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

export const BodyInformations = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 240px;
`;
