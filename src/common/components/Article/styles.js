import styled from "styled-components";

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: ${({ isCenter }) => (isCenter ? "column" : "row")};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: 100%;
  height: auto;
  align-items: center;
  padding-top: ${({ paddingTop }) => paddingTop || "0px"};

  @media only screen and (max-width: 900px) {
    flex-direction: ${({ isReverse }) =>
      isReverse ? "column-reverse" : "column"};
    align-items: center;
    width: 100%;
  }
`;
