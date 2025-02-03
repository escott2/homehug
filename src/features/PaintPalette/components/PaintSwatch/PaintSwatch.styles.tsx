import styled from "styled-components";

export const ListItem = styled.li<{ $paintColor: string }>`
  background-color: ${({ $paintColor }) => $paintColor};
`;

export const FrontSwatchContainer = styled.div<{ $paintColor: string }>`
  background-color: ${({ $paintColor }) => $paintColor};
  height: 100%;
`;

export const BackSwatchContainer = styled.div<{ $paintColor: string }>`
  background-color: #ffffff;
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
  border-top: 30px solid ${({ $paintColor }) => $paintColor};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;
