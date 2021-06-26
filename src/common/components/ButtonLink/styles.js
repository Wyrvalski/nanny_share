import styled from "styled-components";

export const ButtonContainer = styled.a`
  border-radius: 5px;
  background-color: #00a870;
  cursor: pointer;
  margin-left: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  &:hover {
    background-color: white; /* Green */
    li {
      color: #00a870;
    }
  }
  width: ${({ widthButton }) => {
    return widthButton || "100px";
  }};
  height: ${({ heightButton }) => {
    return heightButton || "auto";
  }};
`;
