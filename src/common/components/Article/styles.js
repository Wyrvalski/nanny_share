import styled from "styled-components";

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: ${({ isCenter }) => (isCenter ? "column" : "row")};
  justify-content: ${({ isCenter }) => (isCenter ? "center" : "space-between")};
  width: 100%;
  height: auto;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: ${({ isReverse }) =>
      isReverse ? "column-reverse" : "column"};
    align-items: center;
    width: 100%;
  }
`;
