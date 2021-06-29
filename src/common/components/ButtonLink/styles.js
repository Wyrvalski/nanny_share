import styled from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 5px;
  background-color: #00a870;
  cursor: pointer;
  margin-left: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  border: none;
  color: white;
  &:hover {
    opacity: 0.8; /* Green */
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
