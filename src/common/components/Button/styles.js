import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 5px;
  color: white;
  background-color: #00a870;
  cursor: pointer;
  margin-left: 20px;
  width: ${({ widthButton }) => {
    return widthButton || "100px";
  }};
  height: ${({ heightButton }) => {
    return heightButton || "100px";
  }};
`;
