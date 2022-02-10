import styled from "styled-components";

export const Title = styled.p`
  font-size: 22px;
  margin: 12px;
`;

export const BodyUser = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px;
  align-items: center;

  @media (min-width: 524px) {
    flex-direction: row;
  }
`;

export const BodyInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 18px;
`;
