import styled from "styled-components";

export const ParagraphContainer = styled.p`
  text-align: ${({ align }) => align};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  line-height: 28px;
  padding-top: 30px;
  padding-bottom: 30px;
  width: ${({ widthSize }) => widthSize || "auto"};
`;
