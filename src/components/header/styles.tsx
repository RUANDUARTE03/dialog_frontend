import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  max-height: 100px;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    max-height: 70px;
  }

  @media (min-width: 1024px) {
    flex-direction: column;
    position: relative;
  }
`;

export const BodyHeader = styled.div`
  display: grid;
  min-height: 70px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 2fr;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  color: black;
  font-weight: 700;
  margin: 12px;
`;

export const InputSearch = styled.input`
  height: 32px;
  border-radius: 16px;
  border: 1px solid black;
  margin: 12px;
  padding-left: 12px;
  color: black;

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }
`;
